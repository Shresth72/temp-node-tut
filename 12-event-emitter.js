const EventEmitter = require("events");

//instance of event class (object)
const customEmitter = new EventEmitter();

//First listen to the event then emit the event with the same response text or var
customEmitter.on("response", () => {
  //"response" - name of event
  console.log(`data recieved `);
});
customEmitter.on("response", (name, id) => {
  console.log(`some other ${name} ${id}`);
});

customEmitter.emit("response", "john", 34);
