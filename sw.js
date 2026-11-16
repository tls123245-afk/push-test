self.addEventListener('push', (event) => {
  const text = event.data ? event.data.text() : '폰으로 온 알림!';
  event.waitUntil(
    self.registration.showNotification('성공!', { body: text })
  );
});
