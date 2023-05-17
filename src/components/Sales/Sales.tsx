const Sales = () => {
  return (
    <section className="sales">
      <div className="sales-container">
        <div className="sales-container-content">
          <h1 className="sales-container-content__title">
            Contact <i>our sales team</i>
          </h1>
          <p className="sales-container-content__desc">
            Our team is happy to answer your sales questions.Fill out the form
            and we’ll be in touch as soon as possible.
          </p>
        </div>
        <form className="sales-container-form">
          <input placeholder="Your name" type="text" />
          <input placeholder="Email" type="text" />
          <input placeholder="Tell more" type="text" />
          <div className="sales-container-form-btn-wrapper">
            <button type="submit" className="home-content-full__btn">
              SEND Request
              <span className="home-content-full__btn-bckg"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Sales;
