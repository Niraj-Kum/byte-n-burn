/* byte_n_burn service worker: the app works offline. Bump VERSION to force an update. */
var VERSION="bnb-v2";
var CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(VERSION).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==VERSION}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
  var r=e.request;if(r.method!=="GET")return;
  var u=new URL(r.url);
  var isFont=u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
  if(u.origin===location.origin||isFont){
    e.respondWith(caches.open(VERSION).then(function(c){
      return c.match(r,{ignoreSearch:true}).then(function(hit){
        var net=fetch(r).then(function(res){if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res}).catch(function(){return hit});
        return hit||net;
      });
    }));
  }
});
