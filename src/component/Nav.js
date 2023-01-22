import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function Nav() {
  const userName = localStorage.getItem("userName");
  function logout() {
    localStorage.clear();
    window.location.assign("/");
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Star sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SWU
            </Typography>

            {!userName ? (
              <IconButton color="inherit" justify="flex-end">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </IconButton>
            ) : (
              <>
                <Button color="inherit">
                  <Typography
                    textAlign="center"
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    <Link
                      to="/private"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      개인 스터디
                    </Link>
                  </Typography>
                </Button>
                <Typography
                  textAlign="right"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {userName}님
                </Typography>
                <IconButton color="inherit" justify="flex-end" onClick={logout}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Logout
                  </Link>
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
