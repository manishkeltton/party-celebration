import React from "react";

const MiddleSection = () => {
  const celebrationPart = [
    {
      id: 1,
      celeb: "Bithday",
      img: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      celeb: "Anniversary",
      img: "https://images.pexels.com/photos/7826299/pexels-photo-7826299.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      celeb: "Proposal",
      img: "https://images.pexels.com/photos/3038145/pexels-photo-3038145.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      celeb: "Dating",
      img: "https://images.pexels.com/photos/842546/pexels-photo-842546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      celeb: "Surprise",
      img: "https://images.pexels.com/photos/2253849/pexels-photo-2253849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <div className="container-fluid mt-2">
      <p className="text-start fs-1 text-success">Celebrations</p>
      <div className="row justify-content-evenly">
        {celebrationPart.map((celebs) => {
          return (
            <div className="col-4 position-relative">
              <img
                src={celebs.img}
                class="rounded mx-auto d-block"
                style={{ width: "90%", height: "90%" }}
              />
              <p
                className="position-absolute top-0 start-0 text-white border border-success p-1 fs-3 fw-bold fw-lighter"
                style={{ margin: "20% 0 20% 33%" }}
              >
                {celebs.celeb}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MiddleSection;
