import { useFormik } from "formik";
import "./SignUp.css";
import Input from "../../common/Input";
import { object, ref, string } from "yup";
import { Link } from "react-router-dom";
import signUpUser from "../../services/signUpServices";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;

    const userData = { name, email, phoneNumber, password };

    try {
      const { data } = await signUpUser(userData);
      console.log(data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const validationSchema = object({
    name: string().required("Name is requierd"),
    email: string().email("invalid Email format").required("Email is requierd"),
    phoneNumber: string()
      .required("phone number is requierd")
      .min(11, "number must have at least 11 characters"),
    password: string()
      .required("Password is requierd")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, "digit")
      .matches(/[a-z]/, "lowercase")
      .matches(/[A-Z]/, "uppercase")
      .matches(/[@]/, "@!@#$%^&*"),
    passwordConfirm: string()
      .required("Password is requierd")
      .oneOf([ref("password")], "Passwords does not match"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="name" />
        <Input formik={formik} name="email" label="email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="phoneNumber"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="passwordConfirm"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
          style={{ width: "96%", padding: "10px 0px" }}
        >
          submit
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to="/login">
          <p className="loginLink"> Alerdy login?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
