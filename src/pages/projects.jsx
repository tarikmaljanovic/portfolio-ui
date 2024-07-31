import '../styles/root.scss'
import '../styles/projectsGallery.scss'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Subtitle, Title } from '../components/styledComponents'
import { Button, CircularProgress } from '@mui/joy'
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { getProjects } from '../api/projectAPI'

export default function Projects() {
    const navigate = useNavigate()

    const {isPending, data, error} = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects
    })

    if(isPending) {
        return (
            <div className='root-container'>
                <Navbar />
                <div className='project-container'>
                    <Title>Loading…</Title>
                </div>
                <Footer />
            </div>
        )
    }

    if(error) {
        return (
            <div className='root-container'>
                <Navbar />
                <div className="notification is-danger">
                    There was an error: {error.message}
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="root-container">
            <Navbar />
            <div className='projects-container'>
                {
                    isPending ? (
                        <Button color='neutral' variant='outlined' startDecorator={<CircularProgress variant="solid" color='neutral' />}><span style={{color: 'white'}}>Loading…</span></Button>
                    ) : error ? (
                        <div className="notification is-danger">
                            There was an error: {error.message}
                        </div>
                    ) : (
                        data?.map(project => (
                            <motion.div key={project._id} whileHover={{scale: 1.06}} transition={{type: "spring", stiffness: 400, damping: 10}} className='project-card' onClick={() => navigate(`/projects/${project._id}`)}>
                                <img src={project.images[0]} alt={project.title} />
                                <Subtitle $link>{project.title}</Subtitle>
                            </motion.div>
                        ))
                    )
                }
            </div>
            <Footer />
        </div>
    )
}