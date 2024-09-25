import React, { useEffect, useState } from "react";
import Input from "../components/input/input";
import Spacer from "../components/spacer";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Rendering Form')
  }, [])

  return (
    <>
      <Header />
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log(email)
          console.log(pass)
          localStorage.setItem("email", email)
          localStorage.setItem('password', pass)
          navigate("/counter")
        }}
      >
        <input
          type="email"
          placeholder="Enter Something"
          name="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password or Something"
          name="password"
          value={pass}
          onChange={(ev) => {
            setPass(ev.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
