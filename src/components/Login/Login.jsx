import { useFormik } from "formik";
import "./Login.css";
import Input from "../../common/Input";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    // axios
    //   .post("http://localhost:3001/users", values)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  const validationSchema = object({
    email: string().email("invalid Email format").required("Email is requierd"),
    password: string().required("Password is requierd"),
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
        <Input formik={formik} name="email" label="email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="password"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
          style={{ width: "96%", padding: "10px 0px" }}
        >
          login
        </button>
        <Link to="/signup">
          <p className="signUpLink"> Not Signup yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
