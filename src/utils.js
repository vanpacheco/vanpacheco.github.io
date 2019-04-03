export const promiseSerial = funcs =>
  funcs.reduce(
    (promise, func) =>
      promise.then(result => func().then([].concat.bind(result))),
    Promise.resolve([])
  );
