import { FC } from 'react'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'

import { useStyles } from './style.module'

const PersonalAccount: FC = (): JSX.Element => {
  const { root, icon } = useStyles()

  return (
    <IconButton aria-label="особистий кабінет" component="button" className={root}>
      <PersonIcon className={icon} />
    </IconButton>
  )
}

export { PersonalAccount }
