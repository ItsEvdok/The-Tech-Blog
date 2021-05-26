const { User } = require('../models');

const userData = [
    {
        username: 'ItsEvdok',
        password: 'Tinklywinkly'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;