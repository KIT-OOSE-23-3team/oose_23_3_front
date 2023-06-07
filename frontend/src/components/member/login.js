import axios from "axios";
import { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };

  const login = () => {
    const login = new FormData();
    login.append("identification", id);
    login.append("password", pw);

    axios.post("http://localhost:8000/login", login).then((r) => {
      console.log(r);
    });
  };

  const adminLogin = () => {
    const adminLogin = new FormData();
    adminLogin.append("identification", "admin");
    adminLogin.append("password", "pass");

    axios.post("http://localhost:8000/adminLogin", adminLogin).then((r) => {
      console.log(r);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        id="id"
        name="id"
        placeholder="id"
        required
        onChange={idChange}
      ></input>
      <input
        type="password"
        value={pw}
        id="pw"
        name="pw"
        placeholder="pw"
        required
        onChange={pwChange}
      ></input>
      <input type="submit" value="로그인" onClick={login}></input>
      <input type="submit" value="관리자 로그인" onClick={adminLogin}></input>
    </div>
  );
}

export default Login;
