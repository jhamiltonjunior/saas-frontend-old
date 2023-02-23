// ** MUI Imports
import Grid from '@mui/material/Grid'

import { getCookie } from 'cookies-next';

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import CreateCounter from 'src/views/tasks/CreateTasks'

const Counter = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <CreateCounter />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export async function getServerSideProps({ req, res }: any) {
  const token = getCookie('token', { req })

  if (token === undefined) {
    res.writeHead(401, { location: '/not-allowed' });
    res.end()
  }


  return {
    props: {
      location: 'data',
    },
  }
}

export default Counter
