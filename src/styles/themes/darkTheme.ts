import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    type: 'dark'
  },
  props: {
    MuiButton: {
      variant: 'outlined'
    }
  }
});

export default theme;
