import '../styles/footer.scss';
import { Title } from './styledComponents';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '@mui/joy/Input';
import { Textarea } from '@mui/joy';
import Button from '@mui/joy/Button';

export default function Footer() {
    return (
        <footer className='footer-section'>
            <Title>Contact Me</Title>
            <div className='contact-section'>
                <div className='contact-info'>
                    <p className='contact-item'><EmailIcon/>Email: <a href='mailto:tarikmaljanovic123@gmail.com'>tarikmaljanovic123@gmail.com</a></p>
                    <p className='contact-item'><LinkedInIcon/>LinkedIn: <a href='https://www.linkedin.com/in/tarik-maljanovic/'>tarik-maljanovic</a></p>
                    <p className='contact-item'><GitHubIcon/>GitHub: <a href='https://github.com/tarikmaljanovic'>tarikmaljanovic</a></p>
                </div>
                <div className='contact-form'>
                    <div className='user-info'>
                        <Input type='text' placeholder="Full Name" variant="outlined" />
                        <Input type='email' placeholder="Email" variant="outlined" />
                    </div>
                    <div className='message'>
                        <Textarea placeholder="Enter your message here..." variant="outlined" minRows={3} />
                    </div>
                    <Button style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '1px solid white',
                            marginLeft: '20px'
                        }} onClick={() => {
                            
                        }}>Contact Me</Button>
                </div>
            </div>
        </footer>
    )
}