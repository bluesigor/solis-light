import features_bckg from "../../assets/photos/features-bckg.svg";

const Promises = () => {
  return (
    <section className="promises">
      <div className="promises-container">
        <img src={features_bckg} alt="features_bckg" />
        <div className="promises-container-features">
          <div className="promises-container-features__item">
            <h3 className="promises-container-features__item-title">
              On-Exchange Trading
            </h3>
            <p className="promises-container-features__item-desc">
              Instant Passive Inventory earns fees
            </p>
          </div>
          <div className="promises-container-features__item">
            <h3 className="promises-container-features__item-title">
              On-Chain Swaps
            </h3>
            <p className="promises-container-features__item-desc">
              Low Counterparty risk Direct transfers
            </p>
          </div>
          <div className="promises-container-features__item">
            <h3 className="promises-container-features__item-title">
              Time Settlement Swaps
            </h3>
            <p className="promises-container-features__item-desc">
              LBTC / Lightning and other sidechain swaps
            </p>
          </div>
          <div className="promises-container-features-wrapper">
            <button className="home-content-full__btn">
              JOIN NOW
              <span className="home-content-full__btn-bckg"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promises;
