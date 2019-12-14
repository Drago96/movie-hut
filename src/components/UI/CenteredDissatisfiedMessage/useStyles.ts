import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    message: {
      textAlign: 'center',
      paddingTop: theme.spacing(20)
    },
    emoji: {
      fontSize: theme.typography.fontSize * 8
    },
    content: {
      fontSize: theme.typography.fontSize * 3
    }
  });
});

export default useStyles;
