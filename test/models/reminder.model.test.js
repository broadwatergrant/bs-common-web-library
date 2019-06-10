/*****************************************************************************
 *
 * File:
 *   reminder.model.test.js
 *
 * Owner:
 *   Grant Broadwater
 *
 * Description:
 *   Test the reminder model object
 *
 *****************************************************************************/

/* Dependencies **************************************************************/

let sinon = require( 'sinon' );
let chai = require( 'chai' );
let expect = chai.expect;
let mongoose = require( 'mongoose' );
require( 'sinon-mongoose' );

/* Application Variables *****************************************************/

var ReminderModel = require( '../../app/models/reminder.model' );

/* Test Cases ****************************************************************/

describe( 'Get all reminders', function () {
  
    it( 'Should call find once', function ( done ) {
      
      var TodoMock = sinon.mock( TodoModel );
      
      TodoMock
        .expects( 'find' )
        .yields( null, 'REMINDER' );
      
      TodoModel.find( function ( err, result ) {
        TodoMock.verify();
        TodoMock.restore();
        should.equal( 'REMINDER', result, "Test fails due to unexpected result" );
        done();
      } );
      
    } );
} );