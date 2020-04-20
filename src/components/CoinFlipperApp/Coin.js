import React from "react";
import "./CoinStyles.css";
import CoinTura from "../../1-lira-tura.png";
import CoinYazi from "../../1-lira-yazi.png";

const Coin = (props) => {
  const { currentStatus, donuyor } = props;
  return (
    <div className="Coin-container">
      <div className={`Coin ${donuyor && "Coin-rotate"}`}>
        <img
          src={CoinTura}
          className={currentStatus === "yazi" ? "Coin-back" : "Coin-front"}
          alt="tura"
        />
        <img
          src={CoinYazi}
          className={currentStatus === "yazi" ? "Coin-front" : "Coin-back"}
          alt="yazi"
        />
      </div>
    </div>
  );
};

export default Coin;
