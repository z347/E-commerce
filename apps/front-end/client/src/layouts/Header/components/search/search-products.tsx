import React, { FC } from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

import { useStyles } from './style.module'

const SearchProducts: FC = () => {
  const classes = useStyles()

  return (
    <Paper component="form" className={classes.root}>
      <SearchIcon className={classes.searchIcon} />
      <InputBase className={classes.input} placeholder="Я шукаю ..." inputProps={{ 'aria-label': 'search' }} />
      <Hidden mdDown>
        <Divider className={classes.divider} orientation="vertical" />
        <Button variant="contained" type="submit" className={classes.submitButton}>
          Знайти
        </Button>
      </Hidden>
    </Paper>
  )
}

export { SearchProducts }
