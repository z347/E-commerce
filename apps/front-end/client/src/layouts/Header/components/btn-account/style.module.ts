import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    marginLeft: 30,
    marginRight: 15,
    borderRadius: 4,

    '&:hover': {
      backgroundColor: theme.palette.grey[700]
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: 15,
      marginRight: 0
    }
  },
  icon: {
    fontSize: 32,
    color: theme.palette.grey[100]
  }
}))

export { useStyles }
