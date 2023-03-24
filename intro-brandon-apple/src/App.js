import React from "react"
import Favorites from "./components/Favorites.js"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import Profile from "./components/Profile.js"


const App = () => {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
      <Favorites />
    </>
  )
}

export default App