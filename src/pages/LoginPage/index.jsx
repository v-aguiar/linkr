import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

import { Container, TitleBox, Form } from "../RegisterPage/style";

export default function LoginPage() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [submited, setSubmited] = useState(false);
  const navigate = useNavigate();

  const { setUserInfo } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);

    const keys = Object.keys(login);

    for (let key of keys) {
      if (!login[key]) {
        setSubmited(false);
        return alert("Preencha todos os campos");
      }
    }

    const promisse = api.post("sign-in", login);

    promisse.then((obj) => {
      const { data } = obj;
      localStorage.setItem(
        "UserInfo",
        JSON.stringify({ token: data.token, img: data.img })
      );
      setUserInfo(data);
      setSubmited(false);
      return navigate("/timeline");
    });
    promisse.catch((error) => {
      alert(error.response.data);
      return setSubmited(false);
    });
  }

  function handleInput(e) {
    login[e.target.name] = e.target.value;
    setLogin({ ...login });
  }

  const { email, password } = login;

  return (
    <Container>
      <TitleBox>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </TitleBox>
      <div className="content">
        <Form
          onSubmit={handleSubmit}
          disable={!(email && password) || submited}
        >
          <input
            type="email"
            required
            placeholder="e-mail"
            name="email"
            value={email}
            onChange={handleInput}
            disabled={submited}
          />
          <input
            type="password"
            required
            placeholder="password"
            name="password"
            value={password}
            onChange={handleInput}
            disabled={submited}
          />
          <button type="submit" disabled={!(email && password) || submited}>
            Log In
          </button>
        </Form>
        <Link to={"/sign-up"}>
          <p>First time? Create an account!</p>
        </Link>
      </div>
    </Container>
  );
}
