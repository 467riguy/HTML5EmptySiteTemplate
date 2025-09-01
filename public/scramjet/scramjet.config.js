self.__scramjet$ = {
  prefix: '/scram/',    // URL prefix for Scramjet proxy paths
  encodeUrl: url => {
    try {
      return window.__scramjet&&window.__scramjet.codec.base64.encode(url);
    } catch {
      return encodeURIComponent(url);
    }
  },
  handler: '/scramjet/scramjet.handler.js',
  client: '/scramjet/scramjet.client.js',
  bundle: '/scramjet/scramjet.bundle.js',
  config: '/scramjet/scramjet.config.js',
  sw: '/scramjet/scramjet.sw.js'
};
