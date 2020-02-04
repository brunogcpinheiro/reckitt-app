import styled from "styled-components";
import { TextField, Button, FormControl } from "@material-ui/core";
import { lighten } from "polished";

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;

  img {
    width: 200px;
    height: 120px;
  }
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

export const LoginButton = styled(Button)`
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

export const RegisterWrapper = styled.div`
  margin-top: 20px;

  span {
    a {
      color: #db338f;
      margin-left: 5px;

      &:hover {
        color: ${lighten(0.1, `#db338f`)};
      }
    }
  }
`;
