import React, { useState } from 'react';
import { X, RefreshCw, Trophy, Gamepad2, User, Bot, Sparkles } from 'lucide-react';

interface MarbleGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Player = 'P1' | 'P2'; // P1 = Purple, P2 = Cyan

export const MarbleGameModal: React.FC<MarbleGameModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [board, setBoard] = useState<(Player | null)[]>(Array(16).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('P1');
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [vsAI, setVsAI] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [scores, setScores] = useState({ p1: 0, p2: 0 });

  // Check 4 in a row on 4x4 grid
  const checkWinner = (grid: (Player | null)[]) => {
    const lines = [
      // Rows
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
      // Columns
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
      // Diagonals
      [0, 5, 10, 15], [3, 6, 9, 12]
    ];

    for (const line of lines) {
      const [a, b, c, d] = line;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c] && grid[a] === grid[d]) {
        return { winner: grid[a], line };
      }
    }

    if (grid.every(cell => cell !== null)) {
      return { winner: 'Draw' as const, line: [] };
    }

    return null;
  };

  const handleCellClick = (index: number) => {
    if (winner) return;

    // Placement phase or selection/movement phase
    if (board[index] === null) {
      if (selectedCell !== null) {
        // Move marble from selectedCell to index (if adjacent)
        const isAdjacent = Math.abs(Math.floor(selectedCell / 4) - Math.floor(index / 4)) <= 1 &&
                           Math.abs((selectedCell % 4) - (index % 4)) <= 1;
        if (isAdjacent) {
          const newBoard = [...board];
          newBoard[index] = newBoard[selectedCell];
          newBoard[selectedCell] = null;
          executeTurn(newBoard);
          setSelectedCell(null);
          return;
        }
      }

      // Standard placement
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      executeTurn(newBoard);
    } else if (board[index] === currentPlayer) {
      // Select own marble to shift
      setSelectedCell(selectedCell === index ? null : index);
    }
  };

  const executeTurn = (newBoard: (Player | null)[]) => {
    setBoard(newBoard);
    const result = checkWinner(newBoard);

    if (result) {
      if (result.winner === 'P1') {
        setWinner('P1');
        setWinningLine(result.line);
        setScores(prev => ({ ...prev, p1: prev.p1 + 1 }));
      } else if (result.winner === 'P2') {
        setWinner('P2');
        setWinningLine(result.line);
        setScores(prev => ({ ...prev, p2: prev.p2 + 1 }));
      } else {
        setWinner('Draw');
      }
      return;
    }

    const nextPlayer = currentPlayer === 'P1' ? 'P2' : 'P1';
    setCurrentPlayer(nextPlayer);

    // AI move logic
    if (vsAI && nextPlayer === 'P2') {
      setTimeout(() => {
        makeAIMove(newBoard);
      }, 400);
    }
  };

  const makeAIMove = (currentBoard: (Player | null)[]) => {
    // Basic AI: find empty cells
    const emptyIndices = currentBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((val): val is number => val !== null);

    if (emptyIndices.length === 0) return;

    // Check if AI can win
    for (const idx of emptyIndices) {
      const testBoard = [...currentBoard];
      testBoard[idx] = 'P2';
      if (checkWinner(testBoard)?.winner === 'P2') {
        executeTurn(testBoard);
        return;
      }
    }

    // Check if AI needs to block P1
    for (const idx of emptyIndices) {
      const testBoard = [...currentBoard];
      testBoard[idx] = 'P1';
      if (checkWinner(testBoard)?.winner === 'P1') {
        const aiBoard = [...currentBoard];
        aiBoard[idx] = 'P2';
        executeTurn(aiBoard);
        return;
      }
    }

    // Otherwise random move
    const randomIdx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const aiBoard = [...currentBoard];
    aiBoard[randomIdx] = 'P2';
    executeTurn(aiBoard);
  };

  const resetGame = () => {
    setBoard(Array(16).fill(null));
    setCurrentPlayer('P1');
    setSelectedCell(null);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-chakra font-bold text-white">
                Moving Marble Game
              </h2>
              <p className="text-xs text-zinc-400 font-medium">4x4 Strategic Alignment Challenge</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode & Scores */}
        <div className="my-4 flex items-center justify-between gap-2 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
          <div className="flex items-center gap-3 text-xs font-chakra">
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${currentPlayer === 'P1' && !winner ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-zinc-400'}`}>
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>You: {scores.p1}</span>
            </div>
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${currentPlayer === 'P2' && !winner ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'text-zinc-400'}`}>
              {vsAI ? <Bot className="w-3.5 h-3.5 text-zinc-300" /> : <User className="w-3.5 h-3.5 text-zinc-300" />}
              <span>{vsAI ? 'AI' : 'P2'}: {scores.p2}</span>
            </div>
          </div>

          <button
            onClick={() => { setVsAI(!vsAI); resetGame(); }}
            className="text-[11px] font-chakra px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors border border-zinc-700"
          >
            Mode: {vsAI ? 'vs AI' : '2-Player'}
          </button>
        </div>

        {/* Winner Banner */}
        {winner && (
          <div className="mb-4 p-3 rounded-xl bg-zinc-950 border border-amber-500/50 text-center animate-bounce">
            <div className="flex items-center justify-center gap-2 text-white font-chakra font-bold text-sm">
              <Trophy className="w-4 h-4 text-amber-400" />
              {winner === 'P1' ? 'You Won!' : winner === 'P2' ? (vsAI ? 'AI Won!' : 'Player 2 Won!') : "It's a Draw!"}
            </div>
          </div>
        )}

        {/* Game Grid */}
        <div className="grid grid-cols-4 gap-2.5 p-3 bg-zinc-950/80 rounded-2xl border border-zinc-800">
          {board.map((cell, idx) => {
            const isWinningCell = winningLine.includes(idx);
            const isSelected = selectedCell === idx;

            return (
              <button
                key={idx}
                onClick={() => handleCellClick(idx)}
                className={`aspect-square rounded-xl flex items-center justify-center transition-all duration-200 relative ${
                  isSelected ? 'ring-2 ring-amber-400 bg-zinc-900' :
                  isWinningCell ? 'bg-amber-500/20 ring-2 ring-amber-400 scale-105' :
                  cell === null ? 'bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800' :
                  'bg-zinc-900 border border-zinc-800'
                }`}
              >
                {cell === 'P1' && (
                  <div className="w-8 h-8 rounded-full bg-amber-500 shadow-lg border border-amber-300 animate-fadeIn" />
                )}
                {cell === 'P2' && (
                  <div className="w-8 h-8 rounded-full bg-zinc-600 shadow-lg border border-zinc-400 animate-fadeIn" />
                )}
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] font-chakra text-zinc-400">
            {selectedCell !== null ? 'Click adjacent empty space to shift marble' : 'Click empty cell to place marble'}
          </span>
          <button
            onClick={resetGame}
            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-chakra font-semibold rounded-lg transition-colors border border-zinc-700 flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
