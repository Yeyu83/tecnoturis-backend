const Amadeus = require('amadeus');
require('dotenv').config()

const HotelController = {
  getHotels: async (req, res) => {
    const amadeus = new Amadeus({
      clientId: process.env.AMADEUS_CLIENT_ID,
      clientSecret: process.env.AMADEUS_CLIENT_SECRET
    })
    const amadeusRes = await amadeus.shopping.hotelOffers.get({ cityCode: 'PAR' })
    try {
      res.status(200).json({ hotels: amadeusRes.result.data });
    } catch(error) {
      res.status(404).json({ error: null });
    }
  },
}

module.exports = HotelController;