import React, { useState } from "react";

const Robot = ({ user, handleUser, badBotState }) => {
    return (
        <>
            <input type="text" placeholder='Enter text' value={user} onChange={handleUser}></input>
            <h1 className='robot'>Good Robot</h1>
            <p className='good-robot'>I hear you saying {user}, is that correct?</p>
            <h1 className='robot'>Bad Robot</h1>
            <p className='bad-robot'>I hear you saying {badBotState}, is that correct?</p>
            <h1 className='robot'>Kanyebot</h1>
            <p className='kanye-robot'>I'm gonna let you finish but Beyonce is {user}</p>
        </>
    )
}

export default Robot