import picture from "./picture/IMG_1337.jpg";
import Name from "./Name";

const Home = () => {
  const text1 = Array.from("I'm");
  const text2 = Array.from(" Vansh");
  const text3 = Array.from(" bajaj");

  return (
    <div className="myInfo-container">
    <div className="bgImg">
        <img src={picture} alt="my pic" />
      </div>
      <div className="nameTextDiv">
        <h1 className="green">Hii</h1>
        <h1>
          <span>
            {text1.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
          <span>
            {text2.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
          <span>
            {text3.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
        </h1>
        <p>Full stack web developer</p>
      </div>
      
    </div>
  );
};

export default Home;
