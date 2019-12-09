import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: 240,
      flexShrink: 0
    },
    drawerPaper: {
      width: 240,
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(1)
    },
    nestedItem: {
      paddingLeft: theme.spacing(4)
    },
    listItem: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  });
});

export default useStyles;
