import {  Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <p>
        React 前三週教學筆記：<br />
        <a href="https://hackmd.io/4eFTX-knSI2jMifkRG4Ycw?view">React 起手式</a><br />
        <a href="https://hackmd.io/R7h34b2YRheBu4liRAcXVA?view">React Component</a><br />
        <a href="https://hackmd.io/JT9c76RYQlSBVGsHS8k_iw?view">React Router</a>
        </p>
      </main>
    </>
  );
}

export default Home;
