import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'

import { Container } from '@components/vendors/container'
import { Logo } from '@components/custom/logo'
import { SideMenu } from './components/side-menu'
import { Catalog } from './components/btn-catalog'
import { SearchProducts } from './components/search'
import { PersonalAccount } from './components/btn-account'
import { FavoriteList } from './components/btn-favorite'
import { ShoppingCart } from './components/btn-cart'
import { Compare } from './components/btn-compare'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark
  },

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0.75rem auto'
  }
}))

const Header: FC = (): JSX.Element => {
  const { root, container } = useStyles()

  return (
    <AppBar elevation={0} position="sticky" className={root}>
      <Container component="section" className={container}>
        <SideMenu />
        <Hidden xsDown>
          <Logo />
        </Hidden>
        <Hidden smDown>
          <Catalog />
        </Hidden>
        <SearchProducts />
        <Hidden xsDown>
          <PersonalAccount />
        </Hidden>
        <Hidden smDown>
          <FavoriteList />
        </Hidden>
        <Hidden xsDown>
          <Compare />
        </Hidden>
        <ShoppingCart />
      </Container>
    </AppBar>
  )
}

export { Header }
