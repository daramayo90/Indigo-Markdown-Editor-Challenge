import { createContext } from 'react';

interface ContextProps {
  markdownText: string;
  setMarkdownText: (text: string) => void;
}

export const EditorContext = createContext({} as ContextProps);
