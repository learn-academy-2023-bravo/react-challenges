// Declare a functional component
const Order = ({ orderSummary, orderPrice
 }) => {
  return(
    <>
      <div className="order-summary">{orderSummary.map((value) => {
        return(
          <li>{value}</li>       
        )
      })}
      </div>

    
    </>
  )
}
  

// Export so the functional order can be seen
export default Order