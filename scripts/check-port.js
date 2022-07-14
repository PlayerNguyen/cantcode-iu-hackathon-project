const detectPort = require("detect-port");
const port = process.env.PORT || 3000;
detectPort(port, (err, _freePort) => {
  if (err) {
    console.log(`Port ${port} is already in use`);

    process.exit(1);
  }
  // console.log(_freePort);
});
