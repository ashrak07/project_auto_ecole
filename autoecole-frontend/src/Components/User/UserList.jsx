import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const users = [
  {
    name: "Rakoto Andry",
    matricule: "MAT1234",
    role: "student",
    email: "andry@example.com",
    dateOfBirth: "2001-06-21",
    address: "Antananarivo",
  },
  {
    name: "Rasoa Anja",
    matricule: "MAT5678",
    role: "teacher",
    email: "anja@example.com",
    dateOfBirth: "1990-12-12",
    address: "Fianarantsoa",
  },
  {
    name: "Randriamahazo Aina",
    matricule: "MAT9876",
    role: "manager",
    email: "aina@example.com",
    dateOfBirth: "1985-03-30",
    address: "Toamasina",
  },
];

const UserList = () => {
  return (
    <Box className="p-4">
      <Card>
        <CardContent>
          <Typography variant="h5" className="mb-4 font-bold text-center">
            Liste des utilisateurs
          </Typography>

          <Paper className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell>Matricule</TableCell>
                  <TableCell>Rôle</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Date de naissance</TableCell>
                  <TableCell>Adresse</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.matricule}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.dateOfBirth}</TableCell>
                    <TableCell>{user.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserList;
