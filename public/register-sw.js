(async () => {
  if (!("serviceWorker" in navigator)) return;

  try {
    await navigator.serviceWorker.register("/uv/uv.sw.js", { scope: "/" });
    await new Promise(r => setTimeout(r, 150));
  } catch (err) {
    console.error("SW registration failed:", err);
  }
})();
