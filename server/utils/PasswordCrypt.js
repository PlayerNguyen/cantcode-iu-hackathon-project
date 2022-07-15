const bcrypt = require("bcryptjs");

const saltRounds = process.env.BCRYPT_SALT_ROUNDS
  ? parseInt(process.env.BCRYPT_SALT_ROUNDS)
  : 10;

const PasswordCrypt = {
  encryptPassword: function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
  },

  comparePassword: function (password, hash) {
    return bcrypt.compareSync(password, hash);
  },
};
module.exports = PasswordCrypt;
