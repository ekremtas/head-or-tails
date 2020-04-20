import React, { Component } from "react";
import "./CoinFlipperStyles.css";
import Coin from "./Coin";
import LeaderBoard from "./LeaderBoard";
import CoinInfo from "./CoinInfo";

const options = ["yazi", "tura"];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: options[0],
      gelenler: [],
      donuyor: false,
      top_yazi: 0,
    };
  }

  atisYap = () => {
    this.setState({
      donuyor: true,
    });
    const rastgeleEleman = getRandomElFromArr(options);
    setTimeout(() => {
      this.setState({
        currentStatus: rastgeleEleman,
        gelenler: [...this.state.gelenler, rastgeleEleman],
        donuyor: false,
        top_yazi:
          rastgeleEleman === "yazi"
            ? this.state.top_yazi + 1
            : this.state.top_yazi,
      });
    }, 1000);
  };

  resetScore = () => {
    /* Skor sıfırlandıgında 0.25 sn'lik efect ekledim. */
    this.setState({
        donuyor: true,
      });
    setTimeout(()=>{
      this.setState({
        currentStatus: options[0],
        gelenler: [],
        donuyor: false,
        top_yazi: 0,
      })
       
    },250)
  };

  render() {
    const { currentStatus, donuyor, gelenler, top_yazi } = this.state;
    return (
      <div className="CoinFlipper">
        <h1>YAZI TURA OYUNU</h1>
        
        <Coin currentStatus={currentStatus} donuyor={donuyor} />

        {/* butona tiklandiginda atisin sonlanmasını bekleyene kadar butona basmayı engelledim. */}
        
        <button onClick={!donuyor ? this.atisYap : null}>Atis yap</button>
        <button onClick={!donuyor ? this.resetScore : null}>Skoru Sıfırla</button>

        <CoinInfo top={gelenler.length} donuyor={donuyor} currentStatus={currentStatus} />

        <LeaderBoard top={gelenler.length} top_yazi={top_yazi} donuyor={donuyor}/>
        
      </div>
    );
  }
}

export default CoinFlipper;
