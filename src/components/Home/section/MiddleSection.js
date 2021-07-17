import React from "react";

const MiddleSection = () => {
  const celebrationPart = [
    { id: 1, celeb: "Bithday", img:"https://deowgxgt4vwfe.cloudfront.net/uploads/1604994759_small.jpg" },
    { id: 2, celeb: "Anniversary", img:"https://deowgxgt4vwfe.cloudfront.net/uploads/1604994759_small.jpg" },
    { id: 3, celeb: "Proposal", img:"https://deowgxgt4vwfe.cloudfront.net/uploads/1604994759_small.jpg" },
    { id: 4, celeb: "Dating", img:"https://deowgxgt4vwfe.cloudfront.net/uploads/1604994759_small.jpg" },
    { id: 5, celeb: "Surprise", img:"https://deowgxgt4vwfe.cloudfront.net/uploads/1604994759_small.jpg" },
  ];

  return (
    <div className="container-fluid mt-2">
      <p className="text-start fs-1 text-success">Celebrations</p>
      <div className="row justify-content-evenly">
        {celebrationPart.map((celebs) => {
          return (
            <div className="col-4 position-relative">
              <img src={celebs.img} class="rounded mx-auto d-block" style={{ width:"90%", height:"90%" }}/>
              <p className="position-absolute top-0 start-0 text-white border border-success p-1 fs-3 fw-bold fw-lighter" style={{margin: "20% 0 20% 33%"}}>{celebs.celeb}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleSection;
