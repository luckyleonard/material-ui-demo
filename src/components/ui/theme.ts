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
    estimate: TypographyStyle;
    learnMoreButton: TypographyStyle;
  } //define the return Typography in the Theme
  interface TypographyOptions {
    tab?: TypographyStyleOptions;
    estimate?: TypographyStyleOptions;
    learnMoreButton?: TypographyStyleOptions;
  } //allow it to config in the Options
}

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGray = '#868686';

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1rem', //use rem for the element itself
      textTransform: 'none', //change the auto upper case from button
      fontWeight: 700,
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: '2rem',
      fontWeight: 700,
      color: arcBlue,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
      color: arcBlue,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGray,
    },
    subtitle2: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: 'white',
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGray,
    },
    learnMoreButton: {
      font: 'bold Roboto',
      textTransform: 'none',
      color: arcBlue,
      border: `2px solid ${arcBlue}`,
      borderRadius: 50,
    },
  },
});

export default theme;
