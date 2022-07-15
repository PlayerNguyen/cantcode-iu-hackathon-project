const isProduction = process.env.NODE_ENV !== "production";

const debug = (...args) => {
  if (isProduction) {
    return;
  }
  console.log(...args);
};

module.exports = { debug };
