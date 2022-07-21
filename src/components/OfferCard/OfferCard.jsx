import './OfferCard.css'

const OfferCard = ({keyItem}) => {
    return(
        <div className='offerCard' >
            <div className='offerCard_row1'>
                <div className='offerCard_image'>
                    <img src="https://promos.makemytrip.com/notification/xhdpi//Desktop_NearbyGetaway_12July.jpg" alt="Desktop_NearbyGetaway_12" />
                </div>
                <div className='offerCard_content'>
                    <span className='subHeading'>Dom Hotels</span>
                    <h4 className='cardHeading'>LIVE NOW: Wed & Thurs DEALS</h4>
                    <div className='offerCard_contentDivider'></div>
                    <span className='cardDescription'>for your weekend trips! Grab up to 30% OFF* on stays, cabs & more + many #AtrangiBahanas.</span>
                </div>
            </div>
            <div className='offerCard_row2'>
                <span className='tncText'>T&C's Apply</span>
                <span className='linkText'>BOOK NOW</span>
            </div>
        </div>
    )
}

export default OfferCard;