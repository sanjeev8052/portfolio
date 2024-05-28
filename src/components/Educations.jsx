import React from 'react'
import GraduationCap from '../assets/Images/Cap.png'
import JPDawerImage from '../assets/Images/JPDawer.jpg'
import CBPatel from '../assets/Images/CBPatel.jpg'
import { Box, Grid, Stack, Button } from '@mui/material'


const Educations = () => {


    const data = [

        {
            College: "J.P.Dawer institute of Information Science and Technology",
            Course: "Master Of Science (Information And Communication Technology ) [M.Sc. (I.C.T.)]",
            Year: "Jul 2023 - Present",
            CGPA: "",
            CollegeImageUrl: JPDawerImage
        },
        {
            College: "J.P.Dawer institute of Information Science and Technology",
            Course: "Master Of Science (Information And Communication Technology ) [M.Sc. (I.C.T.)]",
            Year: "Jul 2023 - Present",
            CGPA: "",
            CollegeImageUrl: JPDawerImage
        },
    ]

    return (
        <Box>
            <Grid color={"darkgray"} container >
                <Grid lg={4} container alignItems={"center"}>
                    <Box>
                        <img style={{ display: "block", margin: "auto" }} src={GraduationCap} width={"50%"} alt="" />
                        <h1 align={"center"}>Education</h1>
                    </Box>

                </Grid>
                <Grid container rowGap={2} lg={8} p={2}>
                    <Grid container lg={12}>
                        <Grid lg={4} >
                            <img src={JPDawerImage} width={"100%"} alt="" />
                        </Grid>
                        <Grid p={2} lg={7}>
                            <h3>J.P.Dawer institute of Information Science and Technology</h3>
                            <p>Master Of Science (Information And Communication Technology ) [M.Sc. (I.C.T.)]</p><br />
                            <p>Jul 2023 - Present</p>
                        </Grid>
                    </Grid>
                    <Grid xs={12} lg={12}><p><hr /></p></Grid>
                    <Grid container lg={12}>
                        <Grid lg={4} >
                            <img src={CBPatel} width={"100%"} alt="" />
                        </Grid>
                        <Grid p={2} lg={7}>
                            <h3>C B Patel Computer College</h3>
                            <p>Bachelor Of Computer Application (B.C.A.) </p><br />
                            <p>Jul 2019 - Feb 2023</p>
                            <p>CGPA : 8.17</p>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Educations
