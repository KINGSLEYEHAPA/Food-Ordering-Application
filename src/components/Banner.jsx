import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt=""
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOhccTmP4zhf_1ukm5IFIZ3403JtBtUzr8A&usqp=CAU"
        alt=""
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvVwcdSbJxPEX9kWcLrp2QLTqcNL4RdhaSA&usqp=CAU"
        alt=""
      />
      <h1 className="bounce-top">
        {" "}
        <span className="logo logo2">
          Kay-<span>Foods </span>
        </span>
        Amazing Experiences
      </h1>
    </div>
  );
};

export default Banner;
