import React from "react";
import "./LeaderBoardStyles.css";
import CoinTura from "../../../1-lira-tura.png";
import CoinYazi from "../../../1-lira-yazi.png";
import BoardItem from "./BoardItem";

const LeaderBoard = (props) => {
  const { top, top_yazi, donuyor } = props;

  return (
    <div className="table">
      <ul className="leader">
        <li>
          <h1>
            Toplam Atış : <span className="number">{top}</span>
          </h1>
        </li>

        {top_yazi > top - top_yazi ? (
          <>
            <BoardItem
              donuyor={donuyor}
              coin={{
                number: 1,
                name: "Yazi",
                value: top_yazi,
                image: CoinYazi,
              }}
            />
            <BoardItem
              donuyor={donuyor}
              coin={{
                number: 2,
                name: "Tura",
                value: top - top_yazi,
                image: CoinTura,
              }}
            />
          </>
        ) : (
          <>
            <BoardItem
              donuyor={donuyor}
              coin={{
                number: 1,
                name: "Tura",
                value: top - top_yazi,
                image: CoinTura,
              }}
            />

            <BoardItem
              donuyor={donuyor}
              coin={{
                number: 2,
                name: "Yazi",
                value: top_yazi,
                image: CoinYazi,
              }}
            />
          </>
        )}
      </ul>
    </div>
  );
};

export default LeaderBoard;
