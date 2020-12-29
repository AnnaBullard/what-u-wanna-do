'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('States', [
      {name: "Alabama", abb: "AL"},
      {name: "Alaska", abb: "AK"},
      {name: "Arizona", abb: "AZ"},
      {name: "Arkansas", abb: "AR"},
      {name: "California", abb: "CA"},
      {name: "Colorado", abb: "CO"},
      {name: "Connecticut", abb: "CT"},
      {name: "Delaware", abb: "DE"},
      {name: "Florida", abb: "FL"},
      {name: "Georgia", abb: "GA"},
      {name: "Hawaii", abb: "HI"},
      {name: "Idaho", abb: "ID"},
      {name: "Illinois", abb: "IL"},
      {name: "Indiana", abb: "IN"},
      {name: "Iowa", abb: "IA"},
      {name: "Kansas", abb: "KS"},
      {name: "Kentucky", abb: "KY"},
      {name: "Louisiana", abb: "LA"},
      {name: "Maine", abb: "ME"},
      {name: "Maryland", abb: "MD"},
      {name: "Massachusetts", abb: "MA"},
      {name: "Michigan", abb: "MI"},
      {name: "Minnesota", abb: "MN"},
      {name: "Mississippi", abb: "MS"},
      {name: "Missouri", abb: "MO"},
      {name: "Montana", abb: "MT"},
      {name: "Nebraska", abb: "NE"},
      {name: "Nevada", abb: "NV"},
      {name: "New Hampshire", abb: "NH"},
      {name: "New Jersey", abb: "NJ"},
      {name: "New Mexico", abb: "NM"},
      {name: "New York", abb: "NY"},
      {name: "North Carolina", abb: "NC"},
      {name: "North Dakota", abb: "ND"},
      {name: "Ohio", abb: "OH"},
      {name: "Oklahoma", abb: "OK"},
      {name: "Oregon", abb: "OR"},
      {name: "Pennsylvania", abb: "PA"},
      {name: "Rhode Island", abb: "RI"},
      {name: "South Carolina", abb: "SC"},
      {name: "South Dakota", abb: "SD"},
      {name: "Tennessee", abb: "TN"},
      {name: "Texas", abb: "TX"},
      {name: "Utah", abb: "UT"},
      {name: "Vermont", abb: "VT"},
      {name: "Virginia", abb: "VA"},
      {name: "Washington", abb: "WA"},
      {name: "West Virginia", abb: "WV"},
      {name: "Wisconsin", abb: "WI"},
      {name: "Wyoming", abb: "WY"}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};
