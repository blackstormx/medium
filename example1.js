function asyncEmit(eventName, data) {
  return new Promise(function (resolve, reject) {
    socket.emit(eventName, data);
    socket.on(eventName, result => {
      socket.off(eventName);
      resolve(result);
    });
    setTimeout(reject, 1000);
  });
}
