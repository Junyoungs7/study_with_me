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
  function logout() {
    localStorage.clear();
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
            <Button color="inherit">
              <Typography
                textAlign="center"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                개인 스터디
              </Typography>
            </Button>
            <IconButton color="inherit" justify="flex-end">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
            </IconButton>
            <IconButton color="inherit" justify="flex-end">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={logout}
              >
                Logout
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
