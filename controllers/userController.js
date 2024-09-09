import asyncHandler from "express-async-handler";
import User from "../models/userModel";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    dateOfBirth,
    gender,
    countryOfResidence,
    stateOfResidence,
    homeAddress,
    graduate,
    graduationYear,
    instituteGraduatedFrom,
    highestAcademicLevel,
    currentProfession,
    whereDidYouHearAboutUs,
    referralName,
    referralTelegramUsername,
    yourTelegramUsername,
    selectID,
    selectedIDLink,
    selectedIDWithFace,
    selectedIDWithFaceLink,
    email,
    username,
    password,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    phoneNumber,
    dateOfBirth,
    gender,
    countryOfResidence,
    stateOfResidence,
    homeAddress,
    graduate,
    graduationYear,
    instituteGraduatedFrom,
    highestAcademicLevel,
    currentProfession,
    whereDidYouHearAboutUs,
    referralName,
    referralTelegramUsername,
    yourTelegramUsername,
    selectID,
    selectedIDLink,
    selectedIDWithFace,
    selectedIDWithFaceLink,
    email,
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      countryOfResidence: user.countryOfResidence,
      stateOfResidence: user.stateOfResidence,
      homeAddress: user.homeAddress,
      graduate: user.graduate,
      graduationYear: user.graduationYear,
      instituteGraduatedFrom: user.instituteGraduatedFrom,
      highestAcademicLevel: user.highestAcademicLevel,
      currentProfession: user.currentProfession,
      whereDidYouHearAboutUs: user.whereDidYouHearAboutUs,
      referralName: user.referralName,
      referralTelegramUsername: user.referralTelegramUsername,
      yourTelegramUsername: user.yourTelegramUsername,
      selectID: user.selectID,
      selectedIDLink: user.selectedIDLink,
      selectedIDWithFace: user.selectedIDWithFace,
      selectedIDWithFaceLink: user.selectedIDWithFaceLink,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.send("logout user");
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});

// @desc    Delete user profile
// @route   DELETE /api/users/delete-profile
// @access  Private
const deleteUserProfile = asyncHandler(async (req, res) => {
  res.send("delete profile222");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
