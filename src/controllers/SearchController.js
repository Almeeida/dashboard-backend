const User = require('../models/User');
const { mergeArrays, removeDupes } = require('../util/Util');

module.exports = {
  async index(req, res) {
    const { email, username } = req.query;

    const foundName = await User.find({
      username: {
        $eq: username,
      },
    });
    const foundEmail = await User.find({
      email: {
        $eq: email,
      },
    });

    const merged = mergeArrays(foundName, foundEmail);

    return res.json({ users: removeDupes(merged) });
  },
};
