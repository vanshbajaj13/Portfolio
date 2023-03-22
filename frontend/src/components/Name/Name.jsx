import picture from "./picture/IMG_1337.jpg";

const Name = () => {

  return (
    <div className="myInfo-container">
      <div>
        <h1 className="green">Hii</h1>
        <h1>I'm Vansh bajaj</h1>
        <p>Full stack web developer</p>
      </div>

      <div className="bgImg">
      <img src={picture} alt="my pic"/>
      </div>
    </div>
  );
};

export default Name;
