export interface Project { 
  title: string;
  description: string;
  link?: string;
}

export interface Education {
  schoolName: string;
  year: string;
  description: string;
  link?: string;
}

export interface Connect {
  app: string;
  subtitle: string;
  link?: string;
}

export interface Main {
  title: string;
  text: string;
}

export interface Illustration {
  id: string;
  name: string;
  src: string;
  playlistTitle?: string;
  coverSrc?: string;
  embedUrl?: string;
  projects?: Project[];
  education?: Education[];
  connect?: Connect[];
  main?: Main[];
}