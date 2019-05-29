import React from "react";

const Timer = props => {
  var milSec = props.time;

  let sec = milSec / 1000;

  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec % 3600) / 60);
  let seconds = Math.floor((sec % 3600) % 60);

  return (
    <div>
      <h1>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
};
export default Timer;
