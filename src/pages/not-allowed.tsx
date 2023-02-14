// ** React Imports
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'
import { Grid } from '@mui/material'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(13)
  }
}))

const Error401 = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h1'>401</Typography>
          <Typography variant='h5' sx={{ mb: 1, fontSize: '1.5rem !important' }}>
            Você Não Está Autorizado a Acessar Essa Página!
          </Typography>
          <Typography variant='body2'>Você não tem permissão para acessar esta página. Registre-se ou faça Login!</Typography>
        </BoxWrapper>
        <Img height='487' alt='error-illustration' src='/images/pages/401.png' />
        <Grid>
          <Link passHref href='/login'>
            <Button component='a' variant='contained' sx={{ px: 5.5 }}>
              Login
            </Button>
          </Link>
          <Link passHref href='/register'>
            <Button component='a' variant='contained' sx={{ marginLeft: 8, px: 5.5 }}>
              Registrar
            </Button>
          </Link>
        </Grid>
      </Box>
      <FooterIllustrations />
    </Box>
  )
}

Error401.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
