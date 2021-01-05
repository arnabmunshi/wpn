var push = require("web-push");
let vapidKeys = push.generateVAPIDKeys();
console.log(vapidKeys);

// on terminal
// $ node generate-key.js
