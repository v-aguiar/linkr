import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import { Container, TitleBox, Form } from "./style";

export default function RegisterPage() {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    username: "",
    imgUrl: "",
  });
  const [submited, setSubmited] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true);

    const keys = Object.keys(register);

    for (let key of keys) {
      if (!register[key]) {
        setSubmited(false);
        return alert("Preencha todos os campos");
      }
    }

    const promisse = api.post("sign-up", register);

    promisse.then(() => {
      setSubmited(false);
      return navigate("/");
    });
    promisse.catch((error) => {
      alert(error.response.data);
      console.log(error);
      return setSubmited(false);
    });
  }

  function handleInput(e) {
    register[e.target.name] = e.target.value;
    setRegister({ ...register });
  }

  const { email, password, username, imgUrl } = register;

  return (
    <Container>
      <TitleBox>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </TitleBox>
      <div className="content">
        <Form
          onSubmit={handleSubmit}
          disable={!(email && password && username && imgUrl) || submited}
        >
          <input
            type="email"
            required
            placeholder="e-mail"
            name="email"
            value={email}
            onChange={handleInput}
          />
          <input
            type="password"
            required
            placeholder="password"
            name="password"
            value={password}
            onChange={handleInput}
          />
          <input
            type="text"
            required
            placeholder="username"
            name="username"
            value={username}
            onChange={handleInput}
          />
          <input
            type="url"
            required
            placeholder="picture url"
            name="imgUrl"
            value={imgUrl}
            onChange={handleInput}
          />
          <button
            type="submit"
            disabled={!(email && password && username && imgUrl) || submited}
          >
            Sign Up
          </button>
        </Form>
        <Link to={"/"}>
          <p>Switch back to log in</p>
        </Link>
      </div>
    </Container>
  );
}
