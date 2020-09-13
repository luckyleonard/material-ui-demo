import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    blue: string;
    orange: string;
  } //extend CommonColors interface
}
declare module '@material-ui/core/styles/createTypography' {
  // modefied the right module
  interface Typography {
    tab: TypographyStyle;
  } //define the return Typography in the Theme
  interface TypographyOptions {
    tab?: TypographyStyleOptions;
  } //allow it to config in the Options
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
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none', //change the auto upper case from button
      fontWeight: 700,
      fontSize: '1rem', //use rem for the element itself
    },
  },
});

export default theme;
