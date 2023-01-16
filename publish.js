const MqttJS = require("./mqttjs");

(() => {
  const mqtt = new MqttJS();
  mqtt.publishTopic("mqtt-js", "hello world");
})();
