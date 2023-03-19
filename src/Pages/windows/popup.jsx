import { useState } from "react";
import "./popup.css";
import Windows from "./windows";

const Popap = () => {
  const [list, setList] = useState([
    { start: "12:45", end: "13:00" },
    { start: "02:45", end: "14:17" },
    { start: "12:00", end: "13:10" },
  ]);
  const [isMounted, setIsMounted] = useState(true);
  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };
  const handleClick = () => {
    setIsMounted(false);
  };
  const handleSubmit = (props) => {
    if (props.start !== null && props.end !== null) {
      let newList = list;
      newList.push(props);
      setList(newList);
      setStartTime(null);
      setEndTime(null);
      handleClick();
    }
    return (
      <div>
        <Windows />
      </div>
    );
  };
  const listaMap = list.map((alarm, i) => {
    return (
      <li
        key={i}
        style={{
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
          padding: "6px 0",
        }}
      >
        {alarm.start} - {alarm.end}{" "}
        <button className="kanta" type="button" onClick={() => handleDelete(i)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/105/105090.png"
            alt="kanta"
            style={{
              height: "16px",
            }}
          />
        </button>{" "}
      </li>
    );
  });
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleTimeChangeEnd = (event) => {
    setEndTime(event.target.value);
  };
  const handleTimeChangeStart = (event) => {
    setStartTime(event.target.value);
    console.log(startTime);
    console.log(listaMap);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3>Upravljanje tajmerima</h3>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {listaMap}
          </ul>
          <div className="container">
            <label htmlFor="startTime">Vrijeme otvaranja:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={startTime}
              onChange={handleTimeChangeStart}
            />
          </div>
          <div className="container">
            <label htmlFor="endTime">Vrijeme zatvaranja:</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={endTime}
              onChange={handleTimeChangeEnd}
            />
          </div>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => handleSubmit({ start: startTime, end: endTime })}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20183.png?w=740&t=st=1679187556~exp=1679188156~hmac=b7e6aa10f812e737a86c371f81662a45c54bfc98418fcbb1f27d5e279068ea36"
              alt="plus"
              style={{
                height: "30px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popap;
