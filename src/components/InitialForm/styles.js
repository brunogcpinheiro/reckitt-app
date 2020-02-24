import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { lighten } from "polished";

export const InitialFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  > h2 {
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

export const SubmitButton = styled(Button)`
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
