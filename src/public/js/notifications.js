// vim: set ts=2 sw=2 et tw=80:

// register the push notification service worker
navigator.serviceWorker.register('/service-worker.js');

// Magic to convert a base 64 string in binary format (as byte array)
const urlBase64ToUint8Array = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

navigator.serviceWorker.ready
  .then((registration) => {
  navigator.serviceWorker.controller.postMessage({
    type: 'user',
    data: window.USER
  });
    // Use the PushManager to get the user's subscription to the push service.
    return registration.pushManager.getSubscription()
      .then(async function(subscription) {
        // If a subscription was found, return it.
        if (subscription) {
          return subscription;
        }

        // Get the server's public key
        const response = await fetch('/notifications/vapidPublicKey');
        const vapidPublicKey = await response.text();
        console.log('key', vapidPublicKey);

        // Chrome doesn't accept the base64-encoded (string) vapidPublicKey yet
        // urlBase64ToUint8Array() is defined in /tools.js
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
        console.log('converted key', vapidPublicKey);
        // Otherwise, subscribe the user (userVisibleOnly allows to specify that
        // we don't plan to
        // send notifications that don't have a visible effect for the user).
        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey
        });
      });
  }).then(function(subscription) {
    console.log('subscription', subscription);
    // Send the subscription details to the server using the Fetch API.
    fetch('/notifications/register', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subscription: subscription
      }),
    });
  });
