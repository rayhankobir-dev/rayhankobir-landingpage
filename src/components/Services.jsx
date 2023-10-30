// eslint-disable-next-line react/prop-types
function Services({ className }) {
  return (
    <section
      className={`appie-service-area pt-90 pb-100 ${className}`}
      id="service"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="appie-section-title text-center">
              <h3 className="appie-title">
                Designed with <br /> The applicant in mind.
              </h3>
              <p>
                The full monty spiffing good time no biggie cack grub fantastic.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <img src={"./images/icon/1.png"} alt="" />
                <span>1</span>
              </div>
              <h4 className="appie-title">Searching</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <img src={"./images/icon/2.png"} alt="" />
                <span>2</span>
              </div>
              <h4 className="appie-title">Designing</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <img src={"./images/icon/3.png"} alt="" />
                <span>3</span>
              </div>
              <h4 className="appie-title">Building</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="800ms"
            >
              <div className="icon">
                <img src={"./images/icon/4.png"} alt="" />
                <span>4</span>
              </div>
              <h4 className="appie-title">Suporting</h4>
              <p>Mucker plastered bugger all mate morish are.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
