const connection = require("../config/db");
const { promisify } = require("util");



const promise_connection = promisify(connection.query).bind(connection);


exports.getUsers = async () => {

  let query = "select * from users";
  return await promise_connection(query);
};

exports.formSubmit = async (data) => {
  // console.log(data)
  let query = "insert into users(name,email,mobile) values(?,?,?)";
 return await promise_connection(query,[data.first_name,data.email,data.phone]);
};

exports.updateEmployee = async (data) => {
  // console.log(data)
  let query = "update users set name=?,email=?,mobile=? where id=?";
 return await promise_connection(query,[data.first_name,data.email,data.phone,data.userid]);
};
exports.deleteEmployee = async (id) => {
  // console.log(data)
  let query = "delete from users  where id=?";
 return await promise_connection(query,[id]);
};
