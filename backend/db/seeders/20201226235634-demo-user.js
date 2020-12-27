'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { email: "demo@user.com", username: "Demo User", hashedPassword: bcrypt.hashSync("password")},
      { email: "el@brakebills.com", username: "Eliot Waugh", hashedPassword: bcrypt.hashSync("MagicComesFromPain")},
      { email: "margo.high.king@fillory.com", username: "Margo Hanson", hashedPassword: bcrypt.hashSync("HighKingOfFillory")}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: {[Op.in]: ["Demo User", "Eliot Waugh", "Margo Hanson"]}
    }, {});
  }
};
