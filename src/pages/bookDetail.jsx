import { useSelector } from "react-redux";
import React from "react";
import Review from "../components/review";

import "../components/ratingStar.css";
import MyFooter from "../components/myFooter";

// il componente BookDetail mostra i dettagli del libro selezionato 
//e i relativi commenti, fornendo una vista dettagliata della pagina del libro.
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
