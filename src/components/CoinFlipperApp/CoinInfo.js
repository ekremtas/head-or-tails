import React from "react";

const CoinInfo = (props) => {
    const { top, donuyor, currentStatus} = props;
  return (
    <>
      {top > 0 && !donuyor ? (
        <h3>{currentStatus} geldi</h3>
      ) : top > 0 ? (
        <h3>Atis yapılıyor ...</h3>
      ) : (
        <h3>Atis yapabilirsiniz</h3>
      )}
    </>
  );
};

export default CoinInfo;
