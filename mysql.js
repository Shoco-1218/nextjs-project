import mysql from 'mysql';
import util from  'util';

const queryAsync = function(sql, args) {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shoko12180315',
    database: 'expressproject'
  })
  
  connection.connect()

  
  return (
    util.promisify(connection.query).call(connection, sql, args)
  );
};


export default queryAsync;
