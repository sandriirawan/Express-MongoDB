const { response } = require("../helper/response");
const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    response(res, users, 200, "Get Data Success");
  } catch (error) {
    response(res, null, 500, "Error get user");
  }
};

exports.getByIdUser = async (req, res) => {
  try {
    const user_id = req.params.id;
    const user = await User.findById(user_id);
    if (user) {
      response(res, user, 200, "Get User Details Success");
    } else {
      response(res, null, 404, "User not found");
    }
  } catch (error) {
    response(res, null, 500, "Error getting user details");
  }
};

exports.createUsers = async (req, res) => {
  try {
    const { name, email } = req.body;
    const new_user = await User.create({ name, email });
    response(res, new_user, 200, "Create Data Success");
  } catch (error) {
    response(res, null, 500, "Error creating user");
  }
};

exports.updateUsers = async (req, res) => {
    try {
      const user_id = req.params.id; 
      const { name, email } = req.body; 
  
      const updatedUser = await User.findByIdAndUpdate(user_id, { name, email }, { new: true });
  
      if (updatedUser) {
        response(res, updatedUser, 200, "Update Data Success");
      } else {
        response(res, null, 404, "User not found");
      }
    } catch (error) {
      console.log(error);
      response(res, null, 500, "Error updating user");
    }
  };
  

exports.deleteUsers = async (req, res) => {
  try {
    const user_id = req.params.id;
    const deletedUser = await User.findByIdAndRemove(user_id);
    if (deletedUser) {
      response(res, deletedUser, 200, "Delete Data Success");
    } else {
      response(res, null, 404, "User not found");
    }
  } catch (error) {
    response(res, null, 500, "Error deleting user");
  }
};
