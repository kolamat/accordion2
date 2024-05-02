import { Data } from "./Data";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      // if is clicked is equall to the index then i want to (return) setClicked as null
      return setClicked(null);
      // if clicked question is already active, then close it
    }

    // then if it not you just set the clicked to the essential value and end up opening it
    setClicked(index);
  };

  return (
    <div className={`h-screen pt-20 px-52 bg-white`}>
      <div
        className={`border-t-[15px] border-b-[15px] border-gray-500 rounded-3xl shadow-2xl shadow-gray-950`}
      >
        {Data.map((item, index) => {
          return (
            <div key={item.id}>
              <button
                className={`flex justify-between items-center w-full text-center bg-white text-black pr-3 p-8`}
                onClick={() => toggle(index)}
                key={index}
              >
                <h1
                  className={`p-8 pl-4 transition-all duration-300 font-bold`}
                >
                  {item.title}
                </h1>
                <span className={`rotate-180 transition-all duration-300`}>
                  {clicked === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {clicked === index ? (
                <div className={`bg-gray-500 text-white`}>
                  <div
                    className={`flex gap-2 p-4 pb-0 items-center  font-semibold text-xl`}
                  >
                    <p className={``}>{item.answer1}</p>
                    <input type="checkbox" />
                  </div>
                  <div className={`bg-white w-64 h-[2px]`} />
                  <div
                    className={`flex gap-2 p-4 pt-0 items-center font-semibold text-xl`}
                  >
                    <p className={``}>{item.answer2}</p>
                    <input type="checkbox" />
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
