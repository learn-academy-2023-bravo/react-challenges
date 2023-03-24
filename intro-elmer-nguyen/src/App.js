import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Favorite from "./components/Favorites";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
      <Header />
      <Profile />
      <Favorite />
      <Footer />
    </>
  )
}
  

export default App;


// As a user, I can see a Header component with the title of your app.

// As a user, I can see a Profile component with information about you and your partner.

// As a user, I can see a Footer component with the name of your cohort.

// As a user, I can see a Favorites component with a list of top five favorites (i.e. top five favorite TV shows, top five favorite songs, top five favorite taco shops).

// As a user, I can see a browser tab with a customized name and favicon.