import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Snackbar,
  Alert,
  tableCellClasses,
  styled,
  TableCell
} from '@mui/material';
import { QueryClient, useQuery } from '@tanstack/react-query';
import ChannelPanel from '../pages/ChannelPanel';
import ChannelForm from '../pages/ChannelForm';
import { ChannelRead } from '../schemas';

const queryClient = new QueryClient();

const fetchChannels = async (): Promise<ChannelRead[]> => {
  const res = await fetch('http://10.39.16.49:3012/channels?limit=10');
  if (!res.ok) throw new Error('Failed to fetch channels');
  const data = await res.json();
  console.log(data);
  return data.items;
};

const ListChannel: React.FC = () => {
  const [openCreate, setOpenCreate] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<{
    message: string;
    severity: 'success' | 'error';
  } | null>(null);

  const { data: channels = [], isLoading, isError } = useQuery({
    queryKey: ['channels'],
    queryFn: fetchChannels,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const handleCloseSnackbar = () => setSnackbar(null);

  const StyledHeading = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  }));

  return (
    <Container maxWidth="xl" style={{ marginLeft: '240px', display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" my={4}>
        <Typography variant="h5">
          <b> Model Registry </b>
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setOpenCreate(true)}>
          + Create Channel
        </Button>
      </Box>

      {isLoading ? (
        <Typography>Loading channels...</Typography>
      ) : isError ? (
        <Typography color="error">Error loading channels</Typography>
      ) : (
        <>
          <StyledHeading>
            <Typography variant="h6">Channel List</Typography>
          </StyledHeading>
          {channels.map((ch) => (
            <ChannelPanel
              key={ch.channel_id}
              channel={ch}
              onUpdate={() => queryClient.invalidateQueries({ queryKey: ['channels'] })}
              onNotify={({ msg, level }) => setSnackbar({ message: msg, severity: level })}
            />
          ))}
        </>
      )}

      <Dialog open={openCreate} onClose={() => setOpenCreate(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create Channel</DialogTitle>
        <DialogContent>
          <ChannelForm
            onSuccess={() => {
              setOpenCreate(false);
              queryClient.invalidateQueries({ queryKey: ['channels'] });
              setSnackbar({ message: 'Channel created', severity: 'success' });
            }}
            onError={(err) => setSnackbar({ message: err, severity: 'error' })}
          />
        </DialogContent>
      </Dialog>

      {snackbar && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default ListChannel;
