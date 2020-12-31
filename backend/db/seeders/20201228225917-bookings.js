'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {experienceId: 1, date: new Date("2020-12-12 15:00:00+00"), dateWithTimeZone: new Date("2020-12-12 15:00:00-08"), price: 250, userId:1, statusId: 3, rate: 5},
      {experienceId: 1, date: new Date("2020-12-12 19:00:00+00"), dateWithTimeZone: new Date("2020-12-12 19:00:00-08"), price: 350, userId:3, statusId: 3, rate: 4},
      {experienceId: 1, date: new Date("2020-12-19 15:00:00+00"), dateWithTimeZone: new Date("2020-12-19 15:00:00-08"), price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 1, date: new Date("2021-01-01 20:00:00+00"), dateWithTimeZone: new Date("2021-01-01 20:00:00-08"), price: null, userId:1, statusId: 2, rate: null},
      {experienceId: 1, date: new Date("2020-12-19 19:00:00+00"), dateWithTimeZone: new Date("2020-12-19 19:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("2020-12-25 20:00:00+00"), dateWithTimeZone: new Date("2020-12-25 20:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("2020-12-26 23:00:00+00"), dateWithTimeZone: new Date("2020-12-26 23:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("2021-01-09 13:00:00+00"), dateWithTimeZone: new Date("2021-01-09 13:00:00-08"), price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 1, date: new Date("2021-01-09 17:00:00+00"), dateWithTimeZone: new Date("2021-01-09 17:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2020-12-31 22:00:00+00"), dateWithTimeZone: new Date("2020-12-31 22:00:00-08"), price: 400, userId:1, statusId: 3, rate: 5},
      {experienceId: 2, date: new Date("2021-01-02 10:00:00+00"), dateWithTimeZone: new Date("2021-01-02 10:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-01-02 13:00:00+00"), dateWithTimeZone: new Date("2021-01-02 13:00:00-08"), price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 2, date: new Date("2021-01-02 16:00:00+00"), dateWithTimeZone: new Date("2021-01-02 16:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-01-27 20:00:00+00"), dateWithTimeZone: new Date("2021-01-27 20:00:00-08"), price: 300, userId:3, statusId: 3, rate: 3},
      {experienceId: 2, date: new Date("2021-01-08 18:00:00+00"), dateWithTimeZone: new Date("2021-01-08 18:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-01-14 20:00:00+00"), dateWithTimeZone: new Date("2021-01-14 20:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-01-20 22:00:00+00"), dateWithTimeZone: new Date("2021-01-20 22:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-02-02 18:00:00+00"), dateWithTimeZone: new Date("2021-02-02 18:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2021-02-08 4:00:00+00"), dateWithTimeZone: new Date("2021-02-08 4:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-01-04 13:00:00+00"), dateWithTimeZone: new Date("2021-01-04 13:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-01-11 14:00:00+00"), dateWithTimeZone: new Date("2021-01-11 14:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-01-14 6:00:00+00"), dateWithTimeZone: new Date("2021-01-14 6:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-01-18 15:00:00+00"), dateWithTimeZone: new Date("2021-01-18 15:00:00-08"), price: 120, userId:1, statusId: 3, rate: 2},
      {experienceId: 3, date: new Date("2021-01-25 10:00:00+00"), dateWithTimeZone: new Date("2021-01-25 10:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-01-25 16:00:00+00"), dateWithTimeZone: new Date("2021-01-25 16:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-02-01 17:00:00+00"), dateWithTimeZone: new Date("2021-02-01 17:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-02-08 18:00:00+00"), dateWithTimeZone: new Date("2021-02-08 18:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2021-02-20 12:00:00+00"), dateWithTimeZone: new Date("2021-02-20 12:00:00-08"), price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 3, date: new Date("2021-02-26 10:00:00+00"), dateWithTimeZone: new Date("2021-02-26 10:00:00-08"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2020-12-20 10:00:00+00"), dateWithTimeZone: new Date("2020-12-20 10:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2020-12-27 11:00:00+00"), dateWithTimeZone: new Date("2020-12-27 11:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-01-03 12:00:00+00"), dateWithTimeZone: new Date("2021-01-03 12:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-01-10 13:00:00+00"), dateWithTimeZone: new Date("2021-01-10 13:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-01-17 14:00:00+00"), dateWithTimeZone: new Date("2021-01-17 14:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-01-24 11:00:00+00"), dateWithTimeZone: new Date("2021-01-24 11:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-01-24 16:00:00+00"), dateWithTimeZone: new Date("2021-01-24 16:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-02-07 11:00:00+00"), dateWithTimeZone: new Date("2021-02-07 11:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-02-07 17:00:00+00"), dateWithTimeZone: new Date("2021-02-07 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2021-02-14 18:00:00+00"), dateWithTimeZone: new Date("2021-02-14 18:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2020-12-25 17:00:00+00"), dateWithTimeZone: new Date("2020-12-25 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2021-01-01 17:00:00+00"), dateWithTimeZone: new Date("2021-01-01 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2020-12-18 17:00:00+00"), dateWithTimeZone: new Date("2020-12-18 17:00:00-05"), price: 180, userId:2, statusId: 3, rate: 4},
      {experienceId: 5, date: new Date("2021-01-15 17:00:00+00"), dateWithTimeZone: new Date("2021-01-15 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2021-01-22 17:00:00+00"), dateWithTimeZone: new Date("2021-01-22 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2021-01-08 17:00:00+00"), dateWithTimeZone: new Date("2021-01-08 17:00:00-05"), price: null, userId:2, statusId: 2, rate: null},
      {experienceId: 5, date: new Date("2021-01-29 17:00:00+00"), dateWithTimeZone: new Date("2021-01-29 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2021-02-05 17:00:00+00"), dateWithTimeZone: new Date("2021-02-05 17:00:00-05"), price: 180, userId:1, statusId: 3, rate: 3},
      {experienceId: 5, date: new Date("2021-02-12 17:00:00+00"), dateWithTimeZone: new Date("2021-02-12 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2021-02-19 17:00:00+00"), dateWithTimeZone: new Date("2021-02-19 17:00:00-05"), price: null, userId:null, statusId: 1, rate: null}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
