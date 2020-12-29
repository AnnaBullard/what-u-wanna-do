'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {experienceId: 1, date: "11/28/2020", time: "2020-11-28 17:30", timeMin: null, timeMax: null, price: 250, userId:1, statusId: 3, rate: 5},
      {experienceId: 1, date: "12/5/2020", time: "2020-12-5 17:30", timeMin: null, timeMax: null, price: 350, userId:3, statusId: 3, rate: 4},
      {experienceId: 1, date: "12/12/2020", time: "2020-12-12 17:30", timeMin: null, timeMax: null, price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 1, date: "12/19/2020", time: "2020-12-19 17:30", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: "12/26/2020", time: "2020-12-26 17:30", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: "1/2/2021", time: "2021-1-2 17:30", timeMin: null, timeMax: null, price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 1, date: "1/9/2021", time: "2021-1-9 17:30", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: "1/16/2021", time: "2021-1-16 17:30", timeMin: null, timeMax: null, price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 2, date: "12/25/2020", time: "2020-12-25 21:00", timeMin: null, timeMax: null, price: 300, userId:1, statusId: 3, rate: 5},
      {experienceId: 2, date: "12/31/2020", time: "2020-12-31 23:00", timeMin: null, timeMax: null, price: 300, userId:3, statusId: 3, rate: null},
      {experienceId: 2, date: "1/6/2021", time: null, timeMin: "18:00", timeMax: "23:00:00", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: "12/18/2020", time: "2020-12-18 13:00", timeMin: null, timeMax: null, price: 120, userId:3, statusId: 3, rate: null},
      {experienceId: 3, date: "12/19/2020", time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: "11/30/2020", time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: "1/15/2021", time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: "1/22/2021", time: "2021-1-22 15:15", timeMin: "10:00", timeMax: "13:30", price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 4, date: "2/1/2021", time: "2021-2-1 15:00", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: "2/8/2021", time: "2021-2-8 15:00", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: "2/15/2021", time: "2021-2-15 15:00", timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: "2/2/2021", time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: "2/9/2021", time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: "2/16/2021", time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: "2/23/2021", time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
