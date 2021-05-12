import { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@components/vendors/container'
import { LeftBlock } from './containers/Left.block'


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: '1.5rem',

    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    },

    [theme.breakpoints.down('xs')]: {
      marginTop: 0
    }
  }
}))

const HomePage: FC = () => {
  const { container } = useStyles()

  return (
    <Container component="section" className={container}>
      <LeftBlock />

    </Container>
  )
}

export { HomePage }
