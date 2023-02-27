// ** React Imports
import * as React from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import { FormControl } from '@mui/material'
import Icon from '@mdi/react';
import { mdiPause, mdiPlay, mdiStop } from '@mdi/js';
import { clock } from 'src/clock/index'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateCounter = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Card>
      <CardHeader
        title='Crie uma Nova Tarefa'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Total 48.5% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <form method='POST' action='http://localhost:5001/api/' autoComplete='on'>
          <FormControl fullWidth sx={{ width: 1, display: 'flex', alignItems: 'center', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
            <Box sx={{ width: 1, display: 'flex', alignItems: 'center', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
              <TextField autoFocus fullWidth id='newProject' className='timer-name' label='Ex: Consultoria' name='newProject' sx={{ width: '65%' }} />
              <div className="get-timer-name" style={ {display: 'none'} }></div>

              <Typography
                component="h2"
                fontWeight='bold'
                className='clock'
              >
                00:00:00
              </Typography>

              <Button
                fullWidth
                onClick={(e) => {
                  e.preventDefault()
                  clock()
                  handleClickOpen()
                }}


                className='init'

                size='medium'
                variant='contained'
                sx={{ width: '20%' }}
              >
                Iniciar <Icon path={mdiPlay} size={1} style={{ marginLeft: 6 }} />
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Sua Tarefa foi iniciada"}</DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>OK!</Button>
                </DialogActions>
              </Dialog>

              <Button
                fullWidth
                onClick={(e) => {
                  e.preventDefault()
                  clock()
                }}

                className='pause'

                size='medium'
                variant='contained'
                sx={{ width: '10%', display: 'none' }}
              >
                Pausar <Icon path={mdiPause} size={1} style={{ marginLeft: 2 }} />
              </Button>

              <Button
                fullWidth
                onClick={(e) => {
                  e.preventDefault()
                  clock()
                }}

                className='stop'

                size='medium'
                variant='contained'
                sx={{ width: '10%', display: 'none' }}
              >
                Parar <Icon path={mdiStop} size={1} style={{ marginLeft: 2 }} />
              </Button>
            </Box>

          </FormControl>

        </form>
      </CardContent>
      {/* <PopUp /> */}

    </Card>
  )
}

export default CreateCounter
