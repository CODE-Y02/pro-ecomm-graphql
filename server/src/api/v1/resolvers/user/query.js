const User = require("../../../../models/User");

const findOneUser = async (_, { input }, context) => {
  const { mobile, id: _id, ...rest } = input;
  console.log("DEBUG >>>>>>>>>>>>>> \n", JSON.stringify(input));

  try {
    if (!mobile?.trim() && !_id?.trim()) {
      throw new Error("Either Id or mobile is required");
    }
    const user = await User.findOneUser({ mobile, _id, ...rest });

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Create User: Errr", error.message);
  }
};

const getCart = async (_, { input }, context) => {};

module.exports = {
  user: findOneUser,
  cart: getCart,
};
