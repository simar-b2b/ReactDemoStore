import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                  {
                    Sdata.map((val, ind) =>{
                          return  <Card 
                          key={val.index}
                          imgsrc={val.imgsrc}
                          title={val.title}
                          />
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
