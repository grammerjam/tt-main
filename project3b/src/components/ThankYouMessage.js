const ThankYouMessage = () => {
  return (
    <div className="thank-you-message">
      <img alt="logo" src="./images/icon-complete.svg" />
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
      <button type="submit" value="Continue" class="btn" onclick="resetForm()">
        Continue
      </button>
    </div>
  );
};

export default ThankYouMessage;
