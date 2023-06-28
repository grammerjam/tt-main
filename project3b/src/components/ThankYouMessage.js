const ThankYouMessage = () => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <div className="thank-you-message">
      <img alt="logo" src="./images/icon-complete.svg" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button value="Continue" className="btn" onClick={refresh}>
        Continue
      </button>
    </div>
  );
};

export default ThankYouMessage;
