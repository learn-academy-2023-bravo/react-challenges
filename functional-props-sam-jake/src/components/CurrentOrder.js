import React from "react";

const CurrentOrder = ({ orderArray, totalPrice }) => {
  return (
    <>
      <div>
        <h2>Current Order</h2>
        <h3>$ Total Price: {totalPrice} $</h3>
        <ol className="list">
          {orderArray.map((orderItem) => (
            <li>{orderItem}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default CurrentOrder;
