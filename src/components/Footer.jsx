// import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

const Footer = () => {
    return (
        <div>
            <Box
                component="footer"
                sx={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    color: "darkgray"

                }}
            >
                <Container sx={{ color: "white" }} maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body2" >
                                I am a fullStack Developer
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body2" color="">
                                Althan Surat,Gujarat
                            </Typography>
                            <Typography variant="body2" color="">
                                Email: sanjeevgaund2002@gmail.com
                            </Typography>
                            
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" gutterBottom>
                                Follow Us
                            </Typography>
                            <Link href="https://www.instagram.com/san.1eev" color="inherit">
                                <Facebook />
                            </Link>
                            <Link
                                href="https://www.instagram.com/san.1eev"
                                color="inherit"
                                sx={{ pl: 1, pr: 1 }}
                            >
                                <Instagram />
                            </Link>
                            <Link href="https://www.linkedin.com/in/thesanjeev/" color="inherit">
                                <LinkedIn />
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Typography variant="body2" color="" align="center">
                            {"Copyright © "}
                            <Link color="inherit" href="https://your-website.com/">
                                Sanjeev's Portfolio
                            </Link>{" "}
                            {new Date().getFullYear()}
                            {"."}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default Footer;
