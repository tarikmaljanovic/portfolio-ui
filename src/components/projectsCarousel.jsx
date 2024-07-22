import '../styles/projectsCarousel.scss'
import { Title, Subtitle, Paragraph } from "./styledComponents"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [projects, setProjects] = useState([
        {
            title: "CodeUni",
            description: "CodeUni is a platform for learning programming languages. It is a web application that provides interactive lessons and exercises for learning programming languages. The platform is designed to be user-friendly and easy to use, with a focus on providing a fun and engaging learning experience for users.",
            image: "sc1.png",
        },
        {
            title: "CodeUni2",
            description: "CodeUni is a platform for learning programming languages. It is a web application that provides interactive lessons and exercises for learning programming languages. The platform is designed to be user-friendly and easy to use, with a focus on providing a fun and engaging learning experience for users.",
            image: "sc2.png",
        }
    ])
    
    return(
        <div className='projects-carousel'>
            <Title>My Projects</Title>
            <div className='carousel'>
            <AnimatePresence initial={false} custom={currentIndex}>
                <ArrowBackIosIcon onClick={() => {
                        if (currentIndex === 0) {
                            setCurrentIndex(projects.length - 1)
                        } else {
                            setCurrentIndex(currentIndex - 1)
                        }
                    }}
                    style={{
                        color: 'white',
                        width: '30px',
                        height: '30px',
                    }}
                    className='arrow'
                    key="arrow-back"
                >Previous</ArrowBackIosIcon>
                <div className='carousel-section'>
                    <motion.img
                        key={currentIndex}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}

                        className='image-container'
                        src={projects[currentIndex].image}
                    />
                    <motion.div
                        key={currentIndex+1}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, type: 'spring', delay: 0.2 }}
                        className='information'
                    >
                        <Subtitle>{projects[currentIndex].title} <CallMadeIcon/></Subtitle>
                        <Paragraph>{projects[currentIndex].description}</Paragraph>
                    </motion.div>
                </div>
                    <ArrowForwardIosIcon onClick={() => {
                            if (currentIndex === projects.length - 1) {
                                setCurrentIndex(0)
                            } else {
                                setCurrentIndex(currentIndex + 1)
                            }
                        }}
                        style={{
                            color: 'white',
                            width: '30px',
                            height: '30px',
                        }}
                        className='arrow'
                        key="arrow-forward"
                    >Next</ArrowForwardIosIcon>
                </AnimatePresence>
            </div>
        </div>
    )
}