import styled from "styled-components";
import { Link } from "react-router-dom";

import { SentimentVeryDissatisfiedOutlined } from "@material-ui/icons";
import { lighten } from "polished";

export const BackToLogWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 30px 100px 30px;
`;

export const BackToLog = styled(Link)`
  width: 50%;
  background: #db338f;
  color: #fff;
  margin: 20px 0 10px 0;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.1, `#db338f`)};
  }
`;

export const ErrorIcon = styled(SentimentVeryDissatisfiedOutlined)`
  color: #db338f;
  flex: 1;
`;
