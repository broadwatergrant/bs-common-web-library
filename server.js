/*****************************************************************************
 *
 * File:
 *   server.js
 *
 * Owner:
 *   Grant Broadwater
 *
 * Description:
 *   Server entry point
 *
 *****************************************************************************/

/* Dependencies **************************************************************/

let express = require( 'express' );
let mongoose = require( 'mongoose' );
let morgan = require( 'morgan' );
let bodyParser = require( 'body-parser' );
let methodOverride = require( 'method-override' );
let config = require( './app/config/config' );

/* Server Variables **********************************************************/

// Express app
let app = express();

// Database connection
let db;

/* Middleware ****************************************************************/

// log every request to the console
app.use( morgan( 'dev' ) );

// parse application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { 'extended': 'true' } ) );

// parse application/json
app.use( bodyParser.json() );

// parse application/vnd.api+json as json
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ) );

app.use( methodOverride() );


/* Database Connection *******************************************************/

if ( process.env.NODE_ENV === 'test' ) {
  
  db = mongoose.connect( config.test_db );
  app.listen( config.test_port, function ( err ) {
    
    // Guards
    if ( err ) {
      throw err;
    }
    
    console.log( 'Application listening on port ' + config.test_port );
    
  } );
  
} else {
  
  db = mongoose.connect( config.db );
  app.listen( config.port, function ( err ) {
    
    // Guards
    if ( err ) {
      throw err;
    }
    
    console.log( 'Application listening on port ' + config.port );
    
  } );
  
}

mongoose.connection.on( 'connected', function () {
  
  console.log( 'Mongoose connection created on: ' + config.db );
  
} );

/* Export ********************************************************************/

module.exports = app;