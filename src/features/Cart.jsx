import React, {useState, useEffect} from "react";
import { perfumeDatas } from "../product"; 
import vectorTick from "../assets/Vector.png";

const Cart = () => {
  // const findPerfume1 = perfumeDatas.find((perfumeData) => perfumeData.id === 1);
  // const findPerfume2 = perfumeDatas.find((perfumeData) => perfumeData.id === 2);
  // const findPerfume3 = perfumeDatas.find((perfumeData) => perfumeData.id === 3);

 

  const deliveryPrice = 2000;
  

  
  
  
  
  let [qty,setQty] = useState(1);
  
  
  
  
  function qtyInc() {
    setQty((prev) => prev + 1)
  }
  
  function qtyDec() {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  }

  const calculateSubTotal = (price, qty) => {
    return price * qty;
  };

  const calculateTotalCart = (subTotal, deliveryPrice) => {
    return subTotal + deliveryPrice;
  };

  // useEffect(() => {
    
    
  //   const subTotalPrice = calculateSubTotal(price, qty);
  //   setSubTotal(subTotalPrice);
  //   setTotalCart(calculateTotalCart(subTotalPrice, deliveryPrice));
  // }, [qty]);
  
  
  return (
    <>
      <main className="grid container mx-auto  px-[25.03px] py-[23.1px] gap-[9.63px] rounded-[7.7px] bg-base-100 border-[#F3F2FB] shadow-sm">
        <h1 className="font-poppins leading-[34.66px] text-[23.1px] font-[600]">
          My Cart Preview
        </h1>
        <section>
          {perfumeDatas.slice(0, 3).map((perfumeData) => {
            const {
              id,
              image,
              title,
              rating,
              rateCount,
              price,
              discountPrice,
            } = perfumeData;
          
            
            
            // let newPrice = Number(price);
            // console.log(newPrice);
            // it gives a nan didn't convert to 3000
            
            // convert price string to number
            
            // const numericPrice = parseFloat(price);
            // console.log(numericPrice);
            
            // let numericPrice = 3000;
            
            // newPrice = (newPrice * qty).toFixed(2);
            // sub-total function
            
            return (
              <div key={perfumeData.id}>
                <div className="flex gap-[23.95px] items-center mb-6">
                <div>
                  <figure>
                    <img src={perfumeData.image} className="object-cover w-[91.4511489868164px] h-[94.33908081054688px]" alt="perfume" />
                  </figure>
                </div>
                <div>
                  <h2 className="py-1 font-HostGrotesk font-[500] text-[13.97px] leading-[16.77px]">{perfumeData.title}</h2>
                {/* div for qty buttons */}
                  <div className="py-1.5">
                     {/* Disable the '-' button when qty is 1 */}
                    <button onClick={qtyDec} disabled={qty === 1} className={`text-white font-bold bg-[#8D34FF] px-1.5 rounded ${qty === 1 ? 'bg-[#D2D2D2] cursor-not-allowed' : 'bg-[#8D34FF]'}`}>-</button>
                    <span className="px-2">{qty}</span>
                    <button onClick={qtyInc} className="text-white font-bold bg-[#8D34FF] px-1.5 rounded">+</button>
                  </div>
                  <div className="flex gap-[36.93px] items-center">
                  <h3 className="font-HostGrotesk font-[700] text-[15.4px] leading-[18.48px]">&#8358;{price}</h3>
                  {/* If i make my remove button functional it removes all my cart it doesn't remove singlehandedly so no function assigned */}
                  <button className="text-red-500 border-2 border-red-400 p-1 text-[12.25px] font-HostGrotesk leading[14.7px] font-[500] rounded">Remove</button>
                  </div>
                  
                  

                </div>
                </div>
                
              </div>
              
            );
          })}
                {/* Sub Total, Delivery & Total Div. */}
                <div className="mt-6">
                  <h4 className="py-2 flex justify-between font-HostGrotesk font-[500] text-[14px] leading-[16.8px] text-[#5A5A5A]">Sub Total <span className="font-[800] font-HostGrotesk text-[15.4px] leading-[18.48px] text-[#000000]">&#8358;18,000</span></h4>
                  <h4 className="py-2 flex justify-between font-HostGrotesk font-[500] text-[14px] leading-[16.8px] text-[#5A5A5A]">Delivery <span className="font-[800] font-HostGrotesk text-[15.4px] leading-[18.48px] text-[#000000]">&#8358;{deliveryPrice}</span></h4>
                  <h4 className="py-2 flex justify-between font-HostGrotesk font-[500] text-[14px] leading-[16.8px] text-[#5A5A5A] mb-4">Total  <span className="font-[800] font-HostGrotesk text-[15.4px] leading-[18.48px] text-[#000000]">&#8358;20,000</span></h4>
                </div>
                {/* Confirm Order div - button  */}
                <div className="items-center flex">
                  <button  className=" w-[289px] lg:w-full h-[58px] whitespace-nowrap px-[40.91px] py-[11
                  .55px] bg-[#8D34FF] text-white rounded-[10px] gap-[9.63px] font-HostGrotesk font-[500] leading-[21.18px] text-[18px] btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Confirm Order</button>
                  {/* modal for Confirm Order */}
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="" >open modal</button> */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <img src={vectorTick} alt="Vector" />
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-[700] font-HostGrotesk text-[40px] leading-[48px]">Order Confirmed</h3>
    <p className="py-[10px] font-HostGrotesk font-[500] text-[15.97px] leading-[22.81px] text-[#676767]">We hope you enjoy your order</p>
    {/* div for perfume */}
    <div>
      {perfumeDatas.slice(0, 3).map((perfumeData) => {
        const {
          id,
          image,
          title,
          rating,
          rateCount,
          price,
          discountPrice,  
        } = perfumeData;
        
        return(
          <div key={perfumeData.id}>
            {/* order confirmed section  */}
            <section className=" flex justify-between">
            <figure className="flex ">
              <img className="w-[77.58px] h-[76.76px]" src={image} alt="perfume image" />
              <figcaption className="px-2">
              <h4 className="font-HostGrotesk font-[500] text-[14.7px] leading-[17.64px]">{title}</h4>
              <h5 className="text-[#8D34FF] ">{qty}x <span className="text-[#5D5D5D]">&#8358;{price}</span></h5>
              </figcaption>
            </figure>
            
            {/* subtotal tag */}
            <h3>&#8358;18000</h3>
            </section>
            
            

          </div>
        )
      })}
    
        
    </div>
    {/* total - div  */}

    <h3 className="flex justify-between text-[#5D5D5D] py-10">Order Total <span className="text-[#000000]" >&#8358;20000</span></h3>


    {/* Start New Order button */}
    <button className="py-[7px] px-[10px] gap-[14px] text-white bg-[#8D34FF] rounded-[15px] w-full">Start New Order</button>
  </div>
</dialog>
                </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
