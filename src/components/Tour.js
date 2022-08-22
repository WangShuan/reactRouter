import {  Outlet } from "react-router-dom";

function Tour() {
  return (
    <main>
      <h2>旅遊資訊網</h2>
      <Outlet/>
    </main>
  );
}

export default Tour;
