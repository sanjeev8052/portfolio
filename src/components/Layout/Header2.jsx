import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Stack } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  {
    to: "/#Home",
    name: "Home",
  },
  {
    to: "/h2/project/all",
    name: "Projects",
  },
  {
    to: "h2/About",
    name: "About Us",
  },
];

function Header2(props) {
  const { isDarkMode, changeTheme } = React.useContext(ThemeContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "primary.main", height: "100vh" }}
    >
      <Typography variant="h6" color={"secondary.main"} sx={{ my: 2 }}>
        {"<Sanjeev/>"}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                style={{ color: isDarkMode ? "lightgray" : "black" }}
                className="dAppBarItem"
                to={item.to}
              >
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="AppBar"
        sx={{ bgcolor: "primary.main" }}
        component="nav"
      >
        <Toolbar>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={["100%", 0]}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={changeTheme}
            >
              {isDarkMode ? <DarkMode /> :<LightMode />}
            </IconButton>
          </Stack>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {"< Sanjeev / >"}
          </Typography>
          <Box
            color={"secondary.main"}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item, index) => (
              <Link
                className="appBarItem"
                to={item.to}
                key={item}
                style={{
                  color: isDarkMode ? "white" : "black",
                  fontWeight: "500",
                  ":hover": { color: isDarkMode ? "white" : "black" },
                }}
              >
                {item.name}
              </Link>
            ))}
            <IconButton onClick={changeTheme}>
            {isDarkMode ?  <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box width={"100%"} component="main" sx={{ p: 0 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Header2.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header2;
