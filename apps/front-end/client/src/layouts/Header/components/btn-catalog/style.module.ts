import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 38,
    borderColor: theme.palette.grey[600],
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.grey[50],
    textTransform: 'none',
    fontWeight: 700,
    letterSpacing: 1.5,
    margin: '0 30px',
    padding: '0 25px',

    '&:hover': {
      backgroundColor: theme.palette.grey[700]
    },

    [theme.breakpoints.down('lg')]: {
      padding: 15,
      marginLeft: 15
    }
  }
}))

export { useStyles }
