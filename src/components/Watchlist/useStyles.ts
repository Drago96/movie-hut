import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    heading: {
      marginBottom: theme.spacing(3)
    },
    poster: {
      width: 80,
      height: 120
    },
    title: { '&:hover': { textDecoration: 'none' } },
    actionIcon: {
      cursor: 'pointer'
    },
    actionsColumn: {
      width: 30
    },
    posterColumn: {
      width: 100
    }
  });
});

export default useStyles;
