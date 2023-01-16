require("dotenv").config();
const MQTT = require("async-mqtt");

const mqttConnection = () => {
  const { HOST, WS_PORT, TCP_PORT } = process.env;
  const options = {
    host: HOST,
    port: TCP_PORT,
    protocol: "tcp",
  };

  return MQTT.connect(options);
};

module.exports = mqttConnection;
