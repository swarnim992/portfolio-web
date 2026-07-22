export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  flutterSvg: string;
  dartSvg: string;
  keyFeatures: string;
  githubLink: string;
  demoVideoLink: string;
  category?: string;
}

export interface Experience {
  id: string;
  role: string;
  companyName: string;
  startTime: string;
  endTime: string;
  workType: string;
  duration: string;
  start: boolean;
  end: boolean;
  description?: string;
  shortDescription?: string;
}

export interface Education {
  id: string;
  institutionName: string;
  startTime: string;
  endTime: string;
  department: string;
  grade: string;
  start: boolean;
  end: boolean;
}

export interface Skill {
  name: string;
  svgPath: string;
  category?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}
