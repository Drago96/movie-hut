import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    banner: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      textAlign: 'center'
    }
  });
});

export default useStyles;
