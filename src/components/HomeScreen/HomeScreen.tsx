import Header from "../Layout/Header/Header";
import buildings from "../../assets/photos/buildings.svg";
const HomeScreen = () => {
  return (
    <section className="home">
      <Header />
      <main className="home-content">
        <div className="home-content-full">
          <h1 className="home-content-full__title">
            A peer-to-peer stablecoin <i>clearinghouse</i> for the new economy
          </h1>
          <p className="home-content-full__desc">
            We are bringing real solutions to the payments world by leveraging
            public blockchains.
          </p>
          <div className="home-content-full-btn-wrapper">
            <button className="home-content-full__btn">
              JOIN NOW
              <span className="home-content-full__btn-bckg"></span>
            </button>
          </div>
        </div>
        <div className="home-content-empty"></div>
      </main>
      <div className="home-sales sales">
        <img src={buildings} alt="buildings" />
        <div className="sales-content">
          <div className="sales-content-stats">
            <div className="sales-content-stats__item">
              <h1 className="sales-content-stats__item-title">
                <span>$</span>1 tril
              </h1>
              <p className="sales-content-stats__item-desc">
                Market cap potential
              </p>
            </div>
            <div className="sales-content-stats__line"></div>
            <div className="sales-content-stats__item">
              <h1 className="sales-content-stats__item-title">
                <span>$</span>
                3.65 mil
              </h1>
              <p className="sales-content-stats__item-desc">
                Deposited to platform
              </p>
            </div>
            <div className="sales-content-stats__line"></div>
            <div className="sales-content-stats__item">
              <h1 className="sales-content-stats__item-title">12</h1>
              <p className="sales-content-stats__item-desc">Stablecoins</p>
            </div>
          </div>
          <div className="sales-content-txt">
            <p className="sales-content-txt__main">
              Solis group is a new venture created with investments from and
              collaboration with XBTO International, XBTO Ventures and Phil
              Potter, formerly of bitfinex. Stablehouse is intended to launch a
              first-of-its-kind clearing house for stablecoins that seeks to
              promote the next phase of the market’s development. The
              API-enabled, centralized platform addresses the key issues of
              inconsistent liquidity, stability and accessibility which are
              currently preventing the stablecoin market from reaching critical
              mass.
            </p>
            <button className="home-content-full__btn">
              Contact sales
              <span className="home-content-full__btn-bckg"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
