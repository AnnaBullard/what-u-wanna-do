'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {experienceId: 1, date: new Date("11/28/2020"), time: new Date("2020-11-28 17:30"), timeMin: null, timeMax: null, price: 250, userId:1, statusId: 3, rate: 5},
      {experienceId: 1, date: new Date("12/05/2020"), time: new Date("2020-12-5 17:30"), timeMin: null, timeMax: null, price: 350, userId:3, statusId: 3, rate: 4},
      {experienceId: 1, date: new Date("12/12/2020"), time: new Date("2020-12-12 17:30"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 1, date: new Date("12/19/2020"), time: new Date("2020-12-19 17:30"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("12/26/2020"), time: new Date("2020-12-26 17:30"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("01/02/2021"), time: new Date("2021-1-2 17:30"), timeMin: null, timeMax: null, price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 1, date: new Date("01/09/2021"), time: new Date("2021-1-9 17:30"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("01/16/2021"), time: new Date("2021-1-16 17:30"), timeMin: null, timeMax: null, price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 2, date: new Date("12/25/2020"), time: new Date("2020-12-25 21:00"), timeMin: null, timeMax: null, price: 300, userId:1, statusId: 3, rate: 5},
      {experienceId: 2, date: new Date("12/31/2020"), time: new Date("2020-12-31 23:00"), timeMin: null, timeMax: null, price: 300, userId:3, statusId: 3, rate: null},
      {experienceId: 2, date: new Date("01/06/2021"), time: null, timeMin: "18:00", timeMax: "23:00:00", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("12/18/2020"), time: new Date("2020-12-18 13:00"), timeMin: null, timeMax: null, price: 120, userId:3, statusId: 3, rate: null},
      {experienceId: 3, date: new Date("12/19/2020"), time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("11/30/2020"), time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("01/15/2021"), time: null, timeMin: "10:00", timeMax: "13:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("01/22/2021"), time: new Date("2021-1-22 15:15"), timeMin: "10:00", timeMax: "13:30", price: null, userId:1, statusId: 3, rate: null},
      {experienceId: 4, date: new Date("02/01/2021"), time: new Date("2021-2-1 15:00"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("02/08/2021"), time: new Date("2021-2-8 15:00"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("02/15/2021"), time: new Date("2021-2-15 15:00"), timeMin: null, timeMax: null, price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("02/02/2021"), time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("02/09/2021"), time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("02/16/2021"), time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("02/23/2021"), time: null, timeMin: "10:00", timeMax: "15:30", price: null, userId:null, statusId: 1, rate: null}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
