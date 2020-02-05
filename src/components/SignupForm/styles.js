import styled from "styled-components";
import { TextField, Button, FormControl } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { lighten } from "polished";

export const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;

  img {
    width: 200px;
    height: 120px;
  }
`;

export const BackToHome = styled.div`
  align-self: flex-start;
  margin: 0 0 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;

  a {
    color: #db338f;
    font-size: 0.9rem;
    margin-left: 3px;
  }
`;

export const BackIcon = styled(ArrowBack)`
  color: #db338f;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const MainTitleWrapper = styled.div`
  h1 {
    color: #db338f;
    font-size: 2.2rem;
    margin-top: 40px;
  }
`;

export const MainFormWrapper = styled.div`
  margin-top: 20px;
`;

export const FormControlElement = styled(FormControl)`
  && {
    margin: 10px 0;
  }
`;

export const TextInputElement = styled(TextField)`
  .MuiInputLabel-outlined {
    margin: 10px 0;
  }

  label.Mui-focused {
    color: #db338f;
  }
  .MuiOutlinedInput-root {
    margin: 10px 0;

    fieldset {
      border-color: #db338f;
    }
    &.Mui-focused fieldset {
      border-color: #db338f;
    }
  }
`;

export const SignupButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 40px;
    background: #db338f;
    color: #fff;

    &:hover {
      background: ${lighten(0.1, `#db338f`)};
    }
  }
`;
