import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import BottomHeader from "../BottomHeader/BottomHeader";
import Header2 from "../Header2/Header2";
import { headerData } from "../Services/Services";
import { HeaderMainContainer, HeaderTopDiv, BottomDiv } from "./styles";

const Header = () => {
  return (
    <HeaderMainContainer>
      <p>Stake Funds</p>
      <HeaderTopDiv>
        {headerData.map((data, index) => (
          <div key={index + 1}>
            <p>{data.heading}</p>
            <div>
              <span>${data.price}</span>
              <span>USD</span>
            </div>
          </div>
        ))}
      </HeaderTopDiv>
      <Header2 />
      <BottomDiv>
        <p>DETAILED PROTOCOL STATS</p>
        <KeyboardArrowDown style={{ color: "white" }} />
      </BottomDiv>
      <BottomHeader />
    </HeaderMainContainer>
  );
};

export default Header;
