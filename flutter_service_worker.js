'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4315677f4e796433a89604dc9d7d71d5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/images/icon/Accessories.png": "c94f33ea47862aea79a52425fc034ebf",
"assets/lib/images/icon/all.png": "8430bd460b3c357ae2a761ca6b36c72b",
"assets/lib/images/icon/Bags.png": "277d2938ac198ce2552134a3f61209a1",
"assets/lib/images/icon/Clothing.png": "f6b8d2cddb0efcc9bf45ee923062ccdf",
"assets/lib/images/icon/Footware.png": "321eda4d422bfc1ef1b94af75975ebd4",
"assets/lib/images/icon/Sports.png": "079f2345c9b65bb2a3ec9b1f8f49aa09",
"assets/lib/images/intro/open1.png": "3f448ef73fe40208f754d01e750b148b",
"assets/lib/images/intro/open2.png": "32d61b9ee239174526b93b80b811d194",
"assets/lib/images/intro/open3.png": "5b6a24a010002a390e04262a92319ccd",
"assets/lib/images/pp.jpeg": "b1824cc3541deca7d77d78c6c46f726b",
"assets/lib/images/product_image/BiHOTZ.jpg": "de263cccd4abb2afd8bcf199403891b2",
"assets/lib/images/product_image/Black%2520hand%2520bag.jpg": "932c9a2af527c7a17b172953a39fdfda",
"assets/lib/images/product_image/Blue%2520Heels.jpg": "297cdf71612628b955b02ceed24f3a4f",
"assets/lib/images/product_image/Boxing%2520gloves.jpg": "ad8dd76734db147cc903a59d2e123eca",
"assets/lib/images/product_image/Brown%2520coat.jpg": "32a9c9c6fb00d78c38356d594b535307",
"assets/lib/images/product_image/brown%2520leather%2520bag.jpg": "925ac74940cf564d6cd781a663b59446",
"assets/lib/images/product_image/Classic%2520hand%2520bag.jpg": "84a1ab4498679bbba8e1dd57b498366b",
"assets/lib/images/product_image/classic%2520heel.jpg": "516d49fc69e785733370d002a351c16b",
"assets/lib/images/product_image/Classic%2520watch.jpg": "8c66dde0d372c8576aec12d43a97f985",
"assets/lib/images/product_image/Fashion%2520aesthetic.jpg": "e45e109314cd0696bb1ad5487b4446e8",
"assets/lib/images/product_image/Fashion%2520Sneaker.jpg": "08859c5664b4dada31e19eff0f1fc99e",
"assets/lib/images/product_image/Hand%2520beads.jpg": "a84546c316d7deee209b94d97317fdc7",
"assets/lib/images/product_image/Helmet.jpg": "4467fee45ad607f161319cbcee76c645",
"assets/lib/images/product_image/Jean%2520Jacket.jpg": "c4dd145d1d0a1c220d4872fe37810816",
"assets/lib/images/product_image/jump%2520suit.jpg": "712f8b84f3ed78116100ff2f0741dc00",
"assets/lib/images/product_image/Luxurious%2520bag.jpg": "21e9fe50017b76d35ee78cbc62c9f4d1",
"assets/lib/images/product_image/Nike%2520Sneaker.jpg": "2350df3cffec452e8937041d15020f45",
"assets/lib/images/product_image/Pink%2520Sneaker.jpg": "c5df8a9384432411dc1699d28d1ff85f",
"assets/lib/images/product_image/Red%2520coat.jpg": "61e0341cbaebecf862ae659b294e863d",
"assets/lib/images/product_image/Short%2520Gown.jpg": "a83f52d5762de43a01782fdfee989ed9",
"assets/lib/images/product_image/Soccer%2520boots.jpg": "48b4e2a1d300565edde6112fcc1fd50d",
"assets/lib/images/product_image/Sport%2520bra.jpg": "1741144dea168f2d3731a9e8056b1364",
"assets/lib/images/product_image/Tamara%2520purse.jpg": "9ff4fbe48139d866d846c2493edb068a",
"assets/lib/images/product_image/Umbro%2520Kaixi.jpg": "462de58a66f1f7daf1a63287800c2d71",
"assets/lib/images/product_image/vintage.jpg": "e7dc170f0c7f75341a6d5bc7a7d77fd6",
"assets/lib/images/product_image/White%2520armless.jpg": "e65d52466001eab6e6b65182352f53da",
"assets/NOTICES": "6535cc0286204b684d5a4419440ba3ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8fd85b534461ad0e939fe304d2d66009",
"/": "8fd85b534461ad0e939fe304d2d66009",
"main.dart.js": "62d405436caa2e84cebe43a30e66d063",
"manifest.json": "bfb1f22b98ce261f6c8cc307642e1756",
"version.json": "03b68e0689cf105c9a73488699b6aa17"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
