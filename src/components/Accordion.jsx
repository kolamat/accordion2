import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

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

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
`;

const Accordion = () => {
  return (
    <IconContext.Provider value={{ color: "#00FF89", size: "25px" }}>
      <AccordionSection>
        <Container>
          {Data.map((item) => {
            return (
              <>
                <Wrap>
                  <h1>{item.title}</h1>
                </Wrap>
                <p>
                  {item.answer1}
                  <input type="checkbox" />
                </p>
                <p>
                  {item.answer2}
                  <input type="checkbox" />
                </p>
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
