import '../styles/root.scss'
import '../styles/projectsGallery.scss'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import { Subtitle, Paragraph } from '../components/styledComponents'
import Grid from '@mui/joy/Grid'
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function Projects() {
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

    return (
        <div className="root-container">
            <Navbar />
            <Grid container spacing={3} className="projects-container" sx={{padding: '20px'}}>
                {
                    isPending ? (
                        <Grid item xs={12} sm={12} md={12}>
                            <Card className='project-card'>
                                <CardContent>
                                    <Subtitle>Loading...</Subtitle>
                                    <Paragraph>Please wait while we load the projects.</Paragraph>
                                </CardContent>
                            </Card>
                        </Grid>
                    ) : error ? (
                        <Grid item xs={12} sm={12} md={12}>
                            <Card className='project-card'>
                                <CardContent>
                                    <Subtitle>Error</Subtitle>
                                    <Paragraph>There was an error loading the projects.</Paragraph>
                                </CardContent>
                            </Card>
                        </Grid>
                    ) : (
                        data.map((project) => {
                            return (
                                <Grid item xs={12} sm={12} md={4}>
                                    <Card className='project-card'>
                                        <CardContent>
                                            <Subtitle $link>{project.title}</Subtitle>
                                            <Paragraph>{project.description}</Paragraph>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    )
                }
            </Grid>
            <Footer />
        </div>
    )
}