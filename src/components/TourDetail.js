import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function TourDetail() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
      .then(res => res.json())
      .then(result => {
        const newData = result.data.XML_Head.Infos.Info;
        let ret = newData.find(item => item.Id === id)
        setData(ret)
      })
  }, [])
  return (
    <>
        {
          <div className="card">
            <h1>{data.Name}</h1>
            <div>
            <img src={data.Picture1} alt={data.Picdescribe1} />
            <div className="desc">
              <b>▶️ {data.Description}</b>
            </div>
            <ul>
              <li>地址：{data.Zipcode} {data.Add}</li>
              <li>開放時間：{data.Opentime}</li>
              <li>聯絡電話：{data.Tel}</li>
            </ul>
            </div>
            <div>
              <p>{data.Toldescribe}</p>
            </div>
          </div>
        }
    </>
  );
}
export default TourDetail;