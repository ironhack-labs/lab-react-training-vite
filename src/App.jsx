/* eslint-disable react/no-children-prop */
import "./App.css";
import BoxColor from "./components/BoxColor/BoxColor";
import Greetings from "./components/Greeting/Greetings";
import IdCard from "./components/IdCard/IdCard";
import Random from "./components/Random/Random";
import CreditCard from "./components/CreditCard/CreditCard";
import Rating from "./components/Rating/Rating";
import DriverCard from "./components/DriverCard/DriverCard";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import Carousel from "./components/Carousel/Carousel";
import NumbersTable from "./components/NumbersTable/NumbersTable";
import FaceBook from "./components/FaceBook/FaceBook";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
  return (
    <div className="App">
      <div>
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
        />
      </div>
      <div>
        <Greetings lang="en" children="Ludwig" />
        <Random min={40} max={90} />
        <BoxColor r={150} g={100} b={30} />
      </div>
      <div>
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
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={<Rating>4.2</Rating>}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />
      </div>
      <div>
        <LikeButton />
      </div>
      <div>
        <ClickablePicture />
      </div>
      <div>
        <Dice />
      </div>
      <div>
        <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]} />
      </div>
      <div>
      <NumbersTable limit={12} />
      </div>
      <div>
        <FaceBook />
      </div>
      <div>
        <SignupPage />
      </div>


    </div>
  );
}

export default App;
