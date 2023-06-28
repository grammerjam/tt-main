import "../styles.scss";

const Cards = () => {
  return (
    <section className="card-container">
      <div className="front-card-container">
        <div className="top-row">
          <img src="./images/card-logo.svg" alt="credit card background" />
        </div>
        <div className="middle-row">
          <p id="display-card-number">0000 0000 0000 0000</p>
        </div>
        <div className="last-row">
          <p id="full-name">Jane Appleseed</p>
          <p id="date">00/00</p>
        </div>
      </div>
      <div className="back-card-container">
        <p id="display-cvc">000</p>
      </div>
    </section>
  );
};

export default Cards;
