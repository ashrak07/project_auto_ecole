import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import { setSelectedList } from "../../Redux/clientSlice";

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
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const setSelected = () => {
    dispatch(setSelectedList(false));
  };

  return (
    <Box className="" sx={{}}>
      <Card elevation={0} sx={{ padding: 2, marginBottom: 5 }}>
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              fontWeight="bold"
              fontFamily="Montserrat"
              sx={{ marginBlock: 2 }}
            >
              LISTE DES UTILISATEURS
            </Typography>
          </div>
          <div>
            <Button
              // variant="contained"
              variant="contained"
              sx={{
                marginRight: 1,
                background: "#f50057",
              }}
              onClick={setSelected}
            >
              {" "}
              {/* <AddBoxIcon sx={{ marginRight: 1 }} /> */}
              <AddIcon sx={{ marginBottom: "1px", marginRight: 1 }} />
              créer client
            </Button>
            <OutlinedInput
              size="small"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </Box>
      </Card>

      <Paper className="overflow-x-auto" elevation={0}>
        <Table sx={{}}>
          <TableHead sx={{ background: "#80deea" }}>
            <TableRow>
              <TableCell sx={{}}>Nom</TableCell>
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
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.name}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.matricule}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.role}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.email}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.dateOfBirth}
                </TableCell>
                <TableCell sx={{ fontFamily: "Poppins", fontSize: "small" }}>
                  {user.address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default UserList;
