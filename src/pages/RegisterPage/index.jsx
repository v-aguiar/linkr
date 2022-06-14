import { Link } from "react-router-dom";

import { Container, TitleBox, Form } from "./style";

export default function RegisterPage() {
  return (
    <Container>
      <TitleBox>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </TitleBox>
      <Form>
        <input type="email" required placeholder="e-mail" />
        <input type="password" required placeholder="password" />
        <input type="text" required placeholder="username" />
        <input type="url" required placeholder="picture url" />
        <button type="submit">Sign Up</button>
      </Form>
      <Link to={"/"}>
        <p>Switch back to log in</p>
      </Link>
    </Container>
  );
}
