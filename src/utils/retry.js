// https://goenning.net/2018/11/16/how-to-retry-dynamic-import-with-react-lazy/

function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, interval, retriesLeft - 1).then(resolve, reject);
        }, interval);
      });
  });
}

export default retry;
