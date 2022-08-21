import {  Link } from "react-router-dom";

function About() {
  return (
    <>
      <main>
        <h2>Ooop....</h2>
        <p>
          something wrong!
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default About;
