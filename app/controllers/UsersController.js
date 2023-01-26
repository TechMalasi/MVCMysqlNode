const { getUsers ,formSubmit,updateEmployee,deleteEmployee} = require("../models/UsersModel");

exports.getUsers = async (req, res) => {
  let data = [];
  try {
    data = await getUsers();
    res.render("show",{users:data});
    // res.json({ msg: "success", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
  }
};
exports.formSubmit = async (req, res) => {

    // console.log("r===",req.body);
  let data = [];
  try {
     data = await formSubmit(req.body);
     req.flash('success', 'Employee Added Successfully');
    //  res.locals.message = req.flash();
     res.redirect("/api/v1/getUsers")
    // res.json({ msg: "success", data: data });
  } catch (error) {
    res.json({ msg2: error, data: [] });
  }
};

exports.updateEmployee = async (req, res) => {

    // console.log("r===",req.body);
  let data = [];
  try {
     data = await updateEmployee(req.body);
     req.flash('success', 'Employee Updated successfully');
    //  res.locals.message = req.flash();
     res.redirect("/api/v1/getUsers")
    // res.json({ msg: "success", data: data });
  } catch (error) {
    res.json({ msg2: error, data: [] });
  }
};
exports.deleteEmployee = async (req, res) => {

    // console.log("r===",req.body);
  let data = [];
  try {
     data = await deleteEmployee(req.params.id);
     req.flash('success', 'Employee Deleted successfully');
    //  res.locals.message = req.flash();
     res.redirect("/api/v1/getUsers")
    // res.json({ msg: "success", data: data });
  } catch (error) {
    res.json({ msg2: error, data: [] });
  }
};
