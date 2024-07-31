import '../styles/root.scss'
import '../styles/projectPage.scss'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Title, Subtitle, Paragraph } from '../components/styledComponents'
import { useQuery } from '@tanstack/react-query';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react'
import { getProject } from '../api/projectAPI'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { Textarea } from '@mui/joy'



export default function Project() {
    const [currentImage, setCurrentImage] = useState(0)
    const [open, setOpen] = useState({
        edit: true,
        delete: false
    })
    const actions = [
        { icon: <EditIcon />, name: 'Edit' },
        { icon: <DeleteIcon />, name: 'Delete' },
    ]
    let colors = ['#59ecc9', '#f7b801', '#f18701', '#f35b04', '#f02e65', '#40407a', '#706fd3']

    const {isPending, data, error} = useQuery({
        queryKey: ['project', window.location.pathname.split('/')[2]],
        queryFn: async () => {
            return await getProject(window.location.pathname.split('/')[2])
        }
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
                        src={data?.images?.[currentImage]}
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
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, display: 'flex', alignSelf: 'flex-end' }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                    ))}
                </SpeedDial>
            </Box>
            <Modal open={open.edit} onClose={() => setOpen({...open, edit: false})}>
                <ModalDialog sx={{overflow:'scroll'}}>
                    <DialogTitle>Create new project</DialogTitle>
                    <DialogContent>Fill in the information of the project.</DialogContent>
                    <form>
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input autoFocus />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Textarea />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Detailed Description</FormLabel>
                                <Textarea />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Technologies</FormLabel>
                                <Textarea />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input type='file'/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Key Features</FormLabel>
                                <Textarea />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Github Links</FormLabel>
                                <Textarea />
                            </FormControl>
                            <Button>Submit</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </div>
    )
}