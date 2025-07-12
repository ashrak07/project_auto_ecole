import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Button,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import ListIcon from "@mui/icons-material/List";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setSelectedList } from "../../Redux/clientSlice";
import dayjs from "dayjs";
import { AxiosInstance } from "../../Axios/AxiosInstance";
import { createUser } from "../../Axios/API";
import BasicPopover from "../BasicPopover";
import Popover from "@mui/material/Popover";
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const CreateUser = () => {
  const roles = ["Enseignant", "Etudiant"];
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [success, setSuccess] = useState(true);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    role: "",
    address: "",
    dateOfBirth: dayjs(),
    permis: [],
  });

  const emptyFrom = () => {
    setForm({
      lastName: "",
      firstName: "",
      phone: "",
      role: "",
      address: "",
      dateOfBirth: null,
      permis: [],
    });
  };

  console.log("form =>", form);

  const fetchCreateUser = async () => {
    console.log("form =>", form);
    try {
      setLoading(true);
      const response = await createUser(form);
      if (response) {
        console.log("res =>", response.data);
        setAnchorEl(true);
        setSuccess(true);
      } else {
        setAnchorEl(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      emptyFrom();
      setLoading(false);
    }
  };

  // const [showPassword, setShowPassword] = React.useState(false);
  // const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  // const handleMouseUpPassword = (event) => {
  //   event.preventDefault();
  // };

  const setList = () => {
    dispatch(setSelectedList(true));
  };

  return (
    <div>
      <Card
        elevation={0}
        className=""
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <div
          className="my-2"
          style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
        >
          CREATION DES MEMBRES
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              marginRight: 1,
              background: "#f50057",
            }}
            onClick={setList}
          >
            <ListIcon sx={{ marginRight: 2 }} /> Liste des clients
          </Button>
        </div>
      </Card>
      <Card
        elevation={0}
        sx={{
          padding: 3,
          background: "",
          width: "60ch",
        }}
      >
        <div>
          <div className="flex justify-space-between gap-2">
            <div className="my-2" style={{ width: "50%" }}>
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Nom
              </div>
              <TextField
                fullWidth
                name="lastName"
                value={form.lastName}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="my-2 " style={{ width: "50%" }}>
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Prénom
              </div>
              <TextField
                name="firstName"
                value={form.firstName}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                fullWidth
              />
            </div>
          </div>
          <Box
            className=""
            sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
          >
            <div className="" style={{ width: "50%" }}>
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Téléphone
              </div>

              <TextField
                name="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                fullWidth
              />
            </div>
            <div className="" style={{ width: "50%" }}>
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Role
              </div>
              <TextField
                select
                name="role"
                value={form.role}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                fullWidth
              >
                {roles.map((role) => (
                  <MenuItem
                    key={role}
                    value={role === "Enseignant" ? "teacher" : "student"}
                  >
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* <div className="" style={{ width: "50%" }}>
              <Typography fontFamily="Poppins" fontSize="small  ">
                Mot de passe
              </Typography>
              <OutlinedInput
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div> */}
          </Box>
          <Box>
            <div className="my-2">
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Adresse
              </div>

              <TextField
                name="address"
                value={form.address}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                fullWidth
              />
            </div>
          </Box>

          <Box>
            <div className="my-2">
              <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
                Date de naissance
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={form.dateOfBirth}
                  onChange={(val) =>
                    setForm((prev) => ({
                      ...prev,
                      dateOfBirth: val,
                    }))
                  }
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </div>
          </Box>
          <Box>
            <div style={{ fontFamily: "Poppins", fontSize: "small" }}>
              Permis
            </div>
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="permis"
                  value="A"
                  checked={form.permis.includes("A")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setForm((prev) => ({
                        ...prev,
                        permis: [...prev.permis, e.target.value],
                      }));
                    } else {
                      setForm((prev) => ({
                        ...prev,
                        permis: prev.permis.filter((p) => p !== e.target.value),
                      }));
                    }
                  }}
                />
              }
              label="A"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="permis"
                  value="B"
                  checked={form.permis.includes("B")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setForm((prev) => ({
                        ...prev,
                        permis: [...prev.permis, e.target.value],
                      }));
                    } else {
                      setForm((prev) => ({
                        ...prev,
                        permis: prev.permis.filter((p) => p !== e.target.value),
                      }));
                    }
                  }}
                />
              }
              label="B"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="permis"
                  value="C"
                  checked={form.permis.includes("C")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setForm((prev) => ({
                        ...prev,
                        permis: [...prev.permis, e.target.value],
                      }));
                    } else {
                      setForm((prev) => ({
                        ...prev,
                        permis: prev.permis.filter((p) => p !== e.target.value),
                      }));
                    }
                  }}
                />
              }
              label="C"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="permis"
                  value="D"
                  checked={form.permis.includes("D")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setForm((prev) => ({
                        ...prev,
                        permis: [...prev.permis, e.target.value],
                      }));
                    } else {
                      setForm((prev) => ({
                        ...prev,
                        permis: prev.permis.filter((p) => p !== e.target.value),
                      }));
                    }
                  }}
                />
              }
              label="D"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="permis"
                  value="E"
                  checked={form.permis.includes("E")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setForm((prev) => ({
                        ...prev,
                        permis: [...prev.permis, e.target.value],
                      }));
                    } else {
                      setForm((prev) => ({
                        ...prev,
                        permis: prev.permis.filter((p) => p !== e.target.value),
                      }));
                    }
                  }}
                />
              }
              label="E"
            />
          </Box>
        </div>
        <Box sx={{ marginBlock: 3 }}>
          <Button
            onClick={fetchCreateUser}
            fullWidth
            variant="contained"
            sx={{ background: "#1976d2" }}
          >
            {loading ? (
              <CircularProgress sx={{ color: "white" }} size={24} />
            ) : (
              "Créer membre"
            )}
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {success ? (
              <Typography sx={{ p: 2, color: "green" }}>
                <DoneIcon sx={{ color: "green", marginRight: 1 }} />
                Membre crée avec succès.
              </Typography>
            ) : (
              <Typography sx={{ p: 2, color: "red" }}>
                <ErrorOutlineIcon sx={{ color: "red", marginRight: 1 }} />
                Erreur lors de la création de membre.
              </Typography>
            )}
          </Popover>
        </Box>
      </Card>
    </div>
  );
};

export default CreateUser;
