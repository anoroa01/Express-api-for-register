const User = require("../schemas/userSchema.js");

const controlRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send({
                message: "Account already exists"
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.send({
            message: "User created successfully",
            user
        });
    }
    catch (error) {
        console.log(error)
    }
};

module.exports = { controlRegister };