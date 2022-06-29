import React from "react";
import { bottomHeaderLists } from "../Services/Services";
import { BottomHeaderMainContainer } from "./styles";

const BottomHeader = () => {
  return (
    <BottomHeaderMainContainer>
      <div>
        <div>
          <h4>MAIN POOLS</h4>
        </div>
        <div />
      </div>

      <div>
        {bottomHeaderLists.map((list, index) => (
          <div key={index + 1}>
            <div>
              <img src={list.image} alt={`${list.Symbol1}logo`} width="40px" />
              <div>
                <h4>{list.Symbol1}</h4>
                <p>ON TRADER JOE</p>
              </div>
            </div>

            <div>
              <div>
                <p>APR</p>
                <div>
                  <span>{list.percentage}%</span>
                  <span>i</span>
                </div>
              </div>

              <div>
                <p>{list.heading}</p>
                <span>0.00 {list.Symbol2}</span>
              </div>
            </div>

            <div>
              <div>
                <p>TVL</p>
                <p>${list.totalPrice}</p>
              </div>
              <div>
                <p>Claimable</p>
                <div>
                  <span>$0.00</span>
                  <span>i</span>
                </div>
              </div>
            </div>

            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 192 512"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path>
            </svg>
          </div>
        ))}
      </div>
    </BottomHeaderMainContainer>
  );
};

export default BottomHeader;
