const Media = () => {
  return (
    <section className="media">
      <div className="media-container">
        <div className="media-container-tablet">
          <iframe
            className="media-container-tablet__video"
            src="https://www.youtube-nocookie.com/embed/vnbN9V_2Guk?start=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <div className="media-container-txt">
          <h3 className="media-container-txt__title">
            A <i>powerful API</i> , easy to use user interface
          </h3>

          <p className="media-container-txt__desc">
            Our API allows all members to interact with Stablehouse’s platform,
            from effecting transfers to deposits, withdrawals, creation and
            redemption and reporting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Media;
