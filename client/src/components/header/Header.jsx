import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://sanfranciscotribe.com/Home/wp-content/uploads/2019/06/Binance-Coin-All-Time-High.jpg"
        alt=""
      />
    </div>
  );
}
