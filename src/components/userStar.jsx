import React from "react";


// il componente UserStar, visualizza una valutazione a stelle basata su un valore numerico rate
// che viene passato come props.
// Se il valore di rate è 3, verranno visualizzate 3 stelle piene e 2 stelle vuote.
const UserStar = ({ rate }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        if (index + 1 < rate) {
          return (
            <span key={index} className="star">
              ★
            </span>
          );
        } else {
          return (
            <span key={index} className="star">
              ☆
            </span>
          );
        }
      })}
    </div>
  );
};
export default UserStar;
