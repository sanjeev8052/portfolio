import { Box, Grid } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import reactImg from '../assets/Images/skills/react.png'
import mongodbImg from '../assets/Images/skills/mongodb.png'
import expressImg from '../assets/Images/skills/express.png'
import nodejsImg from '../assets/Images/skills/nodejs.png'
import javaImg from '../assets/Images/skills/java.png'
import sqlImg from '../assets/Images/skills/mysql.png'
import gitImg from '../assets/Images/skills/git.png'
import jQueryImg from '../assets/Images/skills/jquery.png'
import SkillIcon from '../assets/Images/SkillsIcon.png'
import { Link } from 'react-router-dom';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 6,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 5,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4,
        },
    };

    const skillsData = [
        {
            url: mongodbImg,
            title: "MongoDB"
        },
        {
            url: expressImg,
            title: "Express Js"
        },
        {
            url: reactImg,
            title: "React Js"
        },
        {
            url: nodejsImg,
            title: "Node Js"
        },
        {
            url: javaImg,
            title: "Java"
        },
        {
            url: sqlImg,
            title: "MySql"
        },
        {
            url: gitImg,
            title: "Git"
        },
        {
            url: jQueryImg,
            title: "Jquery"
        }
    ]
    return (
        <Box >
            <Grid p={2} direction={["column-reverse", "row"]} container >

                <Grid py={[1, 9]} px={[1, 2]} sx={{ width: "100%", backgroundColor: "rgba(0,0,0,0.3)" }} lg={8}>
                    <Link to={"/skills"} className='btnShowAll'>Show All</Link>
                    <Carousel showDots={false} responsive={responsive}>
                        {
                            skillsData.map(data => (
                                <Box my={0.5} sx={{ border: "1px solid gray", backgroundColor: "#202123" }} height={["80px", "150px"]} width={["80px", "150px"]}>
                                    <img title={data.title} width={"100%"} src={data.url} alt="" />
                                </Box>
                            ))
                        }
                    </Carousel>
                </Grid>
                <Grid justifyContent={"center"} container lg={4}>
                    <Box width={["70%", "100%"]}>
                        <img style={{ width: "50%", margin: "auto", display: "block   " }} src={SkillIcon} alt="" />
                        <h1 style={{ color: "white", textAlign: "center" }}>Skills</h1>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Skills
