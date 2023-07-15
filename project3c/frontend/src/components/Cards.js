import "../styles.scss";

const Cards = ({ cardNumber, fullName, expiryDate, cvc }) => {
  return (
    <section className="card-container">
      <div className="front-card-container">
        <div className="top-row">
          <img src="./images/card-logo.svg" alt="credit card background" />
        </div>
        <div className="middle-row">
          <p id="display-card-number">{cardNumber}</p>
        </div>
        <div className="last-row">
          <p id="full-name">{fullName}</p>
          <p id="date">{expiryDate}</p>
        </div>
      </div>
      <div className="back-card-container">
        <p id="display-cvc">{cvc}</p>
      </div>
    </section>
  );
};

export default Cards;
