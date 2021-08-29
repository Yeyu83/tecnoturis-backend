const User= require('../models/user.model')

const UserController = {
  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save()
      res.status(200).json({ user });
    } catch(error) {
      res.status(404).json({ error: error.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const { name, password } = req.query
      const user = await User.findOne({ name, password })
      res.status(200).json({ user });
    } catch(error) {
      res.status(404).json({ error });
    }
  },
}

module.exports = UserController;