import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/NikeLogo.png",
      cateName: "Nike",
    },
   
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex">
              <img width="50px" src={value.cateImg} alt="" key={index} />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
