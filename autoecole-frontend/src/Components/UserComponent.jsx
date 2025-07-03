import { Card, Box, Typography, Button } from "@mui/material";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const UserComponent = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Card elevation={0}>
        <Box>
          <Typography>CREER MEMBRE</Typography>
        </Box>
        <Box sx={{}}>
          <Box>
            <div>
              <TextField
                fullWidth
                label="Nom"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
              />
            </div>
            <div>
              <TextField
                label="Prénom"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
              />
            </div>
          </Box>
          <Box>
            <div>
              <TextField
                label="E-mail"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
              />
            </div>
          </Box>
          <Box>
            <div>
              <TextField
                label="Adresse"
                id="outlined-start-adornment"
                sx={{ m: 1, width: "50ch" }}
              />
            </div>
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
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
                label="Password"
              />
            </FormControl>
          </Box>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]} sx={{ m: 1 }}>
                <DatePicker label="Date de naissance" sx={{ width: "50ch" }} />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box sx={{ m: 1, display: "flex" }}>
            <FormControlLabel control={<Checkbox />} label="Etudiant" />
            <FormControlLabel control={<Checkbox />} label="Enseignent" />
          </Box>
        </Box>
        <Box>
          <Button variant="contained">Créer membre</Button>
        </Box>
      </Card>
    </div>
  );
};

export default UserComponent;
