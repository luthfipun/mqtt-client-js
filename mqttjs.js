const mqttConnection = require("./connection");

class MqttJS {
  client;

  constructor() {
    this.client = mqttConnection();
  }

  subsribeTopic = (topic) => {
    const sub = async () => {
      try {
        this.client.on("message", (topic, message) => {
          console.log(topic);
          console.log(message.toString("utf8"));
        });
        await this.client.subscribe(topic);
      } catch (err) {
        console.log(err.stack);
        process.exit();
      }
    };
    this.client.on("connect", sub);
  };

  publishTopic = (topic, message) => {
    const pub = async () => {
      try {
        await this.client.publish(topic, message);
        await this.client.end();
      } catch (error) {
        console.log(error.stack);
        process.exit();
      }
    };
    this.client.on("connect", pub);
  };
}

module.exports = MqttJS;
