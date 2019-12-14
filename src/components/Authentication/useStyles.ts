import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    dialogContent: {
      padding: 0,
      width: 550,
      minHeight: 550,
      '&:first-child': {
        paddingTop: 0
      }
    },
    toolbarButton: {
      backgroundColor: 'initial',
      boxShadow: 'initial'
    },
    tab: {
      flexGrow: 1,
      maxWidth: 'initial'
    },
    indicator: {
      backgroundColor: theme.palette.text.primary
    },
    tabContent: {
      padding: theme.spacing(4),
      paddingTop: theme.spacing(2)
    },
    authenticationField: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    error: {
      color: theme.palette.error.main,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      textAlign: 'center'
    }
  });
});

export default useStyles;
