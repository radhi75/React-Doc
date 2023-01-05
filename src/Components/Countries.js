import React from "react";

const Countries = () => {
  const data = [
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      name: "warsaw",
    },
    {
      image:
        "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
      name: "warsaw",
    },
  ];
  return (
    <div>
      <div id="countries">
        {data.map((el) => (
          <div className="country" key={Math.random()}>
            <img src={el.image} alt={el.name} />
            <div>
              <p>{el.name}</p>
              <button>see openings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
