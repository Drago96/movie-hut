import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    paper: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      overflow: 'hidden'
    },
    spinner: {
      color: theme.palette.common.white
    }
  });
});

export default useStyles;
