import './App.css';
import Header from "./components/header/Header"
import Slider from "./components/home/imgslider"
import LastProduct from "./components/home/LastProduct"
import ItemPage from "./components/itemPage/ItemPage"
import MostPopular from "./components/home/MostPopular"
import Footer from "./components/home/Footer"
import Signin from "./components/signin/SignIn"
import Signup from "./components/signup/SignUp"
import Checkout from "./components/checkout/Checkout";
import Additem from "./components/itemAdd/ItemAdd"
import Contactus from "./components/contactUs/ContactUs"


function App() {
  return (
    <div>
      {/* <Header/>
      <Slider/>
      <LastProduct/>
      <MostPopular/>
      <ItemPage/>
      <Footer/>
      <Signin/>
      <Signup/>
      <Checkout/>
      <Additem/> */}
      <Contactus/>


      

    </div>
  );
}

export default App;
