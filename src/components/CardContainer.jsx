import React, { useState } from 'react';
import styled from 'styled-components';
import Switch from "react-switch";
import ReactSlider from 'react-slider'

const Root=styled.div`
    height: 400px;
    width: 700px;
    background-color: #d8bbd8;
    border-radius: 20px;
    //display: flex;
    //bottom: 0;
`

const RootContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    bottom: -300px;
    position: absolute;
`
const NavComp=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`
const Views=styled.div`
    
`
const Amount=styled.div`
display: flex;
align-items: center;
    
`
const Slider=styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
.horizontal-slider{
    width: 100%;
    max-width: 500px;
    height: 10px;
    border-radius: 999px;
    border: 1px solid lightgreen;
    background-color: lightgreen;
    .example-thumb {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: green;
        top: -7px;
        &:focus-visible{
            outline: none;
        }
    }
}
    
`
const Billing=styled.div`
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid gray;
    
`
const Percentage=styled.div`
    background-color: lightyellow;
    color: orange;
    border-radius: 30px;
    padding: 10px;
    height: 5px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`
const Footer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 50px;
    
`
const FooterContainer=styled.div`
    display: flex;
    align-items: center;
    p{
        margin: 5px;
    }

`
const CustomSwitch=styled(Switch)`
    margin: 0px 15px;
`
const ButtonContainer=styled.div`



button{
    border: none;
    color: white;
    background-color: purple;
    padding: 15px 25px;
border-radius: 30px;
}
    
`
const Foot=styled.div`
    
`

const CardContainer = () => {
    const [yearly,setYearly]=useState(false)
  return (
    <RootContainer>
        <Root>
            <NavComp>
                <Views>
                <p>100K PAGE VIEWS</p>
                </Views>
                <Amount>
                <h1>$16.00</h1>
                <p>/month</p>
                </Amount>
            </NavComp>
            <Slider>
            <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
            </Slider>
            <Billing>
                <p>Monthly Billing</p>
                <CustomSwitch onChange={(checked)=>setYearly(checked)} checked={yearly} uncheckedIcon={false} checkedIcon={false} />
                <p>Yearly Billing</p>
                <Percentage>
                    <p>25% discount</p>
                </Percentage>
            </Billing>
            <Footer>
                <Foot>
                <FooterContainer>
                <img src='images/icon-check.svg'></img>
                <p>Unlimited Websites</p>
                </FooterContainer>
                <FooterContainer>
                <img src='images/icon-check.svg'></img>
                <p>100% data ownership</p>
                </FooterContainer><FooterContainer>
                <img src='images/icon-check.svg'></img>
                <p>Email Reports</p>
                </FooterContainer>
                </Foot>
                <ButtonContainer>
                <button>Start my free trial</button>
                </ButtonContainer>
            </Footer>
            
    </Root>
    </RootContainer>
  );
}

export default CardContainer;
