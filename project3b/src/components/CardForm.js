// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "../styles.scss";

const CardForm = () => {
  const resetForm = () => {
    window.alert("hello");
  };

  return (
    <Container>
      <Form className="form" novalidate>
        <Form.Group className="mb-3" controlId="formCardholderName">
          <Form.Label>CARDHOLDER NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Jane Appleseed"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCardholderName">
          <Form.Label>CARD NUMBER</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExpirationDate">
          <Form.Label>EXPIRATION DATE (MM/YY)</Form.Label>
          <div className="form__expiration-container">
            <Form.Control type="text" placeholder="MM" required />
            <Form.Control type="text" placeholder="YY" required />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCVC">
          <Form.Label>CVC</Form.Label>
          <Form.Control type="text" placeholder="e.g. 123" required />
        </Form.Group>

        <button className="form__btn" type="submit" onClick={resetForm}>
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default CardForm;
