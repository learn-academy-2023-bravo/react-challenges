const Menu = (props) => {
  return (
    <>
      <h4>{props.value.name + ' ' + props.value.price}</h4>
      <button>Click to Order</button>
    </>
  )
}
export default Menu