
export interface Speaker {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Quote {
  speakerId: string;
  text: string;
  context?: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface SummaryData {
  title: string;
  description: string;
  date: string;
  duration: string;
  speakers: Speaker[];
  consensus: string[];
  divergence: string[];
  quotes: Quote[];
  recommendations: string[];
  mindMap: MindMapNode;
}
