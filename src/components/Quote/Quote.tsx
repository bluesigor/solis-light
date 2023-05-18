import quote_icon from "../../assets/photos/quote-icon .svg";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote-container">
        <p className="quote-container__txt">
          Solis Group serves as a liquidity nexus that gives stablecoin issuers,
          holders and exchanges certainty over access and liquidity Lennon
          Burnett, Solis Group CEO
          <img
            className="quote-container__icon"
            src={quote_icon}
            alt="quote_icon"
          />
        </p>
        <i>Lennon Burnett, Solis Group CEO</i>
      </div>
    </section>
  );
};

export default Quote;
