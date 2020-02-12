import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const InitialHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    padding: 10px 0 30px 0;
  }

  form {
    p {
      padding: 10px 0 20px 0;
    }

    small {
      margin-bottom: 10px;
      font-size: 0.7rem;
      color: #db338f;
    }
  }
`;

export const Date = styled(TextField)`
  label.Mui-focused {
    color: #db338f;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #db338f;
    }
    &.Mui-focused fieldset {
      border-color: #db338f;
    }
  }
`;
