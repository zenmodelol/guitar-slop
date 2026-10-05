// Fretwork offline cache. Bump VERSION when you replace index.html.
const VERSION='fretwork-v8';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET')return; const url=new URL(e.request.url); if(url.origin!==location.origin)return;
  const isPage=e.request.mode==='navigate'||url.pathname.endsWith('/')||url.pathname.endsWith('.html');
  if(isPage){ // network first: updates arrive as soon as you are online; the cache is the offline fallback
    e.respondWith(fetch(e.request).then(res=>{ const copy=res.clone(); if(res.ok)caches.open(VERSION).then(c=>c.put('./index.html',copy)); return res; }).catch(()=>caches.match('./index.html')));
    return; }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(res=>{ const copy=res.clone(); if(res.ok)caches.open(VERSION).then(c=>c.put(e.request,copy)); return res; }))); });
