import { useFormik } from "formik";
import "./Login.css";
import Input from "../../common/Input";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import loginUser from "../../services/loginServices";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../Hooks/useQurey";

const Login = () => {
  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    if (auth) return navigate(redirect); 
  }, [redirect, auth]);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);

    try {
      const { data } = await loginUser(values);
      setAuth(data);
      setError(null);
      navigate(redirect);
    } catch (error) {
      if (error && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to={`/signUp?redirect=${redirect}`}>
          <p className="signUpLink"> Not Signup yet?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
