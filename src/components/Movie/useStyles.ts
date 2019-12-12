import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    genreChip: {
      marginLeft: theme.spacing()
    }
  });
});

export default useStyles;
