import { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'

import { SvgCompare } from '@assets/svg/Compare'
import { useStyles } from './style.module'

const Compare: FC = () => {
  const classes = useStyles()

  return (
    <IconButton aria-label="show 4 new mails" color="inherit" className={classes.root}>
      <Badge classes={{ anchorOriginTopRightRectangle: classes.badge }} color="secondary" badgeContent={1}>
        <SvgCompare className={classes.svg} />
      </Badge>
    </IconButton>
  )
}

export { Compare }
