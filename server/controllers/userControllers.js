const registerUser = async (req, res) => {
  const { name, email, password, pict } = req.body;

  res.json({ name, email });
};

module.exports = { registerUser };
