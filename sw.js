self.addEventListener("push", function (e) {
  if(e.data) {
    console.log(e.data.text());
    var payload = JSON.parse(e.data.text());
    var title = payload.data.title;
    
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
          // icon: "images/checkmark.png", // optional
        },
        {
          action: "close",
          title: "Close",
          // icon: "images/xmark.png" // optional
        },
      ],
    };
    e.waitUntil(self.registration.showNotification(title, options));
  } else {
    console.log("Event does not have data...");
  }
});
