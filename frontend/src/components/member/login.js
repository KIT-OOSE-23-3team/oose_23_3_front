import axios from "axios";
import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleUserSignUp = () => {
    navigate("/SignUp");
  }

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

    axios.post("http://119.56.139.127:5050/login", login, { withCredentials : true } ).then((res) => {
        console.log(res.data);
        if (res.data === "member") {
            navigate("/User/UserInfo");
        } else if (res.data === "admin") {
            navigate("/History/PaymentHistory");
        } else {
            navigate("/");
        }
    });
  };

  const logout = () => {
    axios.get("http://119.56.139.127:5050/logout", { withCredentials : true }).then();
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
      <input type="submit" value="로그아웃" onClick={logout}></input>
      <div onClick={handleUserSignUp}>회원가입</div>
    </div>
  );
}

export default Login;
