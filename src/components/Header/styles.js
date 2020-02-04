import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #db338f;
  color: #fff;
`;

export const Logout = styled.p`
  display: flex;
  padding: 5px;
  float: right;
  cursor: pointer;

  span {
    text-decoration: underline;
    margin-left: 3px;
    margin-top: 5px;
  }
`;

export const GreetWrapper = styled.div`
  p {
    font-weight: bold;
    font-size: 0.85rem;
  }
`;
