import { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

import { SvgFavorite } from '@assets/svg/Favorite'
import { useStyles } from './style.module'

const FavoriteList: FC = () => {
  const classes = useStyles()

  return (
    <IconButton aria-label="show 4 new mails" color="inherit" className={classes.root}>
      <Badge classes={{ anchorOriginTopRightRectangle: classes.badge }} color="secondary" badgeContent={8}>
        <SvgFavorite className={classes.svg} />
      </Badge>
    </IconButton>
  )
}

export { FavoriteList }
