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
    <div className={`h-screen pt-8 bg-stone-800`}>
      <div
        className={`border-t-[15px] border-b-[15px] border-blue-950 rounded-3xl`}
      >
        {Data.map((item, index) => {
          return (
            <>
              <button
                className={`flex justify-between items-center w-full text-center bg-stone-800 text-white pr-3`}
                onClick={() => toggle(index)}
                key={index}
              >
                <h1
                  key={item.id}
                  className={`p-8 pl-4 transition-all duration-300 font-bold`}
                >
                  {item.title}
                </h1>
                <span className={`rotate-180 transition-all duration-300`}>
                  {clicked === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {clicked === index ? (
                <div className={`bg-blue-950 text-slate-400`}>
                  <p
                    key={item.id}
                    className={`flex justify-between p-3 pb-0 font-semibold text-xl transition-all duration-500`}
                  >
                    {item.answer1}
                    <input type="checkbox" />
                  </p>
                  <p
                    key={item.id}
                    className={`flex justify-between p-3 pt-0 font-semibold text-xl transition-all duration-500`}
                  >
                    {item.answer2}
                    <input type="checkbox" />
                  </p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
