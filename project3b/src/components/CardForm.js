// import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
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
            minLength={2}
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
            minLength={16}
            maxLength={16}
          />
          <Form.Control.Feedback type="invalid">
            Required 16 digit card number.
          </Form.Control.Feedback>
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          <Form.Group className="mb-3" controlId="formExpirationDate">
            <Form.Label>EXPIRATION DATE (MM/YY)</Form.Label>
            <div className="form__expiration-container">
              <div>
                <Form.Control
                  type="text"
                  placeholder="MM"
                  required
                  minLength={2}
                  maxLength={2}
                />
                <Form.Control.Feedback type="invalid">
                  Required month should be valid 01-12
                </Form.Control.Feedback>
              </div>
              <div>
                <Form.Control
                  type="text"
                  placeholder="YY"
                  required
                  minLength={2}
                  maxLength={2}
                />
                <Form.Control.Feedback type="invalid">
                  Required year should not be before current year.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCVC">
            <Form.Label>CVC</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. 123"
              required
              minLength={3}
              maxLength={3}
            />
            <Form.Control.Feedback type="invalid">
              Must be 3 numbers.
            </Form.Control.Feedback>
          </Form.Group>
        </Stack>

        <button className="form__btn" type="submit">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default CardForm;
