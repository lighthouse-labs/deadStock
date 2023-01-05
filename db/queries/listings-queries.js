const db = require('../connection');

const getListings = () => {
  return db.query('SELECT * FROM listings;')
    .then((data) => {
      return data.rows;
    });
};

const getListingById = (id) => {
  return db.query('SELECT * FROM listings WHERE id = $1', [id])
    .then((listing) => {
      return listing.rows[0];
    });
};

const getListingsByUser = (user_id) => {
  return db.query('SELECT * FROM listings WHERE user_id = $1', [user_id])
    .then((listings) => {
      return listings.rows;
    });
};

module.exports = { getListings, getListingById, getListingsByUser };

// \i db/schema/schema.sql
// \i db/seeds/seeds.sql
