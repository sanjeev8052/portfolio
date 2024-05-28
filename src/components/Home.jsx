import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import instagramIcon from '../assets/Images/instagram-logo.png'
import githubIcon from '../assets/Images/github-logo.png'
import linkedinIcon from '../assets/Images/linkedin-logo.png'
import facebookIcon from '../assets/Images/facebook-logo.png'
import ProfileImage from '../assets/Images/Profile.jpg'
import Educations from './Educations'
import Skills from './Skills'
import ProjectCarousel from './ProjectsCarousel'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Box className="Home" >
                <Grid container mb={10}>
                    <Grid sx={{ fontSize: { xs: "12px", lg: "18px", } }} container direction={"column"} lg={6} p={[3, 20]}>
                        <h1>Hello, gays</h1>
                        <h1> My name is <i>Sanjeev Gaund</i></h1>

                        <h1>I am a <i>FullStack Developer</i> </h1>
                        <Stack columnGap={2} mt={3} direction={"row"}>
                            <a target='_blank' title='Link' href='http://linkedin.com/in/thesanjeev'>
                                <img width={40} height={40} src={linkedinIcon} alt="" />
                            </a>

                            <a target='_blank' href='http://github.com/sanjeev8052'>
                                <img style={{ backgroundColor: "white", borderRadius: "50%", padding: "2px" }} width={40} height={40} src={githubIcon} alt="" />
                            </a>
                            <a target='_blank' href='https://www.instagram.com/san.1eev/'>
                                <img width={40} height={40} src={instagramIcon} alt="" />
                            </a>
                            <a target='_blank' href='http://linkedin.com/in/thesanjeev'>
                                <img width={40} height={40} src={facebookIcon} alt="" />
                            </a>


                        </Stack>
                    </Grid>
                    <Grid container justifyContent={"center"} alignItems={"center"} lg={6} p={5}>
                        <Box bgcolor={"tomato"} p={"2px"}>
                            <img src={ProfileImage} width={"300px"} alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Educations />
                <p style={{ margin: "3rem" }} />
                <Skills />
                <p style={{ margin: "2rem" }} />
                <ProjectCarousel />
                <p style={{ margin: "2rem" }} />
                <Footer />
            </Box>

        </>

    )
}

export default Home
