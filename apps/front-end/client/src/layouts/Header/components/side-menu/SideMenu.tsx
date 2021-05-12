import { FC, KeyboardEvent, MouseEvent, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

import { DrawerList } from './DrawerList'
import { useStyles } from './style.module'

const SideMenu: FC = () => {
  const { menuButton, iconButtonSize } = useStyles()

  const [state, setState] = useState({ left: false })

  const toggleDrawer = (action: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || 'Shift')) return
    setState({ left: action })
  }

  return (
    <>
      <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon classes={{ root: iconButtonSize }} />
      </IconButton>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}

export { SideMenu }
