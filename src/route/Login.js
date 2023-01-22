import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Study With Us</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const url = "http://localhost:8080/auth/login";

export default function Login() {
  // const [response, setResponse] = React.useState({
  //   httpStatus: "",
  //   tokenDTO: {
  //     grantType: "",
  //     accessToken: "",
  //     refreshToken: "",
  //     accessTokenExpiresIn: "",
  //   },
  // });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const requestData = {
  //     userName: data.get("id"),
  //     password: data.get("password"),
  //   };
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(requestData),
  //   })
  //     // .then((res) => res.json())
  //     .then((res) => {
  //       // setResponse(res);
  //       console.log(res.data);
  //     });
  // };

  async function postUser(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios
        .post(url, {
          userName: data.get("id"),
          password: data.get("password"),
        })
        .then((response) => {
          const accessToken = response.data.tokenDTO.accessToken;
          const accessTokenExpiresIn =
            response.data.tokenDTO.accessTokenExpiresIn;
          const grantType = response.data.tokenDTO.grantType;
          const refreshToken = response.data.tokenDTO.refreshToken;
          const userName = response.data.tokenDTO.userName;
          if (response.data.status === "OK") {
            localStorage.setItem("userName", userName);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("accessTokenExpiresIn", accessTokenExpiresIn);
            localStorage.setItem("grantType", grantType);
            localStorage.setItem("refreshToken", refreshToken);
            window.location.assign("/");
          } else {
            alert("로그인 실패");
            window.location.assign("/login");
          }
        });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={postUser} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
