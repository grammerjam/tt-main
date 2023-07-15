// import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import * as Yup from "yup";
import "../styles.scss";
import ThankYouMessage from "./ThankYouMessage";

const CardForm = ({
  cardNumber,
  setCardNumber,
  fullName,
  setFullName,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvc,
  setCvc,
}) => {
  const [isValid, setIsValid] = useState();

  const schema = Yup.object().shape({
    cardholderName: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(50, "No more than 50 characters allowed")
      .required("Required field")
      .matches(/^[a-zA-Z\s]*$/, "Only letters and white space are allowed")
      .matches(/\s/, "Cardholder name must contain whitespace")
      .trim(""),
    cardNumber: Yup.string()
      .min(19, "Must contain 16 characters")
      .matches(/^[0-9 ]*$/)
      .required("Required field"),
    expirationMonth: Yup.number()
      .max(12, "Invalid month")
      .required("Required field")
      .moreThan(1)
      .min(1, "Invalid month"),
    expirationYear: Yup.string()
      .matches(
        /^(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/,
        "Invalid year"
      )
      .test(
        "expirationYear",
        "Year must be 10 years from now or later",
        (value) => {
          const currentYear = new Date().getFullYear();
          const minYear = currentYear + 10;
          return Number(value) + 2000 >= minYear;
        }
      )
      .required("Required field"),
    cvc: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .min(3, "CVC must be 3 characters")
      .required("Required field"),
  });
  return (
    <>
      {!isValid && (
        <Container className="form-container">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              setCardNumber(values.cardNumber);
              setFullName(values.cardholderName);
              setExpiryMonth(values.expirationMonth);
              setExpiryYear(values.expirationYear);
              setCvc(values.cvc);
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
                    onChange={(e) => {
                      setFullName(e.target.value);
                      handleChange(e);
                    }}
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
                    maxLength={19} // Allow for 16 digits and 3 spaces
                    placeholder="e.g. 1234 5678 9123 0000"
                    value={values.cardNumber}
                    onChange={(e) => {
                      const formattedInput = e.target.value
                        .replace(/[^\dA-Z]/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .trim();
                      setCardNumber(formattedInput);
                      handleChange("cardNumber")(formattedInput);
                    }}
                    onBlur={handleBlur}
                    isInvalid={!!errors.cardNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {touched.cardNumber && errors.cardNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Stack direction="horizontal" gap={3}>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="align-items-baseline"
                  >
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
                            onChange={(e) => {
                              setExpiryMonth(e.target.value);
                              handleChange(e);
                            }}
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
                            onChange={(e) => {
                              setExpiryYear(e.target.value);
                              handleChange(e);
                            }}
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
                        maxLength={3}
                        placeholder="e.g. 123"
                        value={values.cvc}
                        onChange={(e) => {
                          setCvc(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        isInvalid={!!errors.cvc}
                      />
                      <Form.Control.Feedback type="invalid">
                        {touched.cvc && errors.cvc}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Stack>
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
