import ciclope from "../src/images/card-ciclope.jpg";
import jean from "../src/images/card-jean-grey.jpg";
import lince from "../src/images/card-lince-negra.jpg";
import magneto from "../src/images/card-magneto.jpg";
import noturno from "../src/images/card-noturno.jpg";
import tempestade from "../src/images/card-tempestade.jpg";
import vampira from "../src/images/card-vampira.jpg";
import wolverine from "../src/images/card-wolverine.jpg";

function App() {
  return (
    <>
      <header></header>

      <section className="characters">
        <h1 className="title">Selecione um personagem</h1>
        <ul className="characters-list">
          <li className="characters">
            <img src={ciclope} alt="Cyclops character" />
          </li>
          <li className="characters">
            <img src={jean} alt="Jean Grey character" />
          </li>
          <li className="characters">
            <img src={lince} alt="Kitty Pryde character" />
{/*           </li>
          <li className="characters">
            <img src={magneto} alt="Magneto character" />
          </li>
          <li className="characters">
            <img src={noturno} alt="Nightcrawler character" />
          </li>
          <li className="characters">
            <img src={tempestade} alt="Storm character" />
          </li>
          <li className="characters">
            <img src={vampira} alt="Rogue character" />
          </li>
          <li className="characters">
            <img src={wolverine} alt="Wolverine character" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
 */}