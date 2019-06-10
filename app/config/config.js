/******************************************************************************
 *
 * File:
 *   config.js
 *
 * Owner:
 *   Grant Broadwater
 *
 * Description:
 *   Configuration data for the semaphore ci
 *
 ******************************************************************************/

var config = {
  port: process.env.PORT || 8080,
  db: process.env.MONGOLAB_URI || "mongodb://localhost/reminderapi",
  test_port: 2001,
  test_db: "mongodb://localhost/reminderapi_test"
};

module.exports = config;