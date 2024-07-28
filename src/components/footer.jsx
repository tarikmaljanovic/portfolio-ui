import '../styles/footer.scss';
import { Title } from './styledComponents';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/joy/Button';

export default function Footer() {
    return (
        <footer className='footer-section'>
            <Title>Contact Me</Title>
            <div className='contact-section'>
                <div className='contact-info'>
                    <p className='contact-item'><EmailIcon/><span className='item-text'>Email: </span><a href='mailto:tarikmaljanovic123@gmail.com'>tarikmaljanovic123@gmail.com</a></p>
                    <p className='contact-item'><LinkedInIcon/><span className='item-text'>LinkedIn: </span><a href='https://www.linkedin.com/in/tarik-maljanovic/'>tarik-maljanovic</a></p>
                    <p className='contact-item'><GitHubIcon/><span className='item-text'>GitHub: </span><a href='https://github.com/tarikmaljanovic'>tarikmaljanovic</a></p>
                </div>
                <div className='contact-form'>
                    <div className='user-info'>
                        <div style={{marginRight: '10px'}} className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your Full Name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="example@email.com"/>
                            </div>
                        </div>
                    </div>
                    <div className='message'>
                    <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                            <textarea className="textarea" placeholder="Your message..."></textarea>
                            </div>
                        </div>
                    </div>
                    <Button style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: '1px solid white',

                        }} onClick={() => {
                            
                        }}>Send</Button>
                </div>
            </div>
        </footer>
    )
}