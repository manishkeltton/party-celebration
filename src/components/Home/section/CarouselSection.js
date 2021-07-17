import React from "react";

const CarouselSection = () => {
  return (
    <div className="container-fluid mt-3">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://deowgxgt4vwfe.cloudfront.net/uploads/1626426268_large.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://deowgxgt4vwfe.cloudfront.net/uploads/1626357822_large.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://i.ibb.co/jbsXmPc/partystore-launch.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
