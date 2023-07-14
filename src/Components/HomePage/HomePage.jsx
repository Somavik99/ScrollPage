import { AllImage } from "../ImagesData/Image";
import NavBar from "../NavBar";
import LeftArrow from "../../assets/images/icon-angle-left.svg";
import RightArrow from "../../assets/images/icon-angle-right.svg";
import "./HomePage.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [Current, setCurrent] = useState(0);
  // const [ImageState, setImageState] = useState(AllImage[Current]);

  const ArrLLength = AllImage.length;

  useEffect(() => {
    console.log(Current);
    const Interval = setTimeout(() => {
      setCurrent(Current);
    }, 10000);

    return () => {
      clearTimeout(Interval);
    };
  }, [Current]);

  const HandleClickPrev = (prev) => {
    setCurrent(Current === 0 ? ArrLLength - 1 : prev - 1);
  };

  const HandleClickNext = (next) => {
    setCurrent(Current === ArrLLength - 1 ? 0 : next + 1);
  };

  if (!Array.isArray(AllImage) || ArrLLength <= 0) {
    return null;
  }

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="Img__cont">
        {AllImage.map((img, index) => {
          return (
            <div key={index}>
              {index === Current && <img src={img.ImageC} alt="Chair Image" />}
            </div>
          );
        })}
      </div>
      <div>
        <button
          style={{ background: "black" }}
          onClick={() => HandleClickPrev(Current)}
        >
          <img src={LeftArrow} alt="" />
        </button>
        <button
          style={{ background: "black" }}
          onClick={() => HandleClickNext(Current)}
        >
          <img src={RightArrow} alt="" />
        </button>
        <span
          className="Text__cont"
          style={{ fontWeight: "900", fontSize: "44px" }}
        >
          Discover innovative ways to decorate
        </span>
        <div>
          <span>
            We provide unmatched quality , comfort, and style for property
            owners across the country. Our experts combine form and function in
            bringing vision to life. Create a room in your own style with our
            collection and make a property a reflection of you and what you
            love.
          </span>
          <button>SHOP NOW</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
