import NavBar from "../../components/NavBar/NavBar";
import HomeSearchBar from "../../components/HomeSearchBar/HomeSearchBar";
import OffersPanel from "../../components/OffersPanel/OffersPanel";
import './Home.css'
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import { useState } from 'react';
import LoginPanel from "../../components/LoginPanel/LoginPanel";

const Home = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
    <div className="home">
        <NavBar setShowLogin={setShowLogin} />
        {showLogin && <LoginPanel setShowLogin={setShowLogin} />}
        <HomeSearchBar setShowLogin={setShowLogin} />
        <OffersPanel />
        <Newsletter />
        <Footer />
    </div>
    );
}

export default Home;