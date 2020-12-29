'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {experienceId: 1, date: new Date(11/28/2020), time: 1050, timeMin: null, timeMax: null, price: 250, userId:1, statusId: 3, rate: 5},
      {experienceId: 1, date: new Date(12/5/2020), time: 1050, timeMin: null, timeMax: null, price: 350, userId:3, statusId: 3, rate: 4},
      {experienceId: 1, date: new Date(12/12/2020), time: 1050, timeMin: null, timeMax: null, price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 1, date: new Date(12/19/2020), time: 1050, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date(12/26/2020), time: 1050, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date(1/2/2021), time: 1050, timeMin: null, timeMax: null, price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 1, date: new Date(1/9/2021), time: 1050, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date(1/16/2021), time: 1050, timeMin: null, timeMax: null, price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 2, date: new Date(12/25/2020), time: 1260, timeMin: null, timeMax: null, price: 300, userId:1, statusId: 3, rate: 5},
      {experienceId: 2, date: new Date(31/12/2020), time: 1380, timeMin: null, timeMax: null, price: 300, userId:3, statusId: 3, rate: null},
      {experienceId: 2, date: new Date(1/6/2021), time: null, timeMin: 1080, timeMax: 1380, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date(12/18/2020), time: 780, timeMin: null, timeMax: null, price: 120, userId:3, statusId: 3, rate: null},
      {experienceId: 3, date: new Date(12/19/2020), time: null, timeMin: 600, timeMax: 810, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date(11/30/2020), time: null, timeMin: 600, timeMax: 810, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date(1/15/2021), time: null, timeMin: 600, timeMax: 810, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date(1/22/2021), time: 915, timeMin: 600, timeMax: 810, price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 4, date: new Date(2/1/2021), time: 900, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date(2/8/2021), time: 900, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date(2/15/2021), time: 900, timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date(2/2/2021), time: null, timeMin: 600, timeMax: 930, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date(2/9/2021), time: null, timeMin: 601, timeMax: 930, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date(2/16/2021), time: null, timeMin: 602, timeMax: 930, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date(2/23/2021), time: null, timeMin: 603, timeMax: 930, price: null, userId:null, statusId: 1, rate: null}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
