import { Markdown } from './Markdown';
import { Preview } from './Preview';

import '../styles/container.css';

export const Container = () => {
  return (
    <section id="editorContainer">
      <Markdown />
      <Preview />
    </section>
  );
};
