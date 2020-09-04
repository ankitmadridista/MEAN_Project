const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "127.0.0.1",
  user: "root",
  password: "Halamadrid@4",
  database: "user",
};

let addUser = async (input) => {
  try {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();
    //console.log(input);
    let sql =
      "INSERT INTO login (username,password,email,mobile) VALUES(?,?,?,?)";

    //console.log(input);

    //console.log(input.mobile);
    input.mobile = Number(input.mobile);
    //console.log(input.mobile);
    //console.log(input);

    await connection.queryAsync(sql, [
      input.username,
      input.password,
      input.email,
      input.mobile,
    ]);
    await connection.endAsync();
  } catch (err) {
    console.log("err");
  }
};

let authUser = async (input) => {
  //console.log('inside auth fun');
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();
  //console.log(input);
  let sql = "SELECT * FROM login WHERE email = ? && password = ?";

  //console.log(input);

  const results = await connection.queryAsync(sql, [
    input.email,
    input.password,
  ]);
  //console.log(results);

  await connection.endAsync();

  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};

let showMenu = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //console.log("inside show fun");
  console.log(typeof input.y, input.y);
  //let temp = input.y;
  //console.log(temp);
  //console.log(typeof temp);

  let sql = "SELECT * FROM lunch WHERE dayN = ?";
  //let sql = "SELECT * FROM lunch WHERE rice = ?";

  let results = await connection.queryAsync(sql, [input.y]);
  console.log(results);
  await connection.endAsync();
  return results;
};

let showUsers = async (iput) => {
  //console.log("inside get call");
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM login where username != 'admin'";
  //let sql = "SELECT * FROM lunch WHERE rice = ?";

  let results = await connection.queryAsync(sql);
  //console.log(results);
  await connection.endAsync();
  return results;
};

let delUsers = async (ip) => {
  //console.log("inside get call");
  //console.log(ip);
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "DELETE FROM LOGIN WHERE USERNAME = ?";
  //let sql = "SELECT * FROM lunch WHERE rice = ?";

  await connection.queryAsync(sql, [ip.input]);
  //console.log("done");
  await connection.endAsync();
};

let showAdminMenu = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //console.log("inside show fun");
  // console.log(typeof input.y, input.y);
  //let temp = input.y;
  //console.log(temp);
  //console.log(typeof temp);

  let sql = "SELECT * FROM lunch";
  //let sql = "SELECT * FROM lunch WHERE rice = ?";

  let results = await connection.queryAsync(sql);
  console.log(results);
  await connection.endAsync();
  return results;
};

let updateBill = async (input) => {
  //console.log("inside update fun");
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();
  let amt = 100;
  let billAmt = { amt };
  console.log(input, billAmt);

  let sql = "UPDATE login SET bill = bill + ? WHERE email = ?";

  await connection.queryAsync(sql, [billAmt.amt, input.semail]);
  //console.log("done");

  await connection.endAsync();
};

let getAccDet = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //console.log("inside show fun");
  //let temp = input.email;
  //console.log(temp);
  //console.log(typeof temp);

  let sql = "SELECT * FROM login WHERE email = ?";
  //let sql = "SELECT * FROM lunch WHERE rice = ?";

  let results = await connection.queryAsync(sql, [input.email]);
  //console.log(results);
  await connection.endAsync();
  return results;
};

let emailVer = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();
  //console.log("inside email ver");
  //console.log(typeof input.em, input.em);
  //let temp = input.y;
  //console.log(temp);
  //console.log(typeof temp);

  let sql = "SELECT * FROM login WHERE email = ?";

  let results = await connection.queryAsync(sql, [input.email]);
  console.log(results);
  await connection.endAsync();
  if (results.length === 0) {
    throw new Error("Invalid Credentials");
  }
};

let updatePassword = async (input) => {
  //console.log("inside update fun");
  //console.log(input);
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "UPDATE login SET password = ? WHERE email = ?";

  await connection.queryAsync(sql, [input.password, input.email]);
  console.log("done");

  await connection.endAsync();
};

module.exports = {
  addUser,
  authUser,
  showMenu,
  showUsers,
  delUsers,
  showAdminMenu,
  updateBill,
  getAccDet,
  emailVer,
  updatePassword,
};
