self.addEventListener("push", function (e) {
  var options = {
    body: "New blog posted",
    icon: "https://switchon.org.in/assets/switchon/images/favicon-32x32.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "https://switchon.org.in/",
        title: "Open",
//         icon: "images/checkmark.png",
        icon: "https://switchon.org.in/assets/switchon/images/favicon-32x32.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(self.registration.showNotification("Switch ON", options));
});
