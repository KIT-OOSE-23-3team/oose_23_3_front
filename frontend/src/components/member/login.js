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
    const login = {
      identification: id,
      password: pw
    }

    axios.post("http://localhost:8000/login", login, { withCredentials : true } ).then();
  };

  const adminLogin = () => {
    axios.post("http://localhost:8000/adminLogin", {}, { withCredentials : true}).then();
  };

  const logout = () => {
    axios.get("http://localhost:8000/logout", { withCredentials : true }).then();
  }

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
      <input type="submit" value="로그아웃" onClick={logout}></input>
    </div>
  );
}

export default Login;
