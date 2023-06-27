// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles.scss";

const CardForm = () => {
  return (
    <Form className="form">
      <Form.Group className="mb-3" controlId="formCardholderName">
        <Form.Label>CARDHOLDER NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter first and last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCardholderName">
        <Form.Label>CARD NUMBER</Form.Label>
        <Form.Control type="text" placeholder="0000 0000 0000 0000" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formExpirationDate">
        <Form.Label>EXPIRATION DATE (MM/YY)</Form.Label>
        <Form.Control type="text" placeholder="MM" />
        <Form.Control type="text" placeholder="YY" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCVC">
        <Form.Label>CVC</Form.Label>
        <Form.Control type="text" placeholder="000" />
      </Form.Group>

      <button className="form__btn" type="submit">
        Submit
      </button>
    </Form>
  );
};

export default CardForm;
