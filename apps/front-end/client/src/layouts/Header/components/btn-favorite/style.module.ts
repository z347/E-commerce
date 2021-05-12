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
      margin: '0 0 0 15px'
    }
  },
  badge: {
    right: '-1px',
    top: 3,
    backgroundColor: theme.palette.grey[500]
  },
  svg: {
    paddingTop: 3,
    paddingLeft: 2,
    fill: theme.palette.grey[100]
  }
}))

export { useStyles }
