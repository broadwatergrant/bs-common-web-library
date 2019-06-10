/*****************************************************************************
 *
 * File:
 *   reminder.model.js
 *
 * Owner:
 *   Grant Broadwater
 *
 * Description:
 *   MongoDB model for the reminder object
 *
 *****************************************************************************/

/* Dependencies **************************************************************/

var mongoose = require( 'mongose' );

/* Module variables **********************************************************/

var Schema = mongoose.Schema;

/* DB Schema Declaration *****************************************************/

var ReminderSchema = new Schema( {

  // User facing reminder body. Right now it is just a string
  reminder_body: String,
  
  // Flag for user if this reminder item has been completed
  completed : {
    type: Boolean,
    default: false
  },
  
  // When the reminder was created in the database
  created_by : {
    type: Date,
    default: Date.now
  }

} );

/* Data Validation ***********************************************************/

ReminderSchema.pre( 'save', function(next, done) {

  // Guards
  if( !this.reminder_body ) {
    next(
      new Error( "Todo should not be null" )
    );
    return;
  }
  
  next();
  
} );

var ReminderModel = mongoose.model( 'Reminder', ReminderSchema );

/* Export ********************************************************************/

module.exports = ReminderModel;