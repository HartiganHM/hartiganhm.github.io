"use strict";var precacheConfig=[["/index.html","774b7eb09bb09ae9838875ffbe255513"],["/static/css/main.db001b7b.css","da744d004fd0e58a69fbf4e52ba8b23b"],["/static/js/0.64de7d3c.chunk.js","c748cae989b9dac47060edc867537f75"],["/static/js/1.b46f832a.chunk.js","b2bc32d5e89e32007024de5b1239c806"],["/static/js/main.d69752d8.js","219aa1221ae09537410f828b7d35cf2a"],["/static/media/Hugh-Hartigan-Resume.0dd714ab.pdf","0dd714ab1778cf53f3648b489855cef4"],["/static/media/Hugh-Hartigan.6118edda.jpg","6118edda8634fecbef360da73176c1f8"],["/static/media/Wordmark-Blue.b4a74906.png","b4a749066c617149abe15ff478302123"],["/static/media/Wordmark-horizontal-blue.7d049145.png","7d049145a7440e3a11782fe36fd87882"],["/static/media/Wordmark.19e8a306.png","19e8a306ab6a9035368f45a595c7d000"],["/static/media/movie-tracker-screen-shot.7e05f88f.jpg","7e05f88fbba260f32a94a6b67eadcf5b"],["/static/media/open-source-blog-image.2c75c807.jpg","2c75c807ddc09ad2df981496a6aeda1e"],["/static/media/our-planet-screen-shot.08886c24.jpg","08886c24847c442e123800a0dfbd6329"],["/static/media/palette-picker-screen-shot.79af2bde.jpg","79af2bde7a93a83f232b9a76f6b92e3b"],["/static/media/spirit-screen-shot.3be99835.jpg","3be99835698fd9033fb5f1a7ad46199f"],["/static/media/swapi-box-screen-shot.2882a907.jpg","2882a907bd7a88f4fce7d0e77cb816d4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});