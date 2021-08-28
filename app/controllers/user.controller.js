const UserController = {
  getUser: async (req, res) => {
    try {
      res.status(200).json({ user: null });
    } catch(error) {
      res.status(404).json({ error: 'error' });
    }
  },
}

module.exports = UserController;