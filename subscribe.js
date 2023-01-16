const MqttJS = require("./mqttjs");

(() => {
  const mqtt = new MqttJS();
  mqtt.subsribeTopic("mqtt-js");
})();
