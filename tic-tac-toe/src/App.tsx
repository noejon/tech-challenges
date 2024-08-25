import './styles/normalise.css';
import './styles/accessibility.css';
import { Player } from './components/Player';

function App() {
  return (
    <>
      <header></header>
      <main>
        <div>
          <ol>
            <li>
              <Player symbol="X"></Player>
            </li>
            <li>
              <Player symbol="O"></Player>
            </li>
          </ol>
        </div>
        LOG
      </main>
      <footer></footer>
    </>
  );
}

export default App;
