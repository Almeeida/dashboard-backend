const User = require('../models/User');

module.exports = {
  async index(_, res) {
    const users = await User.find();

    return res.json(users);
  },
  async store(req, res) {
    const { email, username, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        email,
        username,
        password,
      });
    }

    return res.json(user);
  },
};
