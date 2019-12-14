import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return createStyles({
    menu: {
      cursor: 'pointer'
    },
    itemWrapper: {
      '&:first-of-type': {
        marginLeft: -80
      }
    },
    heading: {
      marginTop: theme.spacing(4)
    },
    headingIcon: {
      marginRight: theme.spacing(),
      fontSize: '1em'
    }
  });
});

export default useStyles;
