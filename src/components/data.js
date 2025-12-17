import reactImg from '../assets/Images/skills/react.png'
import mongodbImg from '../assets/Images/skills/mongodb.png'
import expressImg from '../assets/Images/skills/express.png'
import nodejsImg from '../assets/Images/skills/nodejs.png'
import javaImg from '../assets/Images/skills/java.png'
import sqlImg from '../assets/Images/skills/mysql.png'
import gitImg from '../assets/Images/skills/git.png'
import jQueryImg from '../assets/Images/skills/jquery.png'


//Projects Images 

import ChatAppImg from '../assets/Images/Projects/ChatApp.png'
import QuizAppImg from '../assets/Images/Projects/QuizApp.png'
import TodoAppImg from '../assets/Images/Projects/TodoApp.png'

export const skillsData = [
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


export const projectData = [

    {

        img: QuizAppImg,
        name: "JavaScript Quiz Web App",
        description: "The JavaScript Quiz Web App is a dynamic and engaging platform that allows users to test their knowledge of JavaScript concepts, syntax, and best practices. Built entirely using JavaScript along with HTML and CSS for the frontend interface, this application provides an interactive quiz experience for both beginners and experienced developers.",
        keyPoints: [
            "Multiple Choice Questions",
            "Select number of question",
            "Responsive Design",
            "Score Page",
        ],
        technologies: [
            "Html",
            "JavaScript",
            "CSS",
        ],
        demoLink: "https://sanjeev-quizwebapp.netlify.app/",

    },
    {

        img: TodoAppImg,
        name: "React Todo List App ",
        description: "The React Todo List App is a web-based application built using React with TypeScript for enhanced type safety and CSS for styling. It allows users to manage their tasks efficiently by providing functionalities like adding, updating, deleting, and displaying tasks.",
        keyPoints: [
            "Add Task",
            "View Task",
            "Update Task",
            "Delete Task",
            "Device friendly",

        ],
        technologies: [
            "React",
            "TypeScript",
            "CSS",
            "Material UI",
        ],
        demoLink: "https://sanjeev-todoapp.netlify.app/",

    },
    {
        img: ChatAppImg,
        name: "Real-time Chat Web App",
        description: "This real-time chat web application is designed to facilitate seamless and instant communication between users. Built using modern web technologies such as HTML, CSS, JavaScript, and Socket.io, the app provides a responsive and interactive user experience",
        keyPoints: [
            "Multiple user can join at time",
        ],
        technologies: [
            "Html",
            "Socket.io",
            "JavaScrip",
            "CSS",
        ],
        demoLink: "https://sanjuschatapp.onrender.com/"
    },
]