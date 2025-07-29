import React from 'react';
import {
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
} from '@mui/material';

const ModelTraining = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Request for Environment
      </Typography>

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

      <Divider sx={{ my: 4 }} />

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

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <FormLabel>Compute</FormLabel>
          <RadioGroup defaultValue="small">
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormLabel>IDE</FormLabel>
          <RadioGroup defaultValue="jupyter">
            <FormControlLabel value="jupyter" control={<Radio />} label="Jupyter Notebook" />
            <FormControlLabel value="vscode" control={<Radio />} label="VSCode" />
            <FormControlLabel value="sas" control={<Radio />} label="SAS Studio" />
            <FormControlLabel value="studio" control={<Radio />} label="Sagemaker Studio" />
          </RadioGroup>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormLabel>Collaboration</FormLabel>
          <RadioGroup defaultValue="private">
            <FormControlLabel value="private" control={<Radio />} label="Private" />
            <FormControlLabel value="shared" control={<Radio />} label="Shared" />
          </RadioGroup>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

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

      <Button variant="contained" sx={{ mt: 4 }}>
        Create
      </Button>

      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        Note: Role-based access, automated workflows for entitlements approval, auto scanning for vulnerabilities, and more.
      </Typography>
    </Box>
  );
};

export default ModelTraining;
