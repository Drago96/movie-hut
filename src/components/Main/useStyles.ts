import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    toolbar: theme.mixins.toolbar,
    main: {
      paddingLeft: 240 + theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  });
});

export default useStyles;
