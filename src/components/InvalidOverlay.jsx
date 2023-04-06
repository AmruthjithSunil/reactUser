import "./InvalidOverlay.css";

function InvalidOverlay({ reason, clickHandler }) {
  return (
    <div className="background">
      <div className="box">
        <div className="head">
          <h1>Invalid input</h1>
        </div>
        <div className="body">
          <h3>{reason}</h3>
          <button onClick={clickHandler}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default InvalidOverlay;
