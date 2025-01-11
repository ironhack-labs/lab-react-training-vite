/* eslint-disable react/no-children-prop */
import "./App.css";
import BoxColor from "./components/BoxColor/BoxColor";
import Greetings from "./components/Greeting/Greetings";
import IdCard from "./components/IdCard/IdCard";
import Random from "./components/Random/Random";
import CreditCard from "./components/CreditCard/CreditCard"
import Rating from "./components/Rating/Rating";
import DriverCard from "./components/DriverCard/DriverCard";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";



function App() {
  return (
    <div className="App">
      <IdCard 
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
      />
      <Greetings lang="en" children="Ludwig" />
      <Random min={40} max={90}/>
      <BoxColor r={150} g={100} b={30} />

      <CreditCard
        type="visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
      <Rating>0</Rating>
      <Rating>1</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      
      <DriverCard
        name="Travis Kalanick"
        rating={<Rating>4.2</Rating>}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      
      <LikeButton />



      <ClickablePicture />
      



    </div>

  );
}

export default App;
