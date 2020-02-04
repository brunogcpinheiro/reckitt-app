import { createMuiTheme } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  pallete: { primary: green, secondary: "purple" },
});

console.log(theme);

export default theme;
