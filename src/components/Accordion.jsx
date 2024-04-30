import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  postion: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  transition: all;
  transition-duration: 3ms;
`;
const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all;
  transition-duration: 3ms;

  h1 {
    padding: 2rem;
    font-size: 2rem;
    transition: all;
    transition-duration: 3ms;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: colunm;
  justify-content: center;
  align-items: center;
  border-botttom: 1px solid #00ffb9;
  transition: all;
  transition-duration: 3ms;

  p {
    font-size: 2rem;
    transition: all;
    transition-duration: 3ms;
  }
`;

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
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.title}</h1>
                  <span>{clicked === index ? <FaMinus /> : <FaPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>
                      {item.answer1}
                      <input type="checkbox" />
                    </p>
                    <p>
                      {item.answer2}
                      <input type="checkbox" />
                    </p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
