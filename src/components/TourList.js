import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TourList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
      .then(res => res.json())
      .then(result => {
        const newData = result.data.XML_Head.Infos.Info;
        setData(newData)
      })
  }, [])
  return (
    <>
      <h3>旅遊詳細列表</h3>
      <ul className="list">
          {
            data.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`${item.Id}`}>{item.Name}</Link>
                </li>
              )
            })
          }
      </ul>
    </>
  );
}
export default TourList;