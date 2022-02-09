import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/errorComponent/Error";
import {
  ButtonInput,
  Container,
  Form,
  Input,
  Remember,
} from "../components/singIn/singInStyle";
import Spinner from "../components/Spinner";
import {
  loginUserAction,
  logOutUserAction,
} from "../redux/actions/LoginAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loginError, loginLoading } = useSelector((state) => state.login);
  const [email, setEmail] = useState("hernandiazz99@gmail.com");
  const [password, setpassword] = useState("K;]S-8MT\"$g8='&+");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPass, setErrorPass] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setErrorEmail("Email is a required field");
    if (!password) return setErrorPass("Password  is a required field");
    dispatch(loginUserAction(email, password));
  };

  useEffect(() => {
    if (errorEmail || errorPass || loginError) {
      setTimeout(() => {
        setErrorEmail(null);
        setErrorPass(null);
        dispatch(logOutUserAction());
      }, 3000);
    }
  }, [errorEmail, errorPass, loginError]);

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <Container height={100}>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          error={errorEmail}
          className="body-text-small"
          type="email"
          placeholder="Email"
          size="36"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errorEmail && <Error msg={errorEmail} />}
        <Input
          error={errorPass}
          className="body-text-small"
          type="password"
          placeholder="Password"
          size="36"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {errorPass && <Error msg={errorPass} />}

        <Remember>
          <input type="checkbox" />
          <label className="body-text-small" htmlFor="">
            Remember me
          </label>
        </Remember>
        <ButtonInput
          error={loginError}
          className="body-text-regular"
          value="Login"
          type="submit"
          disabled={loginError || errorEmail || errorPass}
        />
      </Form>
      <br />
      {loginError && <Error msg={loginError} />}
      {loginLoading&&<Spinner />}
    </Container>
  );
};

export default SignIn;
