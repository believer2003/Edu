const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    fname:{
        type:"String",
        required:true
    },
    lname:{
        type:"String",
        required:true
    },
    username:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    }
});

const testData = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    testDate:{
      type:String,
      required:true,
    },
    score: {
      type: Number,
      required: true,
    },
    passed:{
      type:Boolean,
      required:true,
    },
    remarks: {
      type: String,
      required: false,
    },
    pdfFileId: {
      type: String,
      required:true,
    },
  });

const User = mongoose.model("User", userSchema);
const TestData = mongoose.model("TestData", testData);

module.exports = {
    User,
    TestData
};