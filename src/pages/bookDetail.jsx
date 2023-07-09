import { useSelector } from "react-redux";
import React from "react";
import Review from "../components/review";

import "../components/ratingStar.css";
import MyFooter from "../components/myFooter";


const BookDetail = () => {
  const { Dettagli } = useSelector((state) => state.api);

  console.log(Dettagli);

  return (
    <>
    <div className="d-flex justify-content-center align-items-center ">
      {Dettagli && (
        <div className="detail">
          <img width={500} src={Dettagli.img} alt="" />

          <p>{Dettagli.title}</p>
          <p>{Dettagli.category}</p>
          <p>{Dettagli.price} $</p>
        </div>
      )}

      <Review />
      
     
    </div>
    <MyFooter />
    </>
  );
};
export default BookDetail;
