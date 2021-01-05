var push = require("web-push");

// get public and private key from terminal
// please go to generate-key.js file
let { publicKey, privateKey } = {
  publicKey:
    "BOsTwJiDWPhu2B47CMUsDflQfbHoHIh_TZ8LX547xHwdP5LdMOtB9XLoK2upwZ0GtpWxjSUxnb8GAob9BjZKNfc",
  privateKey: "T3fUugdZ0mGo0Uy8O1SpNEMWa5jLxoALaiL9aM3YliY",
};

push.setVapidDetails("mailto:test@code.co.uk", publicKey, privateKey);

let sub = {};
push.sendNotification(sub, "test message");
