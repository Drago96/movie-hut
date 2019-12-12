import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    card: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing(5)
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
      '&:last-child': {
        paddingBottom: theme.spacing(2)
      }
    },
    poster: {
      width: 400,
      height: 600,
      minWidth: 400
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing()
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    vote: {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    voteIcon: {
      height: '100%',
      width: '1.5em'
    },
    voteDetails: {
      paddingLeft: theme.spacing(),
      display: 'flex',
      flexDirection: 'column'
    },
    voteAverage: {
      fontSize: '1.2em'
    },
    voteCount: {
      fontSize: '0.8em'
    },
    subtitle: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing()
    },
    description: {
      height: '100%'
    },
    personImage: {
      width: 50,
      height: 70
    },
    personImageColumn: {
      width: 80
    },
    personNameColumn: {
      width: '20%'
    },
    tableHeading: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      cursor: 'pointer',
      '& *': {
        marginRight: theme.spacing()
      }
    },
    tableHeadingIcon: {
      fontSize: '2.5em'
    },
    personTable: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5)
    }
  });
});

export default useStyles;
