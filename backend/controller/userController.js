const createUser = async (req, res) => {
  const { name, username, image } = req.body;
  try {
    let imageData = {};
    if (image) {
      const results = await uploadToCloudinary(image, "my-profile");
      imageData = results;
    }
    const user = await User.create({
      name,
      username,
      image: imageData,
    });

    res.status(200).json(user);
  } catch (e) {
    res
      .status(500)
      .json({ error: "A server error occurred with this request" });
  }
};

module.exports = { createUser };
