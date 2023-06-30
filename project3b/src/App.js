import { useState } from "react";
import "./styles.scss";
import CardForm from "./components/CardForm";
import Cards from "./components/Cards";


function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [fullName, setFullName] = useState("Jane Appleseed");
  const [expiryMonth, setExpiryMonth] = useState("00");
  const [expiryYear, setExpiryYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/blue-steel-logo-no-background.png" alt="logo" />
        </div>
      </nav>
      <section className="main">
      <Cards 
          cardNumber={cardNumber} 
          fullName={fullName}
          expiryDate={`${expiryMonth}/${expiryYear}`}
          cvc={cvc}
        />
        <CardForm
          cardNumber={cardNumber} 
          setCardNumber={setCardNumber}
          fullName={fullName}
          setFullName={setFullName}
          expiryMonth={expiryMonth}
          setExpiryMonth={setExpiryMonth}
          expiryYear={expiryYear}
          setExpiryYear={setExpiryYear}
          cvc={cvc}
          setCvc={setCvc}
        />
      </section>
      <footer>
        <p>Start Date/Time: 6/19/2023 10:18 PM EST</p>
        <p>End Date/Time:</p>
      </footer>
    </>
  );
}

export default App;
