import '../styles/welcomeBanner.scss'
import { Title, Paragraph } from "./styledComponents"
import { Button } from '@mui/joy'

export default function WelcomeBanner() {
    return (
        <div className='welcome-banner'>
            <img className='image' src='tarik.jpg' alt='Tarik' />
            <div className='information'>
                <Title>About Me</Title>
                <Paragraph>
                    Software Engineering Master's student at the International Burch University. Self-taught in various software development technologies and concepts for various platforms (web/ mobile/ desktop-application development). Aspiring Software Engineer with experience in designing, developing and delivering software solutions.
                </Paragraph>
                <Paragraph>
                    I am passionate about learning new technologies and concepts in software development. I am always looking for new opportunities to grow and improve my skills as a software developer.
                </Paragraph>
                <Paragraph>
                    Discover more about my projects and experience by exploring my portfolio.
                </Paragraph>
                <Button style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '1px solid white',
                    marginTop: '1rem'
                }} onClick={() => {
                    
                }}>Contact Me</Button>
            </div>
        </div>
    )
}