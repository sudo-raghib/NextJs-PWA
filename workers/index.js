self.addEventListener("push", (event) => {
    const data = event.data.json();
    const title = data.title;
    const message = data.message;

    console.log('From servic worker: ', data);
  
    const notificationOptions = {
      body: message,
      icon: "/LargeTile.scale-150.png",
    };
  
    self.registration.showNotification(title, notificationOptions);
  });
  