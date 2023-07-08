import React from "react";

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
