import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    blue: string;
    orange: string;
  } //extend CommonColors interface
}

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
});

export default theme;
