import React from "react";
import { bottomHeaderData } from "../Services/Services";
import { Header2MainContainer } from "./styles";

const Header2 = () => {
  return (
    <Header2MainContainer>
      {bottomHeaderData.map((data, index) => (
        <div key={index + 1}>
          <p>{data.heading}</p>
          <p>{data.price}</p>
        </div>
      ))}
    </Header2MainContainer>
  );
};

export default Header2;
