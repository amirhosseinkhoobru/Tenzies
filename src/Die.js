import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#fff",
  };
  return (
    <div onClick={props.id} style={styles} className="die">
      <h2>{props.value}</h2>
    </div>
  );
}
