import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    card: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing(5)
    },
    title: {
      '&:hover': {
        textDecoration: 'none'
      },
      paddingBottom: theme.spacing(1)
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      '&:last-child': {
        paddingBottom: theme.spacing(2)
      }
    },
    description: {
      height: '100%'
    },
    poster: {
      width: 200,
      height: 300,
      minWidth: 200
    },
    heading: {
      marginBottom: theme.spacing(3)
    },
    pagination: {
      display: 'inline-block',
      paddingLeft: 0,
      marginBottom: theme.spacing(5),
      backgroundColor: theme.palette.background.paper
    },
    page: {
      display: 'inline-block',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    pageLink: {
      display: 'block',
      padding: theme.spacing(2),
      fontSize: theme.typography.fontSize * 1.2,
      textDecoration: 'none',
      outline: 'none'
    },
    pageLinkActive: {
      backgroundColor: theme.palette.primary.main
    }
  });
});

export default useStyles;
