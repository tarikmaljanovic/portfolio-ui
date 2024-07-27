import '../styles/root.scss'
import Navbar from '../components/navbar';
import WelcomeBanner from '../components/welcomeBanner';
import ProjectsCarousel from '../components/projectsCarousel';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className='root-container'>
            <Navbar />
            <WelcomeBanner />
            <ProjectsCarousel />
            <Footer />
        </div>
    )
}