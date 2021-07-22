export interface WordBankMeta {
  id: string;
  name: string;
  language: string;
  description: string;
}

export interface WordBankContent {
  id: string;
  name: string;
  language: string;
  description: string;
  words: string[];
}
