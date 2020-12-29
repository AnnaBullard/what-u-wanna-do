'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {bookingId:1, userId:1, message: "Was fun, would recommend!"},
      {bookingId:1, userId:2, message: "Thank you for your review!"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
