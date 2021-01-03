'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [
      {address1:"20 W 34th St",address2:"Fancy bar on last floor", city:"New York", stateId: 32 , zip: "10001", userId: 2},
      {address1:"656 6th Ave",address2:"Church basement", city:"New York", stateId: 32 , zip: "10011", userId: 2},
      {address1:"476 5th Ave",address2:"Near by left Lion", city:"New York", stateId: 32 , zip: "10018", userId: 2},
      {address1:"Venice Fishing Pier", address2:"Beach next to the entrance to the pier", city:"Venice", stateId: 5 , zip: "90292", userId: 1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
