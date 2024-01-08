import { useRouter } from "next/router";
import { useState } from "react";
import { authService } from "../src/services/auth/auth-service";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "omariosouto",
    password: "safepassword",
  });

  const handleChange = (event) => {
    const formValue = event.target.value;
    const formName = event.target.name;

    setValues((currentValue) => ({
      ...currentValue,
      [formName]: formValue,
    }));
  };

  const auth = (event) => {
    event.preventDefault();
    const { username, password } = values;
    authService
      .login({
        username,
        password,
      })
      .then(() => {
        console.log("User successfully authenticated");
        router.push("/auth-page-ssr");
      })
      .catch(() => {
        alert("User or password wrong");
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={auth}>
        <input
          placeholder="Usuário"
          name="username"
          defaultValue={values.username}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="password"
          type="password"
          defaultValue={values.password}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
