import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  props: {
    MuiButton: {
      variant: 'contained'
    }
  }
});

export default lightTheme;
