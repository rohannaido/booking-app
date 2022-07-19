import NavBar from "../components/NavBar/NavBar";
import HomeSearchBar from "../components/HomeSearchBar/HomeSearchBar";
import OffersPanel from "../components/OffersPanel/OffersPanel";
import './Home.css'
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {

    return (
    <div className="home">
        <NavBar />
        <HomeSearchBar />
        <OffersPanel />
        <Newsletter />
        <Footer />
    </div>
    );
}

export default Home;