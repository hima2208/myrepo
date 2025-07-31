import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  Divider,
  FormLabel,
  Checkbox,
  Grid,
  Paper,
} from '@mui/material';

const ModelTraining = () => {
  return (
    <Container
      maxWidth="xl"
      style={{ marginLeft: '240px', display: 'flex', flexDirection: 'column', height: '100vh' }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" my={4}>
        <Typography variant="h5">
          <b>Request for Environment</b>
        </Typography>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>

      {/* Section 1: Basic Environment Info */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Env Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Env Purpose" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Use Case" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField label="Data Domain" fullWidth />
          </Grid>
        </Grid>
      </Paper>

      {/* Section 2: Data Products */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Structured Data Products</Typography>
        <Button variant="outlined" sx={{ my: 1 }}>
          Browse Metadata Catalog
        </Button>
        <Typography>Snowflake: DB1 – T1, T8 & T10</Typography>
        <Typography>AWS Glue: DB2 – T20 & T30</Typography>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Unstructured Data Products
        </Typography>
        <Typography>s3://bucket-1/folder-1</Typography>
        <Typography>gfs://bucket-2/folder-2</Typography>
      </Paper>

      {/* Section 3: Compute / IDE / Collaboration */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <FormLabel>Compute</FormLabel>
            <RadioGroup defaultValue="small">
              <FormControlLabel value="small" control={<Radio />} label="Small" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="large" control={<Radio />} label="Large" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormLabel>IDE</FormLabel>
            <RadioGroup defaultValue="jupyter">
              <FormControlLabel value="jupyter" control={<Radio />} label="Jupyter Notebook" />
              <FormControlLabel value="vscode" control={<Radio />} label="VSCode" />
              <FormControlLabel value="sas" control={<Radio />} label="SAS Studio" />
              <FormControlLabel value="studio" control={<Radio />} label="Sagemaker Studio" />
            </RadioGroup>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormLabel>Collaboration</FormLabel>
            <RadioGroup defaultValue="private">
              <FormControlLabel value="private" control={<Radio />} label="Private" />
              <FormControlLabel value="shared" control={<Radio />} label="Shared" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Paper>

      {/* Section 4: Container Images and AI Services */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Container Images</Typography>
        <Box>
          <FormControlLabel control={<Checkbox />} label="xgboost" />
          <FormControlLabel control={<Checkbox />} label="Python3" />
          <FormControlLabel control={<Checkbox />} label="MXNet" />
          <FormControlLabel control={<Checkbox />} label="Tensorflow" />
        </Box>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Other AI Services
        </Typography>
        <Box>
          <FormControlLabel control={<Checkbox />} label="AWS Textract" />
          <FormControlLabel control={<Checkbox />} label="Azure OpenAI" />
          <FormControlLabel control={<Checkbox />} label="Azure Video Indexer" />
          <FormControlLabel control={<Checkbox />} label="AWS Comprehend" />
          <FormControlLabel control={<Checkbox />} label="Synthetic" />
        </Box>
      </Paper>

      {/* Note */}
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        Note: Role-based access, automated workflows for entitlements approval, auto scanning for vulnerabilities, and more.
      </Typography>
    </Container>
  );
};

export default ModelTraining;
