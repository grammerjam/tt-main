// import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import * as Yup from "yup";
import "../styles.scss";
import ThankYouMessage from "./ThankYouMessage";

const CardForm = () => {
  const [isValid, setIsValid] = useState();

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
      .test(
        "expirationYear",
        "Year should be 10 yrs from now or later",
        (value) => {
          const currentYear = new Date().getFullYear();
          debugger;
          const minYear = currentYear + 10;
          return Number(value) + 2000 >= minYear;
        }
      )
      .required("Required"),
    cvc: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .required("Required"),
  });
  return (
    <>
      {!isValid && (
        <Container className="form-container">
          <Formik
            validationSchema={schema}
            onSubmit={() => {
              // Perform form validation or any other necessary checks
              // If the form is valid, set isValid to true
              setIsValid(true);
            }}
            initialValues={{
              cardholderName: "",
              cardNumber: "",
              expirationMonth: "",
              expirationYear: "",
              cvc: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              handleBlur,
              touched,
              errors,
            }) => (
              <Form className="form" noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCardholderName">
                  <Form.Label>CARDHOLDER NAME</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardholderName"
                    placeholder="e.g. Jane Appleseed"
                    value={values.cardholderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.cardholderName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.cardholderName && errors.cardholderName}
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
                    onBlur={handleBlur}
                    isInvalid={!!errors.cardNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.cardNumber && errors.cardNumber}
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
                          onBlur={handleBlur}
                          isInvalid={!!errors.expirationMonth}
                        />
                        <Form.Control.Feedback type="invalid">
                          {touched.expirationMonth && errors.expirationMonth}
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
                          onBlur={handleBlur}
                          isInvalid={!!errors.expirationYear}
                        />
                        <Form.Control.Feedback type="invalid">
                          {touched.expirationYear && errors.expirationYear}
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
                      onBlur={handleBlur}
                      isInvalid={!!errors.cvc}
                    />
                    <Form.Control.Feedback type="invalid">
                      {touched.cvc && errors.cvc}
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
      )}
      {isValid && <ThankYouMessage />}
    </>
  );
};

export default CardForm;
