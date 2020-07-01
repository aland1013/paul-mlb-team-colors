import { createMuiTheme } from '@material-ui/core/styles';

const mlbBlue = '#002D72';
const mlbRed = '#D50032';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${mlbBlue}`,
      red: `${mlbRed}`
    },
    primary: {
      main: `${mlbBlue}`
    },
    secondary: {
      main: `${mlbRed}`
    }
  }
});
