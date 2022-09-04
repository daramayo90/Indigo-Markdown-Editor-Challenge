import { ChangeEvent, KeyboardEvent, useContext, useEffect, useRef } from 'react';
import { EditorContext } from '../context';

import '../styles/markdown.css';

export const Markdown = () => {
  const lineRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { markdownText, setMarkdownText } = useContext(EditorContext);

  // Populate markdown from EditorProvider
  useEffect(() => {
    const numberOfLines: number = markdownText.split('\n').length;

    addNewLines(numberOfLines);
  }, []);

  // Crate new lines <span></span> for every time 'Enter' is pressed
  const onKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const numberOfLines: number = event.currentTarget.value.split('\n').length;

    addNewLines(numberOfLines);
  };

  const addNewLines = (numberOfLines: number) => {
    if (lineRef.current) {
      lineRef.current.innerHTML = Array(numberOfLines).fill('<span></span>').join('');
    }
  };

  // Ability to use the TAB key
  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      if (textAreaRef.current) {
        event.preventDefault();
        const start: number = textAreaRef.current.selectionStart;
        const end: number = textAreaRef.current.selectionEnd;

        textAreaRef.current.value =
          textAreaRef.current.value.substring(0, start) +
          '\t' +
          textAreaRef.current.value.substring(end);

        textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = start + 1;
      }
    }
  };

  // Set new values in MarkdownText Context Provider
  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <div className="markdown">
      <h2 className="title">Markdown</h2>
      <div className="editor">
        <div className="lineNumbers" ref={lineRef}>
          <span></span>
        </div>
        <textarea
          className="textArea"
          ref={textAreaRef}
          value={markdownText}
          onChange={onInputChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
