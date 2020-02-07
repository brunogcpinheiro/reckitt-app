import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const InitialHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled(TextField)`
  .MuiInputBase-root.Mui-disabled {
    margin: 20px;
  }

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
