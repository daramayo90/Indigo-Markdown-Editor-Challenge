import { EditorState } from '.';

type EditorActionType = { type: '[Editor] - setMarkdownText'; payload: string };

export const editorReducer = (state: EditorState, action: EditorActionType): EditorState => {
  switch (action.type) {
    case '[Editor] - setMarkdownText':
      return {
        ...state,
        markdownText: action.payload,
      };

    default:
      return state;
  }
};
