import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    countryOfResidence: {
      type: String,
      required: true,
    },
    stateOfResidence: {
      type: String,
      required: true,
    },
    homeAddress: {
      type: String,
      required: true,
    },
    graduate: {
      type: Boolean,
      required: true,
    },
    graduationYear: {
      type: String,
    },
    instituteGraduatedFrom: {
      type: String,
    },
    highestAcademicLevel: {
      type: String,
    },
    currentProfession: {
      type: String,
      required: true,
    },
    whereDidYouHearAboutUs: {
      type: String,
      required: true,
    },
    referralName: {
      type: String,
      required: true,
    },
    referralTelegramUsername: {
      type: String,
      required: true,
    },
    yourTelegramUsername: {
      type: String,
      required: true,
    },
    selectID: {
      type: String,
      required: true,
    },
    selectedIDLink: {
      type: String,
      required: true,
    },
    selectedIDWithFace: {
      type: String,
      required: true,
    },
    selectedIDWithFaceLink: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;