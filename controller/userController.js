const User = require("../model/userModel").User;
const TestData = require("../model/userModel").TestData;


 const createTest = async (req, res) => {
    try {
        const { userId,testDate,score,passed,remarks,pdfFileId } = req.body;
        if (!userId || !pdfFileId || !testDate) {
            return res.status(400).json({ msg: "Required fields are missing" });
        }
        const userData = new TestData({ userId, testDate,score,passed, remarks, pdfFileId });
        const savedData = await userData.save();
        res.status(200).json(savedData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAll = async (req, res) => {
    try {
        const userData = await TestData.find();
        if (!userData) {
            return res.status(404).json({ msg: "No data found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUserByUsername = async (req, res) => {
    try {
        const { username,password } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const passwordMatch = password===user.password;
        if (!passwordMatch) {
            return res.status(401).json({ msg: "Incorrect Password" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const create = async (req, res) => {
    try {
        const { fname, lname, username, password } = req.body;
        if (!fname || !lname || !username || !password) {
            return res.status(400).json({ msg: "Required fields are missing" });
        }
        const userData = new User({ fname, lname, username, password });
        const savedData = await userData.save();
        res.status(200).json(savedData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Export all controller functions
module.exports = {
    create,
    getUserByUsername,
    getAll,
    login,
    createTest
};
