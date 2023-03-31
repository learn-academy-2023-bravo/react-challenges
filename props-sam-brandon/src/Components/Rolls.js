import React from "react";

const Rolls = (props) => {
return (
<>
<h1>ROLL LOG</h1>
<div className="RollLog"> 
{props.currentArray}
</div>
 <div>
    <button type="reset" onClick={props.reset}>Reset</button>

</div>
</>)
}


export default Rolls