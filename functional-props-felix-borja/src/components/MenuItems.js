

const MenuItems = (props) => {

    return (
        <>
            <div className="menuItem">
                <h4>{props.menuItem.name}</h4>
                <h4>{`$ ${props.menuItem.price}`}</h4>
                {props.menuItem.ordered && <h5>Ordered</h5>}
                <button onClick={() => {props.orderMenuItem(props.index)}}>Order Up</button>
            </div>
        </>

    )
}

export default MenuItems