import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid } from "@mui/material";
import { skillsData } from "../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SkillsDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="text"
        color="secondary"
        className="btnShowAll"
        onClick={handleClickOpen}
      >
        View All
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", bgcolor: "primary.main" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          p={2}
          container
          justifyContent={"space-between"}
          columnGap={2}
          rowGap={2}
          sx={{
            bgcolor: "primary.main",
            color: "lightgray",
            minHeight: "100vh",
            overflowY: "scroll",
          }}
        >
          {skillsData.map((data, index) => (
            <Grid key={index} item xs={5.5} lg={1.5}>
              <Box
                data-aos="slide-down"
                key={data.url}
                my={0.5}
                sx={{ border: "1px solid gray", backgroundColor: "rgba"  }}
                width={"100%"}
                
              >
                <img title={data.title} height={"100%"} width={"100%"} src={data.url} alt="" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default SkillsDialog;
