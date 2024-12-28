import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { fetchData } from '../../components/api/api'; 

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(); 
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (err) {
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (!searchQuery) {
        setFilteredData(data);
      } else {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = data.filter((item) =>
          ['name', 'email', 'jobTitle', 'country', 'jobDetails'].some((key) =>
            item[key]?.toLowerCase().includes(lowercasedQuery)
          )
        );
        setFilteredData(filtered);
      }
    };
    filterData();
  }, [searchQuery, data]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    setFilteredData(filteredData.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setOpenDialog(true);
  };

  const handleFormChange = (e) => {
    setCurrentItem({ ...currentItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setData(data.map((item) => (item.id === currentItem.id ? currentItem : item)));
    setFilteredData(filteredData.map((item) => (item.id === currentItem.id ? currentItem : item)));
    setOpenDialog(false);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <TextField
        label="Search by Name, Email, Job Title, Country or Job Details"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        margin="normal"
      />

      <TableContainer component={Paper} style={{ marginTop: 16 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Phone Number</b></TableCell>
              <TableCell><b>Company Name</b></TableCell>
              <TableCell><b>Job Title</b></TableCell>
              <TableCell><b>Country</b></TableCell>
              <TableCell><b>Job Details</b></TableCell> 
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.companyName}</TableCell>
                <TableCell>{item.jobTitle}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell>{item.jobDetails}</TableCell> 
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(item)}
                    style={{ marginRight: 8 }}
                  >
                    Modify
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {currentItem && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit User Information</DialogTitle>
          <DialogContent>
            {['name', 'email', 'phoneNumber', 'companyName', 'jobTitle', 'country', 'jobDetails'].map((field) => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={currentItem[field] || ''}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default AdminDashboard;
