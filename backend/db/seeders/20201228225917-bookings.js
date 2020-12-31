'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {experienceId: 1, date: new Date("12/12/2020 15:00"), dateWithTimeZone: new Date("12/12/2020 15:00 PST"), price: 250, userId:1, statusId: 3, rate: 5},
      {experienceId: 1, date: new Date("12/12/2020 19:00"), dateWithTimeZone: new Date("12/12/2020 19:00 PST"), price: 350, userId:3, statusId: 3, rate: 4},
      {experienceId: 1, date: new Date("12/19/2020 15:00"), dateWithTimeZone: new Date("12/19/2020 15:00 PST"), price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 1, date: new Date("1/1/2021 20:00"), dateWithTimeZone: new Date("1/1/2021 20:00 PST"), price: null, userId:1, statusId: 2, rate: null},
      {experienceId: 1, date: new Date("12/19/2020 19:00"), dateWithTimeZone: new Date("12/19/2020 19:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("12/25/2020 20:00"), dateWithTimeZone: new Date("12/25/2020 20:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("12/26/2020 23:00"), dateWithTimeZone: new Date("12/26/2020 23:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 1, date: new Date("1/9/2021 13:00"), dateWithTimeZone: new Date("1/9/2021 13:00 PST"), price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 1, date: new Date("1/9/2021 17:00"), dateWithTimeZone: new Date("1/9/2021 17:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("12/31/2020 22:00"), dateWithTimeZone: new Date("12/31/2020 22:00 PST"), price: 400, userId:1, statusId: 3, rate: 5},
      {experienceId: 2, date: new Date("1/2/2021 10:00"), dateWithTimeZone: new Date("1/2/2021 10:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("1/2/2021 13:00"), dateWithTimeZone: new Date("1/2/2021 13:00 PST"), price: null, userId:null, statusId: 4, rate: null},
      {experienceId: 2, date: new Date("1/2/2021 16:00"), dateWithTimeZone: new Date("1/2/2021 16:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("1/27/2021 20:00"), dateWithTimeZone: new Date("1/27/2021 20:00 PST"), price: 300, userId:3, statusId: 3, rate: 3},
      {experienceId: 2, date: new Date("1/8/2021 18:00"), dateWithTimeZone: new Date("1/8/2021 18:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("1/14/2021 20:00"), dateWithTimeZone: new Date("1/14/2021 20:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("1/20/2021 22:00"), dateWithTimeZone: new Date("1/20/2021 22:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2/2/2021 18:00"), dateWithTimeZone: new Date("2/2/2021 18:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 2, date: new Date("2/8/2021 4:00"), dateWithTimeZone: new Date("2/8/2021 4:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("1/4/2021 13:00"), dateWithTimeZone: new Date("1/4/2021 13:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("1/11/2021 14:00"), dateWithTimeZone: new Date("1/11/2021 14:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("1/14/2021 6:00"), dateWithTimeZone: new Date("1/14/2021 6:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("1/18/2021 15:00"), dateWithTimeZone: new Date("1/18/2021 15:00 PST"), price: 120, userId:1, statusId: 3, rate: 2},
      {experienceId: 3, date: new Date("1/25/2021 10:00"), dateWithTimeZone: new Date("1/25/2021 10:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("1/25/2021 16:00"), dateWithTimeZone: new Date("1/25/2021 16:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2/1/2021 17:00"), dateWithTimeZone: new Date("2/1/2021 17:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2/8/2021 18:00"), dateWithTimeZone: new Date("2/8/2021 18:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 3, date: new Date("2/20/2021 12:00"), dateWithTimeZone: new Date("2/20/2021 12:00 PST"), price: null, userId:3, statusId: 2, rate: null},
      {experienceId: 3, date: new Date("2/26/2021 10:00"), dateWithTimeZone: new Date("2/26/2021 10:00 PST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("12/20/2020 10:00"), dateWithTimeZone: new Date("12/20/2020 10:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("12/27/2020 11:00"), dateWithTimeZone: new Date("12/27/2020 11:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("1/3/2021 12:00"), dateWithTimeZone: new Date("1/3/2021 12:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("1/10/2021 13:00"), dateWithTimeZone: new Date("1/10/2021 13:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("1/17/2021 14:00"), dateWithTimeZone: new Date("1/17/2021 14:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("1/24/2021 11:00"), dateWithTimeZone: new Date("1/24/2021 11:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("1/24/2021 16:00"), dateWithTimeZone: new Date("1/24/2021 16:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2/7/2021 11:00"), dateWithTimeZone: new Date("2/7/2021 11:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2/7/2021 17:00"), dateWithTimeZone: new Date("2/7/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 4, date: new Date("2/14/2021 18:00"), dateWithTimeZone: new Date("2/14/2021 18:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("12/25/2020 17:00"), dateWithTimeZone: new Date("12/25/2020 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("1/1/2021 17:00"), dateWithTimeZone: new Date("1/1/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("12/18/2020 17:00"), dateWithTimeZone: new Date("12/18/2020 17:00 EST"), price: 180, userId:2, statusId: 3, rate: 4},
      {experienceId: 5, date: new Date("1/15/2021 17:00"), dateWithTimeZone: new Date("1/15/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("1/22/2021 17:00"), dateWithTimeZone: new Date("1/22/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("1/8/2021 17:00"), dateWithTimeZone: new Date("1/8/2021 17:00 EST"), price: null, userId:2, statusId: 2, rate: null},
      {experienceId: 5, date: new Date("1/29/2021 17:00"), dateWithTimeZone: new Date("1/29/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2/5/2021 17:00"), dateWithTimeZone: new Date("2/5/2021 17:00 EST"), price: 180, userId:1, statusId: 3, rate: 3},
      {experienceId: 5, date: new Date("2/12/2021 17:00"), dateWithTimeZone: new Date("2/12/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null},
      {experienceId: 5, date: new Date("2/19/2021 17:00"), dateWithTimeZone: new Date("2/19/2021 17:00 EST"), price: null, userId:null, statusId: 1, rate: null}      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
