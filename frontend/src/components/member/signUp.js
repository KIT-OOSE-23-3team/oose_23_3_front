// 회원 가입 화면

function SignUp() {
    return (
        <div>
          <input type="text" id="id" name="id" placeholder="id" required></input>
          <input type="password" id="pw" name="pw" placeholder="pw" required></input>
          <input
            type="password"
            id="pw_rental"
            name="pw_rental"
            placeholder="pw_rental"
            required
          ></input>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            required
          ></input>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder="phone_number"
            required
          ></input>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          ></input>
          <input
            type="date"
            id="birthday"
            name="birthday"
            placeholder="birthday"
            required
          ></input>
        </div>
      );     
}

export default SignUp;