import '../styles/welcomeBanner.scss'
import { Title, Paragraph } from "./styledComponents"
import { Button } from '@mui/joy'

export default function WelcomeBanner() {
    return (
        <div className='welcome-banner'>
            <img className='image' src='tarik.jpg' alt='Tarik' />
            <div className='information'>
                <Title>About Me</Title>
                <Paragraph style={{textShadow: '2px 2px 12px rgba(0,0,0,1)'}}>
                    Software Engineering Master's student at the International Burch University. Self-taught in various software development technologies and concepts for various platforms (web/ mobile/ desktop-application development). Aspiring Software Engineer with experience in designing, developing and delivering software solutions.
                </Paragraph>
                <Paragraph style={{textShadow: '2px 2px 12px rgba(0,0,0,1)'}}>
                    I am passionate about learning new technologies and concepts in software development. I am always looking for new opportunities to grow and improve my skills as a software developer.
                </Paragraph>
                <Paragraph style={{textShadow: '2px 2px 12px rgba(0,0,0,1)'}}>
                    Discover more about my projects and experience by exploring my portfolio.
                </Paragraph>
                <Button style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    marginTop: '1rem'
                }} onClick={() => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }}>Contact Me</Button>
            </div>
        </div>
    )
}