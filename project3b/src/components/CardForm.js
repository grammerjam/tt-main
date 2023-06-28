// import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import * as Yup from "yup";
import "../styles.scss";

const CardForm = () => {
  const schema = Yup.object().shape({
    cardholderName: Yup.string()
      .min(2)
      .max(50, "Too Long!")
      .required("Required")
      .matches(/^[a-zA-Z\s]*$/, "Only letters and white space are allowed")
      .matches(/\s/, "Cardholder name must contain whitespace")
      .trim(""),
    cardNumber: Yup.string()
      .min(16, "Too Short!")
      .matches(/^\d+$/, "Only numbers are allowed")
      .required("Required"),
    expirationMonth: Yup.number()
      .max(12, "max month")
      .required("Required")
      .moreThan(1)
      .min(1, "min month is 01"),
    expirationYear: Yup.string()
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/,
        "2 numbers"
      )
      .min(
        String(new Date().getFullYear() + 10).slice(-2),
        "Year should be 10 yrs from now or later"
      )
      .required("Expiration year is required"),
    cvc: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .required("Required"),
  });
  return (
    <>
      <Container className="form-container">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            cardholderName: "",
            cardNumber: "",
            expirationMonth: 0,
            expirationYear: "",
            cvc: 0,
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form className="form" noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formCardholderName">
                <Form.Label>CARDHOLDER NAME</Form.Label>
                <Form.Control
                  type="text"
                  name="cardholderName"
                  placeholder="e.g. Jane Appleseed"
                  value={values.cardholderName}
                  onChange={handleChange}
                  isInvalid={!!errors.cardholderName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardholderName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCardholderName">
                <Form.Label>CARD NUMBER</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  maxLength={16}
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={values.cardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.cardNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Stack direction="horizontal" gap={3}>
                <Form.Group className="mb-3" controlId="formExpirationDate">
                  <Form.Label>EXPIRATION DATE (MM/YY)</Form.Label>
                  <div className="form__expiration-container">
                    <div>
                      <Form.Control
                        maxLength={2}
                        type="text"
                        placeholder="MM"
                        name="expirationMonth"
                        value={values.expirationMonth}
                        onChange={handleChange}
                        isInvalid={!!errors.expirationMonth}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.expirationMonth}
                      </Form.Control.Feedback>
                    </div>
                    <div>
                      <Form.Control
                        type="text"
                        placeholder="YY"
                        name="expirationYear"
                        maxLength={2}
                        value={values.expirationYear}
                        onChange={handleChange}
                        isInvalid={!!errors.expirationYear}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.expirationYear}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCVC">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvc"
                    minLength={3}
                    maxLength={3}
                    placeholder="e.g. 123"
                    value={values.cvc}
                    onChange={handleChange}
                    isInvalid={!!errors.cvc}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cvc}
                  </Form.Control.Feedback>
                </Form.Group>
              </Stack>

              <button className="form__btn" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Container>
      {/* <ThankYouMessage /> */}
    </>
  );
};

export default CardForm;
