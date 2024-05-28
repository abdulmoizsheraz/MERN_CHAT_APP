import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styles/StylesComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validator";
const Login = () => {
  // state variables
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation();
  const bio = useInputValidation();
  const username = useInputValidation("",usernameValidator);
  const password = useStrongPassword();
  const avatar=useFileHandler("single",4);

  // functions
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const handleLogin = (e) => {
e.preventDefault();
  }
  const handleRegister = (e) => {
    e.preventDefault();

  }

  return (
<div style={{
   backgroundColor: "#FFFFFF",
   backgroundImage:" linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)"
   
}}>
<Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography variant="caption" color="error">
                  {username.error}
                </Typography>
              
              )}
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {
                password.error && (
                  <Typography variant="caption" color="error">
                    {password.error}
                  </Typography>
                )
              }
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography sx={{ mt: 2 }}>OR</Typography>
              <Button
                type="button"
                onClick={toggleLogin}
                color="secondary"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Sign up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form onSubmit={handleRegister}>
              <Stack position={"relative"} width={"7rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "7rem",
                    height: "7rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
    {avatar.error && (
                <Typography variant="caption" color="error">
                  {avatar.error}
                </Typography>
              
              )}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon fontSize="12px" />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
                 {username.error && (
                <Typography variant="caption" color="error">
                  {username.error}
                </Typography>
              
              )}
              <TextField
                required
                fullWidth
                type="password"
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
                {
                password.error && (
                  <Typography variant="caption" color="error">
                    {password.error}
                  </Typography>
                )
              }
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Register
              </Button>
              <Typography sx={{ mt: 2 }}>OR</Typography>
              <Button
                type="button"
                onClick={toggleLogin}
                color="secondary"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
</div>
  );
};

export default Login;
