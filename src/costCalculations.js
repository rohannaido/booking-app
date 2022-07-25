const calculateTotalRent = (searchDetails, hotelData) => {
    const noOfDays = Math.floor((new Date(searchDetails.checkOut) - new Date(searchDetails.checkIn))/86400000);
    const rooms = searchDetails.rooms;
    return hotelData.price * noOfDays * rooms;
}

export {calculateTotalRent};