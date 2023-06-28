// import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "../styles.scss";

const CardForm = () => {
  const [validated, setValidated] = useState(false);

  const resetForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    // window.alert("hello");
  };

  return (
    <Container>
      <Form
        className="form"
        noValidate
        validated={validated}
        onSubmit={resetForm}
      >
        <Form.Group className="mb-3" controlId="formCardholderName">
          <Form.Label>CARDHOLDER NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. Jane Appleseed"
            required
          />
          <Form.Control.Feedback type="invalid">
            Required first and last name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCardholderName">
          <Form.Label>CARD NUMBER</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
          <Form.Control.Feedback type="invalid">
            Required 16 digit card number.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExpirationDate">
          <Form.Label>EXPIRATION DATE (MM/YY)</Form.Label>
          <div className="form__expiration-container">
            <Form.Control type="text" placeholder="MM" required />
            <Form.Control type="text" placeholder="YY" required />
          </div>
          <Form.Control.Feedback type="invalid">
            Required month should be a valid month and year should not be
            expired.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCVC">
          <Form.Label>CVC</Form.Label>
          <Form.Control type="text" placeholder="e.g. 123" required />
          <Form.Control.Feedback type="invalid">
            Must be 3 numbers.
          </Form.Control.Feedback>
        </Form.Group>

        <button className="form__btn" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default CardForm;
