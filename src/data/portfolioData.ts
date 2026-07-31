import { Project, Experience, Education, Skill, Achievement } from '../types';

const ASSET_PREFIX = '/assets';

export const PROFILE = {
  name: "Swarnim Jain",
  role: "AI Engineer & Software Development Engineer",
  company: "Negenux Solutions",
  previousCompany: "Decimal Point Analytics",
  location: "Hyderabad, India",
  locationFull: "Hyderabad, Telangana, India",
  summary: "AI Engineer specializing in cloud-native backend systems, agentic AI workflows, and high-throughput distributed services. Expert in Python, C++, and AWS, with deep experience in FastAPI microservices, containerized deployments, multi-agent AI architectures, and automated data pipelines. Passionate about building scalable, secure systems that deliver measurable results.",
  email: "swarnimjain992@gmail.com",
  linkedin: "https://www.linkedin.com/in/swarnim-jain/",
  github: "https://github.com/swarnim992",
  leetcode: "https://leetcode.com/u/swarnim992/",
  instagram: "https://www.instagram.com/_swarnim.jain_/",
  codechef: "https://www.codechef.com/users/swarnim992",
  resumeUrl: "https://github.com/swarnim992/swarnim992/raw/main/Swarnim%20Jain.pdf",
  avatar: `${ASSET_PREFIX}/swarnim.png`,
  locationImage: `${ASSET_PREFIX}/hyderabad.jpg`
};

export const PROJECTS: Project[] = [
  {
    id: "globle-dealer",
    title: "Global Dealer Operations & Marketing Platform",
    description: "Global cloud-based dealer operations and marketing platform built using Python FastAPI and RESTful microservices.",
    image: `${ASSET_PREFIX}/project/globle_dealer.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/python.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/fastapi.svg`,
    keyFeatures: "• Developed 100+ secure Python REST APIs using FastAPI in a microservices architecture.\n• Implemented role-based access control and API gateway based request handling.\n• Improved backend performance by 30% through optimized regional and product-level data aggregation.\n• Deployed on cloud infrastructure with a focus on scalability, security, and high availability.",
    githubLink: "",
    demoVideoLink: "",
    category: "Backend / Cloud"
  },
  {
    id: "financial-app",
    title: "Financial Mobile Application",
    description: "Financial Mobile is a feature-rich stock market app built with Flutter, providing real-time financial data, portfolio management, and market insights on the go.",
    image: `${ASSET_PREFIX}/project/quotestream1.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/flutter.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/dart.svg`,
    keyFeatures: "• Real-time stock quotes, forex, and market updates.\n• Advanced Portfolio Management.\n• Interactive Charts & Watchlists.\n• Efficient State Management.",
    githubLink: "",
    demoVideoLink: "",
    category: "Mobile App"
  },
  {
    id: "rent-portal",
    title: "Rent Portal",
    description: "Built a Rent client portal using Django with role-based access and automated document processing, streamlining rental operations and financial workflows.",
    image: `${ASSET_PREFIX}/project/rentroll.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/python.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/django.svg`,
    keyFeatures: "• Role-based Access Control: Secure login system for Admins, Analysts, and Users.\n• OCI Integration: Safe file storage with automated Excel & PDF parsing.\n• Auto Interest Calculation: Boosted financial accuracy by 70% with dynamic computations.\n• Workflow Automation: Reduced manual effort, improving user efficiency significantly.",
    githubLink: "",
    demoVideoLink: "",
    category: "Fullstack Web"
  },
  {
    id: "financial-insights-dashboard",
    title: "AI-Powered Financial Insights Dashboard",
    description: "A smart system that analyzes financial data in real time, providing insights and helping with better decision-making.",
    image: `${ASSET_PREFIX}/project/hackathon.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/fastapi.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/python.svg`,
    keyFeatures: "• Developed scalable APIs for real-time financial data processing.\n• AI-Driven Portfolio Analysis.\n• Scalable Backend Architecture.\n• Dynamic Data Visualization.",
    githubLink: "",
    demoVideoLink: "",
    category: "AI & Analytics"
  },
  {
    id: "todo-springboot",
    title: "ToDo Using Spring Boot",
    description: "Built a secure ToDo backend with Spring Boot featuring full CRUD APIs, role-based access, and Swagger documentation to boost efficiency and team collaboration.",
    image: `${ASSET_PREFIX}/project/todo.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/spring_boot.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/java.svg`,
    keyFeatures: "• CRUD API with Spring Boot: Handled all create, read, update, and delete operations.\n• Role-based Authentication: Secured access using user roles and permissions.\n• Swagger Integration: Easy API testing and clear documentation for developers.\n• Improved Efficiency: Boosted backend speed and code maintainability by 90%.",
    githubLink: "https://github.com/swarnim992/todo_springboot",
    demoVideoLink: "",
    category: "Backend Services"
  },
  {
    id: "gully-cricket",
    title: "Gully Cricket",
    description: "Gully Cricket App is a lightweight and user-friendly cricket scoring application that helps track scores and set targets effortlessly.",
    image: `${ASSET_PREFIX}/project/gully.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/flutter.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/dart.svg`,
    keyFeatures: "• Easily update and monitor cricket scores.\n• Target Setting & Live Run Rate calculations.\n• GetX State Management.\n• Optimized for smooth user experience.",
    githubLink: "https://github.com/swarnim992/gully_cricket",
    demoVideoLink: "https://gullycrickett.netlify.app/",
    category: "Mobile App"
  },
  {
    id: "automation-alert",
    title: "Automation Alert",
    description: "Automation Script Making is a Python-based project that automates data extraction, processing, and alerting by gathering information from various websites and notifying users of relevant matches.",
    image: `${ASSET_PREFIX}/project/automation.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/git.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/python.svg`,
    keyFeatures: "• Optimized Data Processing.\n• Web Data Scraping & Parsing.\n• Automated Real-time Alerts.\n• Performance Optimization.",
    githubLink: "",
    demoVideoLink: "",
    category: "Automation & Tools"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and experience. Made the website fully responsive across all platforms with smooth UI animations.",
    image: `${ASSET_PREFIX}/project/portfolio.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/react.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/javascript.svg`,
    keyFeatures: "• Responsive bento-grid layout.\n• Interactive contact & social integrations.\n• One-click Resume download.\n• Smooth UI & Animations.",
    githubLink: "https://github.com/swarnim992/swarnim_portfolio",
    demoVideoLink: "https://swarnimjain.netlify.app/",
    category: "Frontend Web"
  },
  {
    id: "moving-marble",
    title: "Moving Marble Game",
    description: "Moving Marble Game is a strategic and engaging 4x4 grid-based game where players place and shift marbles to align four in a row and win.",
    image: `${ASSET_PREFIX}/project/marble.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/flutter.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/dart.svg`,
    keyFeatures: "• Dynamic Marble Movement logic.\n• Game History & Preferences.\n• Winning Strategies & AI / Local multiplayer modes.\n• Smooth UI & Animations.",
    githubLink: "https://github.com/swarnim992/Moving-Marble-Multiplayer-Game",
    demoVideoLink: "https://movingmarblegame.netlify.app/",
    category: "Game / Flutter"
  },
  {
    id: "insta-story",
    title: "Insta Story App",
    description: "Insta Story App is a high-performance application replicating Instagram's story feature with a seamless and smooth user experience.",
    image: `${ASSET_PREFIX}/project/instastory.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/flutter.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/dart.svg`,
    keyFeatures: "• Built with efficient Flutter code for smooth transitions and animations.\n• State Management with GetX.\n• User-Friendly UI.\n• Interact with stories just like Instagram.",
    githubLink: "https://github.com/swarnim992/instaStoryApp",
    demoVideoLink: "https://instastorylite.netlify.app/",
    category: "Mobile App"
  },
  {
    id: "blood-connector",
    title: "Blood Connector",
    description: "Blood Connector is a native Android application designed to quickly connect users and hospitals with blood donors in emergencies, ensuring fast and reliable access to life-saving resources.",
    image: `${ASSET_PREFIX}/project/blood.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/java.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/android.svg`,
    keyFeatures: "• Secure authentication and profile management via Firebase.\n• Quickly find and request blood from registered donors.\n• Real-time authentication and data synchronization.",
    githubLink: "https://github.com/swarnim992/Blood_Connector",
    demoVideoLink: "",
    category: "Android Native"
  },
  {
    id: "vehicle-overload",
    title: "Vehicle Overload Detection System",
    description: "A smart system that tracks vehicle load in real time and automatically sends alerts when an overload is detected.",
    image: `${ASSET_PREFIX}/project/vehical.png`,
    flutterSvg: `${ASSET_PREFIX}/svg/arduino.svg`,
    dartSvg: `${ASSET_PREFIX}/svg/cpp.svg`,
    keyFeatures: "• Arduino Nano-Based System.\n• GSM Alert System.\n• Optimized C++ Code.",
    githubLink: "https://github.com/swarnim992/Vehicle-Overload-Detection-System",
    demoVideoLink: "",
    category: "Embedded / IoT"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "AI Engineer",
    companyName: "Negenux Solutions",
    startTime: "Feb 2026",
    endTime: "Present",
    workType: "On Site",
    duration: "Current Role",
    start: true,
    end: false,
    description: "Building multiple production AI-powered backend systems as the sole developer - including an Intelligent Document Processing (IDP) platform with a multi-agent architecture for classification, quality validation, data extraction, and confidence-based verification. Also delivering other Gen AI and automation initiatives. Responsible for end-to-end backend development and AWS infrastructure (EC2, Lambda, S3, IAM, Docker) using Python and FastAPI, designing scalable automated workflows that significantly reduce manual effort and improve processing accuracy.",
    shortDescription: "Sole developer building multiple AI-powered backend systems including a multi-agent IDP platform (classification, extraction, verification) and other Gen AI initiatives. Full AWS infrastructure ownership using Python, FastAPI, and Docker."
  },
  {
    id: "exp-2",
    role: "Software Development Engineer",
    companyName: "Decimal Point Analytics",
    startTime: "Mar 2024",
    endTime: "Jan 2026",
    workType: "On Site",
    duration: "2 Years",
    start: false,
    end: true,
    description: "Designed and deployed 100+ secure microservices and REST APIs with role-based access control and API gateway integration across a multi-cloud environment. Optimized distributed backend processing by 30% through region- and product-level data aggregation. Built an event-driven Python automation system with distributed job scheduling to extract, process, and deliver financial data from multiple sources - reducing manual effort by 80% and ensuring low-latency, reliable pipelines.",
    shortDescription: "Delivered 100+ secure REST APIs with RBAC across a multi-cloud environment. Achieved 30% backend performance boost and 80% reduction in manual operations via event-driven automation pipelines."
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: "edu-1",
    institutionName: "Savitribai Phule Pune University",
    startTime: "Sep 2020",
    endTime: "Jul 2023",
    department: "B.E. Computer Engineering",
    grade: "8.8 CGPA",
    start: true,
    end: false
  },
  {
    id: "edu-2",
    institutionName: "Government Polytechnic Dhule",
    startTime: "Jul 2017",
    endTime: "Jun 2020",
    department: "Diploma in Computer Engineering",
    grade: "84%",
    start: false,
    end: false
  },
  {
    id: "edu-3",
    institutionName: "R C Patel Secondary School",
    startTime: "Jun 2016",
    endTime: "Jun 2017",
    department: "SSC",
    grade: "88%",
    start: false,
    end: true
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", svgPath: `${ASSET_PREFIX}/svg/python.svg`, category: "Language/Backend" },
  { name: "Agentic AI", svgPath: `${ASSET_PREFIX}/svg/chatgpt.svg`, category: "AI/ML" },
  { name: "Generative AI", svgPath: `${ASSET_PREFIX}/svg/chatgpt.svg`, category: "AI/ML" },
  { name: "Fast API", svgPath: `${ASSET_PREFIX}/svg/fastapi.svg`, category: "Backend" },
  { name: "Django", svgPath: `${ASSET_PREFIX}/svg/django.svg`, category: "Backend" },
  { name: "GraphQL", svgPath: `${ASSET_PREFIX}/svg/graphql.svg`, category: "API/Backend" },
  { name: "PostgreSQL", svgPath: `${ASSET_PREFIX}/svg/postgresql.svg`, category: "Database" },
  { name: "AWS", svgPath: `${ASSET_PREFIX}/svg/aws.svg`, category: "Cloud" },
  { name: "Docker", svgPath: `${ASSET_PREFIX}/svg/docker.svg`, category: "DevOps" },
  { name: "Git", svgPath: `${ASSET_PREFIX}/svg/git.svg`, category: "Tools" },
  { name: "SpringBoot", svgPath: `${ASSET_PREFIX}/svg/spring_boot.svg`, category: "Backend" },
  { name: "JAVA", svgPath: `${ASSET_PREFIX}/svg/java.svg`, category: "Language" },
  { name: "JavaScript", svgPath: `${ASSET_PREFIX}/svg/javascript.svg`, category: "Language" },
  { name: "C++", svgPath: `${ASSET_PREFIX}/svg/cpp.svg`, category: "Language" },
  { name: "Flutter", svgPath: `${ASSET_PREFIX}/svg/flutter.svg`, category: "Mobile/Frontend" },
  { name: "Dart", svgPath: `${ASSET_PREFIX}/svg/dart.svg`, category: "Language" },
  { name: "Android", svgPath: `${ASSET_PREFIX}/svg/android.svg`, category: "Mobile" },
  { name: "MySQL", svgPath: `${ASSET_PREFIX}/svg/mysql.svg`, category: "Database" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "NashLon Hackathon - 1st Place",
    subtitle: "Secured 1st position in NashLon hackathon organized by IEEE",
    icon: "🏆",
    color: "amber"
  },
  {
    id: "ach-2",
    title: "3-Star CodeChef  •  LeetCode 1600+",
    subtitle: "Highest CodeChef rating 1771 (3 Stars) · LeetCode 1600+ rating",
    icon: "⭐",
    color: "sky"
  }
];

const MONTHS_MAP: Record<string, number> = {
  jan: 0, january: 0,
  feb: 1, february: 1,
  mar: 2, march: 2,
  apr: 3, april: 3,
  may: 4,
  jun: 5, june: 5,
  jul: 6, july: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9,
  nov: 10, november: 10,
  dec: 11, december: 11,
};

export function parseDateString(dateStr: string): Date {
  if (!dateStr) return new Date();
  const cleaned = dateStr.trim().toLowerCase();
  if (cleaned === 'present' || cleaned === 'current' || cleaned === 'now' || cleaned === 'today') {
    return new Date();
  }
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) {
    const month = MONTHS_MAP[parts[0]] ?? 0;
    const year = parseInt(parts[1], 10);
    if (!isNaN(year)) {
      return new Date(year, month, 1);
    }
  } else if (parts.length === 1) {
    const year = parseInt(parts[0], 10);
    if (!isNaN(year)) {
      return new Date(year, 0, 1);
    }
  }
  return new Date();
}

/**
 * Calculates duration in months between two date strings (e.g., "Mar 2024" to "Jan 2026")
 */
export function calculateExperienceMonths(startTime: string, endTime: string): number {
  const start = parseDateString(startTime);
  const end = parseDateString(endTime);

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  return Math.max(1, totalMonths);
}

/**
 * Calculates total experience in formatted string dynamically from EXPERIENCES duration
 * E.g., mode 'decimal' => "2.5+", mode 'full' => "2.5+ Years"
 */
export function getTotalExperienceYears(
  experiences: Experience[] = EXPERIENCES,
  options: { mode?: 'decimal' | 'full' | 'detailed' } = { mode: 'decimal' }
): string {
  if (!experiences || experiences.length === 0) return '0+';

  let totalMonths = 0;
  experiences.forEach((exp) => {
    totalMonths += calculateExperienceMonths(exp.startTime, exp.endTime);
  });

  const yrs = totalMonths / 12;
  // Round to nearest 0.5 for a clean, standard resume-style display (e.g. 2.5)
  const rounded = Math.round(yrs * 2) / 2;
  const decimalStr = rounded.toFixed(1);

  if (options.mode === 'full') {
    return `${decimalStr}+ Years`;
  }

  if (options.mode === 'detailed') {
    const fullYrs = Math.floor(totalMonths / 12);
    const mos = totalMonths % 12;
    if (fullYrs === 0) return `${mos} Months+`;
    if (mos === 0) return `${fullYrs} Years+`;
    return `${fullYrs} Years, ${mos} Months+`;
  }

  // Default 'decimal' mode - clean numeric stat for cards (e.g. "2.5+")
  return `${decimalStr}+`;
}

/**
 * Calculates dynamic duration string for a single experience record
 * E.g., "1.3 Years" or "1 Year, 4 Months"
 */
export function formatSingleExperienceDuration(startTime: string, endTime: string): string {
  const isCurrent = endTime.toLowerCase().includes('present') || endTime.toLowerCase().includes('current');
  const months = calculateExperienceMonths(startTime, endTime);

  const yrs = Math.floor(months / 12);
  const mos = months % 12;

  let label = '';
  if (yrs === 0) {
    label = `${mos} ${mos === 1 ? 'Month' : 'Months'}`;
  } else if (mos === 0) {
    label = `${yrs} ${yrs === 1 ? 'Year' : 'Years'}`;
  } else {
    // Clean decimal representation for professional brevity, e.g. "1.3 Years"
    const decimalYrs = (months / 12).toFixed(1);
    label = `${decimalYrs} Years`;
  }

  if (isCurrent) {
    return `${label} • Current`;
  }
  return label;
}

