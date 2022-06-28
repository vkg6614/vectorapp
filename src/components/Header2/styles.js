import styled from "@emotion/styled";

export const Header2MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;

  margin: 0 auto;
  margin-top: 15px;
  & > div {
    border-left: 1px solid rgb(36, 36, 74);
    width: 20%;
    padding: 18px 0.8em;
    background-color: rgb(26, 26, 54);
  }

  & > div:nth-child(1) {
    border: none;
  }

  & > div > p:nth-child(1) {
    font-size: 0.6rem;
    margin-bottom: 6px;
    color: rgb(199, 199, 225);
  }
  & > div > p:nth-child(2) {
    font-size: 0.95rem;

    font-weight: bold;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
