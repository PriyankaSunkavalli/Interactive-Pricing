import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import CardContainer from "./components/CardContainer";

const Root = styled.div`
  height: 100vh;
`;
const BgImg = styled.div`
  position: relative;
  background-image: url("/images/bg-pattern.svg");
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
`;

const SecondImg = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
  }
`;
const TextContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }
`;

function App() {
  return (
    <Root>
      <BgImg>
        {/* <img src="/images/bg-pattern.svg"></img> */}
        <SecondImg>
          <img src="/images/pattern-circles.svg"></img>
        </SecondImg>
        <TextContainer>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign up for asdsd sdaed dfed wded df wqewq.</p>
        </TextContainer>
        <CardContainer />
      </BgImg>
    </Root>
  );
}

export default App;
