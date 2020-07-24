import mysql from 'mysql';
import util from  'util';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shoko12180315',
  database: 'expressproject'
})

connection.connect()

const queryAsync = function(sql, args) {

  return (
    util.promisify(connection.query).call(connection, sql, args)
  );
  
};


export default queryAsync;
