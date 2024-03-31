self.addEventListener("push", (event) => {
    const data = event.data.json();
    const title = data.title;
    const message = data.message;
  
    const notificationOptions = {
      body: message,
      icon: "/windows11/LargeTile.scale-100.png",
    };
  
    self.registration.showNotification(title, notificationOptions);
  });