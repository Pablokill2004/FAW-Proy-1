import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Contacto() {
  return (
    <>
      <React.Fragment>
        <Card>
          <CardMedia sx={{ height: 20 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Informacion de contacto
            </Typography>
            <Typography variant="body2">Ricardo Caballeros 19001133</Typography>
            <Typography variant="body2">Pablo Siquinajay 22006477</Typography>
          </CardContent>
        </Card>
      </React.Fragment>
    </>
  );
}

function Table() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="phones table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {phones.map((phone) => (
              <TableRow key={phone.id}>
                <TableCell>{phone.id}</TableCell>
                <TableCell>{phone.brand}</TableCell>
                <TableCell>{phone.model}</TableCell>
                <TableCell>{phone.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default function App() {
  return (
    <>
      <Table />
      <Contacto />
    </>
  );
}
