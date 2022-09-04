import { useContext } from 'react';
import { EditorContext } from '../context';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import '../styles/preview.css';

export const Preview = () => {
  const { markdownText } = useContext(EditorContext);

  return (
    <div className="preview">
      <h2 className="title">Preview</h2>
      <div className="previewArea">
        <ReactMarkdown className="previewText" remarkPlugins={[remarkGfm]}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
};
