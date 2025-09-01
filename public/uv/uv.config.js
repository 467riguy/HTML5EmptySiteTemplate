// Ultraviolet Static Config
self.__uv$config = {
  prefix: '/service/',   // Where UV serves pages
  bare: [
    // Replace with your Bare backend URL:
    // 'https://your-bare-instance.example.com/bare/'
  ],
  encodeUrl: (url) => __uv$encode(url),
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js'
};

function __uv$encode(url) {
  try {
    return window.__uv.codec.xor.encode(url);
  } catch {
    return encodeURIComponent(url);
  }
}
