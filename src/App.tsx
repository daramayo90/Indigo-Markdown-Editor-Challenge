import { EditorProvider } from './context';
import { Header, Container, Footer } from './components';

import './styles/app.css';

function App() {
  return (
    <EditorProvider>
      <div className="App">
        <Header />
        <Container />
        <Footer />
      </div>
    </EditorProvider>
  );
}

export default App;
