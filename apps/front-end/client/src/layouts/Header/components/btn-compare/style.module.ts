import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    margin: '0 10px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: theme.palette.grey[700]
    },

    [theme.breakpoints.down('lg')]: {
      margin: '0 0 0 10px'
    }
  },

  badge: {
    top: 3,
    backgroundColor: theme.palette.grey[500],
    right: '-1px'
  },

  svg: {
    height: 30,
    paddingTop: 3,
    paddingLeft: 2,
    fill: theme.palette.grey[100]
  }
}))

export { useStyles }
