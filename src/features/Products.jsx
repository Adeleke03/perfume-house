import React from "react";
import { perfumeDatas } from "../product";
import ratingStar from "../assets/Star 4.png";

const Products = () => {
  return (
    <>
      <main className="container mx-auto mb-15 lg:mb-0">
        <div className="mx-auto grid lg:grid-cols-3 lg:gap-y-[54px] lg:gap-x-[34px] gap-[44.46px] ">
          {perfumeDatas.map((perfumeData) => {
            const {
              id,
              image,
              title,
              rating,
              rateCount,
              price,
              discountPrice,
            } = perfumeData;

            // Convert rating string to number 

            const numericRating = parseFloat(rating);
            

            return (
              <div key={perfumeData.id}>
                <div
                  className="card bg-base-100 md:w-[300px]  lg:w-[226.62px] lg:h-[415.55px] rounded-[5.97px] md:rounded-[
4.56px] border-[#F3F2FB] border-[
1.49px] md:border-[
1.14px] shadow-sm"
                >
                  <figure>
                    <img
                      className="w-full"
                      src={perfumeData.image}
                      alt="Perfume"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className=" font-HostGrotesk font-bold text-base leading-[22.81px] lg:whitespace-nowrap">
                      {perfumeData.title}
                    </h2>
                    <div className="flex gap-[2.98px] items-center">
                      {[...Array(Math.floor(numericRating))].map((_, id) => (
                        <img key={id} src={ratingStar} />
                      ))}
                      <h2 className="font-HostGrotesk font-[400] text-[14.91px] leading-[17.9px] text-[#111014]"> {rating} <span className="font-HostGrotesk font-[400] text-[14.91px] leading-[17.9px] text-[#4C4C4F] "> ({rateCount})</span></h2>
                      
                    </div>

                    <h2 className="text-[#6D5DD3] font-HostGrotesk text-[20.88px] font-[700] leading-[29.83px]">
                      &#8358;{price}{" "}
                      <span className="text-[#A2A2A2] line-through font-[500] leading-[29.83px] text-[20.88px]">
                        &#8358;{discountPrice}
                      </span>
                    </h2>

                    <div className="card-actions justify-end">
                      <button className=" font-poppins h-[40px] w-full bg-[#8D34FF] rounded-[8px]  text-[#F5F5F5] cursor-pointer text-sm gap-[10px]">
                        {" "}
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Products;
