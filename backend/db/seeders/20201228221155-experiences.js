'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Experiences', [
      {title: "Bartending class", description: "Learn how to mix fancy drinks like: \n\n-Moscow Mule\n-Cranberry Orange Mimosas\n-Perfect Lemon Martini\n-Irish Creme Drink\n\nIf you won't learn anything you'll drink anyway and have fun!", max: 1, duration: 180, currentPrice: 350, locationId: 1, hostId: 2, imageUrl:"/img/bartending.jpg"},
      {title: "Wine tasting", description: "Not as much of tasting but more of drinking in a very fancy church basement.", max: 2, duration: 120, currentPrice: 300, locationId: 2, hostId: 2, imageUrl:"/img/wine-tasting.jpg"},
      {title: "City Tour", description: "If you are too lazy to use Google Maps", max: 3, duration: 240, currentPrice: 120, locationId: 3, hostId: 2, imageUrl:"/img/new-york-tour.jpg"},
      {title: "Self Defence Class", description: "Be the scary one yourself!", max: 1, duration: 90, currentPrice: 150, locationId: 4, hostId: 1, imageUrl:"/img/self-defence.jpg"},
      {title: "Horse Riding", description: "Her name is Rosamunda and she loves long walks on the beach and brushing her mane. Come and spend some time.", max: 1, duration: 45, currentPrice: 180, locationId: 4, hostId: 1, imageUrl:"/img/horse-riding.jpg"},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Experiences', null, {});
  }
};
