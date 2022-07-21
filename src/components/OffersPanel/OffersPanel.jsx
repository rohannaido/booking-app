import { useState } from 'react';
import OfferCard from '../OfferCard/OfferCard';
import './OffersPanel.css';

const OffersPanel = () => {
    const arr = [0,1,2,3,4,5,6,7,8,9,10];

    const getGridColumnNumber = (arr) => {
        return Math.ceil(arr.length / 2);
    }
    
    const checkActiveTab = (name, active) => {
        return name === active ? ' active' : '';
    }

    const [activeTab, setActiveTab] = useState("all_offers")

    return (
        <div className='offersPanel'>
            
            <div className='offersPanel_header'>
                <h2 className='offersPanel_heading'>Offers</h2>
                <ul className='offersPanel_tabList'>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("all_offers", activeTab)} 
                    onClick={() => setActiveTab("all_offers")}>
                        All Offers
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("flights", activeTab)} 
                    onClick={() => setActiveTab("flights")}>
                        Flights
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("hotels", activeTab)} 
                    onClick={() => setActiveTab("hotels")}>
                        Hotels
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("holidays", activeTab)} 
                    onClick={() => setActiveTab("holidays")}>
                        Holidays
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("trains", activeTab)} 
                    onClick={() => setActiveTab("trains")}>
                        Trains
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("visa", activeTab)} 
                    onClick={() => setActiveTab("visa")}>
                        Visa
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("cabs", activeTab)} 
                    onClick={() => setActiveTab("cabs")}>
                        Cabs
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("bank_offers", activeTab)} 
                    onClick={() => setActiveTab("bank_offers")}>
                        Bank Offers
                    </li>
                    <li className={'offersPanel_tabListItem' + checkActiveTab("others", activeTab)} 
                    onClick={() => setActiveTab("others")}>
                        Others
                    </li>
                </ul>
            </div>
            
            <div className='offersPanel_cardsDiv' style={{gridTemplateColumns: "repeat(" + getGridColumnNumber(arr) + ",auto)"}}>
                {arr.map((item) => <OfferCard key={item.toString()} />)}
            </div>
        </div>
    )
}

export default OffersPanel;