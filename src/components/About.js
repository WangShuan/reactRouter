import {  Link, useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  return (
    <>
      <main>
        <h2>About</h2>
        <p>
          React week3 <br/>
          建立雙層路由與動態路由。
        </p>
      </main>
    </>
  );
}

export default About;
