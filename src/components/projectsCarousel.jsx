import '../styles/projectsCarousel.scss'
import { Title, Subtitle, Paragraph } from "./styledComponents"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom'

export default function ProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)
    const queryClient = useQueryClient()

    const {isPending, data, error} = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/projects')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((currentIndex) => {
                if (currentIndex === data?.length - 1) {
                    return 0
                } else {
                    return currentIndex + 1
                }
            })
        }, 8000)
        return () => clearInterval(intervalRef.current)
    }, [intervalRef, data])
    
    return(
        <div className='projects-carousel'>
            <Title>My Projects</Title>
            <div className='carousel'>
                <ArrowBackIosIcon onClick={() => {
                        if (currentIndex === 0) {
                            setCurrentIndex(data.length - 1)
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
                    <AnimatePresence initial={false} mode='wait'>
                        {
                            isPending ? (
                                null
                            ) : error ? ( 
                                <div style={{width: '100%'}} className="notification is-danger">
                                    <button className="delete"></button>
                                    <strong>Error</strong>
                                </div>
                             ) : ( 
                                <motion.img
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, type: 'spring' }}
        
                                    className='image-container'
                                    src={data[currentIndex]?.images?.[0]}
                                />
                            )
                        }
                    </AnimatePresence>
                    <AnimatePresence initial={false} mode='wait'>
                        {
                            isPending ? (
                                <div style={{width: '100%'}} className="skeleton-lines">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            ) : error ? (
                                null
                            ) : ( 
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5, type: 'spring'}}
                                    className='information'
                                >
                                    <Link to={`/projects/${data[currentIndex]?._id}`}>
                                        <Subtitle $link>{data[currentIndex]?.title} <CallMadeIcon/></Subtitle>
                                    </Link>
                                    <Paragraph>{data[currentIndex]?.description}</Paragraph>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                    <ArrowForwardIosIcon onClick={() => {
                            if (currentIndex === data.length - 1) {
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
            </div>
        </div>
    )
}