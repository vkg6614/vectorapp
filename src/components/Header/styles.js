import styled from "@emotion/styled";

export const HeaderMainContainer = styled.div`
  color: white;

  & > h3 {
    text-transform: uppercase;
    width: 75%;
    margin: 0 auto;
    padding: 18px 0;
    font-size: 0.97rem;
    padding-top: 110px;
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
    font-size: 0.7rem;
    margin-bottom: 6px;
    color: rgb(199, 199, 225);
  }

  & span {
    font-weight: bold;
  }

  & > div > div span:nth-child(1) {
    font-size: 1.4rem;
  }

  & > div > div span:nth-child(2) {
    font-size: 0.8rem;
    margin-left: 0.5em;
  }
`;
export const BottomDiv = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  align-items: center;
  padding: 0.8em;
  background-color: rgb(26, 26, 54);
  margin: 0 auto;
  margin-top: 5px;
`;