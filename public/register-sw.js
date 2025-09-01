(async () => {
  if (!('serviceWorker' in navigator)) return;
  try {
    await navigator.serviceWorker.register('/scramjet/scramjet.sw.js', { scope: '/' });
    await new Promise(r => setTimeout(r, 150));
  } catch (err) {
    console.error('Service worker registration failed:', err);
  }
})();
