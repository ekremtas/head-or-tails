import React from "react";
import "./LeaderBoardStyles.css";


const BoardItem = (props) => {
  const { donuyor, coin} = props;
  return (
    <>
      <li>
        {donuyor ? (
          <div className="sh">
            <div className="sh-line small rounded"></div>
            <div className="sh-line rounded"></div>
            <div className="sh-line medium rounded"></div>
          </div>
        ) : (
          <li>
            <span className="list_num">{coin.number}</span>
            <img src={coin.image} alt={coin.name} />
            <h2>
              {coin.name} Gelme Sayisi :<span className="number">{coin.value}</span>
            </h2>
          </li>
        )}
      </li>
    </>
  );
};
export default BoardItem;
