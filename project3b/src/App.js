import "./styles.scss";
import CardForm from "./components/CardForm";
import Cards from "./components/Cards";


function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/blue-steel-logo-no-background.png" alt="logo" />
        </div>
      </nav>
      <section className="main">
        <Cards />
        <CardForm />
      </section>
      <footer>
        <p>Start Date/Time: 6/19/2023 10:18 PM EST</p>
        <p>End Date/Time:</p>
      </footer>
    </>
  );
}

export default App;
