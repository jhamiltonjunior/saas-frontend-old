// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import TotalEarning from 'src/views/dashboard/TotalEarning'
import CreateCounter from 'src/views/tasks/CreateTasks'
import TasksCreated from 'src/views/tasks/TasksCreated'

const Counter = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <CreateCounter />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TasksCreated />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Counter
