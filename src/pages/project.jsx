import '../styles/root.scss'
import '../styles/projectPage.scss'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Title, Subtitle, Paragraph } from '../components/styledComponents'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react'


export default function Project() {
    const queryClient = useQueryClient()
    const [currentImage, setCurrentImage] = useState(0)

    const {isPending, data, error} = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/${(window.location.pathname).split('/').pop()}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
        retry: 5,
        retryDelay: 2000,
        cacheTime: 1000 * 60 * 60,
    })

    let colors = ['#59ecc9', '#f7b801', '#f18701', '#f35b04', '#f02e65', '#40407a', '#706fd3']

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
        <div className='root-container'>
            <Navbar />
            <div className='project-container'>
                <Title>{data?.title}</Title>
                <div className='image-carousel'>
                    <ArrowBackIosNewIcon
                        onClick={() => {
                            if(currentImage === 0) {
                                setCurrentImage(data?.images.length - 1)
                            } else {
                                setCurrentImage(currentImage - 1)
                            }
                        }}
                    />
                    <img
                        src={data?.images[currentImage]}
                        alt={data?.title}
                    />
                    <ArrowForwardIosIcon
                        onClick={() => {
                            if(currentImage === data?.images.length - 1) {
                                setCurrentImage(0)
                            } else {
                                setCurrentImage(currentImage + 1)
                            }
                        }}
                    />
                </div>
                <div className='project-content'>
                    <Paragraph>
                        {data?.description}
                    </Paragraph>
                    <Paragraph>
                        {data?.detailed_description}
                    </Paragraph>
                    <Subtitle>Technologies Used:</Subtitle>
                    <div className='tech-stack'>
                        {
                            data?.technologies?.map(tech => {
                                let random_color = colors[Math.floor(Math.random() * colors.length)];
                                return <div key={tech} className='tech-stack-item' style={{backgroundColor: random_color}}>{tech}</div>
                            })
                        }
                    </div>
                    {
                        data?.key_features?.length > 0 ? (
                            <>
                                <Subtitle>Key Features:</Subtitle>
                                <ul className='key-features-list'>
                                    {
                                        data?.key_features?.map(feature => (
                                            <div key={feature} className='key-feature'>
                                                <ArrowRightIcon className='key-feature-icon' />
                                                <li key={feature}>{feature}</li>
                                            </div>
                                        ))
                                    }
                                </ul>
                            </>
                        ) : null
                    }
                    <Subtitle>Links:</Subtitle>
                    {
                        data?.github_link?.map(link => (
                                <div key={link} className='link'>
                                <GitHubIcon className='link-svg'/>
                                <a href={link} target='_blank' rel='noreferrer'>{link}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}