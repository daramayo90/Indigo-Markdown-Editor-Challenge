import { FC, ReactNode, useReducer } from 'react';
import { EditorContext, editorReducer } from './';
import { preload } from '../assets/preload';

interface Props {
  children: ReactNode;
}
export interface EditorState {
  markdownText: string;
}

const Editor_INITIAL_STATE: EditorState = {
  markdownText: preload,
};

export const EditorProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, Editor_INITIAL_STATE);

  const setMarkdownText = (text: string) => {
    dispatch({ type: '[Editor] - setMarkdownText', payload: text });
  };

  return (
    <EditorContext.Provider value={{ ...state, setMarkdownText }}>
      {children}
    </EditorContext.Provider>
  );
};
