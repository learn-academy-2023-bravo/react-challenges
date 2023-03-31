// Declare a functional component
const Price = ({ orderPrice
}) => {
 return(
   <>
    <div className="order-price">
    {orderPrice.map((value) => {
    return(
    <li>{value}</li>       
  )
    })}
    </div>
</>
)}

// Export so the functional order can be seen
export default Price