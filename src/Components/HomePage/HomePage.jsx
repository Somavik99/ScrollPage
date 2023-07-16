import { AllImage } from "../ImagesData/Image";
import NavBar from "../NavBar";
import LeftArrow from "../../assets/images/icon-angle-left.svg";
import RightArrow from "../../assets/images/icon-angle-right.svg";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const HomePage = () => {
  const [Current, setCurrent] = useState(0);
  const [Loading, setLoading] = useState(true);

  const ArrLLength = AllImage.length;

  const HandleClickPrev = (prev) => {
    setCurrent(Current === 0 ? ArrLLength - 1 : prev - 1);
  };

  const HandleClickNext = (next) => {
    setCurrent(Current === ArrLLength - 1 ? 0 : next + 1);
  };

  useEffect(() => {
    const Interval = setInterval(() => {
      return setCurrent((n) =>
        n > Current ? AllImage[Current] : n === AllImage.length - 1 ? 0 : n + 1
      );
    }, 3000);

    // console.log  (Current);
    return () => {
      clearTimeout(Interval);
      setTimeout(() => {
        return setLoading(false);
      }, 3000);
    };
  }, [Current]);

  if (!Array.isArray(AllImage) || ArrLLength <= 0) {
    return null;
  }

  return (
    <>
      <div>
        <NavBar />
      </div>

      <span className="Home__cont">
        {Loading ? (
          <AiOutlineLoading3Quarters />
        ) : (
          <div className="Img__cont">
            {AllImage.map((img, index) => {
              return (
                <div key={index}>
                  {index === Current && (
                    <img
                      src={img.ImageC}
                      alt="Chair Image"
                      className="Chair__image"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
        <>
          <button
            style={{ background: "black" }}
            onClick={() => HandleClickPrev(Current)}
            className="btn__img"
          >
            <img src={LeftArrow} alt="" />
          </button>
          <button
            style={{ background: "black" }}
            onClick={() => HandleClickNext(Current)}
            className="btn__img"
          >
            <img src={RightArrow} alt="" />
          </button>
        </>
        <div className="Desc__cont">
          <div>
            <span
              className="Text__cont"
              style={{ fontWeight: "900", fontSize: "44px" }}
            >
              Discover innovative ways to decorate
            </span>
            <div>
              <span
                style={{ color: "white", fontSize: "12px", fontWeight: "900" }}
              >
                We provide unmatched quality , comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing vision to life. Create a room in your own style with
                our collection and make a property a reflection of you and what
                you love.
              </span>
              <br />
              <div className="Shop__btn">
                S H O P N O W{" "}
                <span style={{ fontSize: "50px", color: "#ff0000" }}>
                  &#8594;
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default HomePage;
