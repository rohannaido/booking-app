import NavBar from "../components/NavBar/NavBar";
import HomeSearchBar from "../components/HomeSearchBar/HomeSearchBar";
import OffersPanel from "../components/OffersPanel/OffersPanel";
import './Home.css'

const Home = () => {

    return (
    <div className="home">
        {/* <NavBar /> */}
        <HomeSearchBar />
        <OffersPanel />
    </div>
    );
}

export default Home;