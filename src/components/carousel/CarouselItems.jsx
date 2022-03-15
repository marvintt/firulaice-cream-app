import React from "react";
import Carousel from "react-elastic-carousel";
import { CarouselData } from "./CarouselData";

function CarouselItems() {
  console.log(CarouselData);

  return (
    <Carousel>
      {CarouselData.map((item) => (
        <div key={item.id}>
          <div className="mt-8">
            <div className="grid justify-center mb-9 w-60 h-52 rounded-3xl overflow-hidden shadow-lg border-2">
              <div className="font-bold text-sm m-2 text-center">
                {item.title}
              </div>
              <img className="flex justify-center w-44 " src={item.image} alt="" />
              </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselItems;
