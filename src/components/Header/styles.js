import styled from "@emotion/styled";

export const HeaderMainContainer = styled.div`
  color: white;

  & > p {
    text-transform: uppercase;
    width: 75%;
    font-weight: bold;
    letter-spacing: 1.4px;
    margin: 0 auto;
    font-size: 1.1rem;
    margin-bottom: 22px;
    padding-top: 110px;
  }
  @media screen and (max-width: 1000px) {
    & > p {
      width: 100%;
    }
  }
`;
export const HeaderTopDiv = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & > div {
    background-color: rgb(36, 36, 74);
    text-align: center;
    border-radius: 3px;
    padding: 12px 0;
    width: 32%;
  }

  & > div:nth-child(2) span {
    color: rgb(174, 243, 60);
  }

  & > div > p {
    font-size: 0.72em;
    margin-bottom: 5px;
    color: rgb(199, 199, 225);
  }

  & span {
    font-weight: bold;
  }

  & > div > div span:nth-child(1) {
    font-size: 1.25rem;
    letter-spacing: px;
  }

  & > div > div span:nth-child(2) {
    font-size: 0.8rem;
    margin-left: 0.5em;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const BottomDiv = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  align-items: center;
  padding: 0.5em 1.4em;
  background-color: rgb(26, 26, 54);
  margin: 0 auto;
  margin-top: 5px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
