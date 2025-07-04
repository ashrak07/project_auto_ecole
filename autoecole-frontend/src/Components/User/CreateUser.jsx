import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CreateUser = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        padding: 3,
        width: "60ch",
      }}
    >
      <Box>
        <Typography
          fontWeight="bold"
          fontFamily="Montserrat"
          sx={{ marginBlock: 2 }}
        >
          CREER MEMBRE
        </Typography>
      </Box>
      <Box sx={{}} className="">
        <Box
          className=""
          sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
        >
          <div className="my-2 " style={{ width: "50%" }}>
            <Typography fontFamily="Poppins" fontSize="small  ">
              Nom
            </Typography>
            <TextField id="outlined-start-adornment" fullWidth />
          </div>
          <div className="my-2 " style={{ width: "50%" }}>
            <Typography fontFamily="Poppins" fontSize="small  ">
              Prénom
            </Typography>
            <TextField id="outlined-start-adornment" fullWidth />
          </div>
        </Box>
        <Box
          className=""
          sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
        >
          <div className="" style={{ width: "50%" }}>
            <Typography fontFamily="Poppins" fontSize="small  ">
              Email
            </Typography>
            <TextField id="outlined-start-adornment" fullWidth />
          </div>
          <div className="" style={{ width: "50%" }}>
            {/* <FormControl variant="outlined"> */}
            <Typography fontFamily="Poppins" fontSize="small  ">
              Mot de passe
            </Typography>
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
            />
            {/* </FormControl> */}
          </div>
        </Box>
        <Box>
          <div className="my-2">
            <Typography fontFamily="Poppins" fontSize="small  ">
              Adresse
            </Typography>
            <TextField id="outlined-start-adornment" fullWidth />
          </div>
        </Box>

        <Box>
          <div className="my-2">
            <Typography fontFamily="Poppins" fontSize="small  ">
              Date de naissance
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer fullWidth components={["DatePicker"]} sx={{}}>
                <DatePicker sx={{ width: "100%" }} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </Box>
        <Box sx={{ display: "flex", marginBlock: 1 }}>
          <FormControlLabel
            fontFamily="Poppins"
            control={<Checkbox />}
            label="Etudiant"
          />
          <FormControlLabel control={<Checkbox />} label="Enseignent" />
        </Box>
      </Box>
      <Box sx={{ marginBlock: 3 }}>
        <Button fullWidth variant="contained">
          Créer membre
        </Button>
      </Box>
    </Card>
  );
};

export default CreateUser;
