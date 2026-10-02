export type Language = 'vi' | 'en';

export interface Step {
  id: number;
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string[];
    en: string[];
  };
  promptText: {
    vi: string;
    en: string;
  };
}

