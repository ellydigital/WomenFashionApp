'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "8d5d2c0c528ef31be9072c006e475073",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b79c661eb469f173e9d0df68a22da35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "08ecd2fec1be1571e18673bb9c3e9bfe",
".git/logs/refs/heads/master": "08ecd2fec1be1571e18673bb9c3e9bfe",
".git/objects/04/404c395ccd6bf7a70d822e4d0db9e4ba59d035": "e6ed9e4a9f50dd9f6deac79e9dfbb759",
".git/objects/05/7ca65083cd5fe6dd273e437b7cc138fa5bc4d2": "1d5835cdd51eb9b72769add43d99bd99",
".git/objects/0a/05bae635bd8479b9c4915b68d6c032dbe5c951": "b485cbc2b5a2b389669e7eed6e986c3b",
".git/objects/0b/52905b27cb075c1499c6ffe41ba6e5ebaa7f93": "2a7bb3695183af03130392c4b91cfa33",
".git/objects/0e/5bfaa89cc3a9157b57a5617dc3c7601a5a35bd": "da30bf6ed3d6970a4b8b9914c098296d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/237daaa3f8fa0c110c232aaffe0be4c5721e3d": "ed6badff92527d798277870d77806b8d",
".git/objects/17/51f0f4a2a3ae6374d20d3a9f06ee1330bcc581": "e7ef26ee26480f7e41da82f695814e31",
".git/objects/23/5ce86b6dbad228c2e2aace68ae5c2138e44f22": "6a225d8938a71add0b8c2d0f2ce51aa4",
".git/objects/24/b4a9e4eb42544e9b5172ae9f6467aa0bfd2396": "b41daec27b322906cd538303d4ab71d0",
".git/objects/27/ba90b564692ae47eed6cafafe82d64e84011b4": "c506a5656e8d4a01c04ddf270e8f0745",
".git/objects/2a/27a796b9226230b4d7c16b99d1a35b6dc70d0d": "00d9699bc62b564f4371c8c2b8601971",
".git/objects/2a/c329501c6aacb8da1d088cc389a5d9de958aa2": "b3c006f16c237172d217765345c6348e",
".git/objects/2d/facbf4a299abcc892ee331c40dc0ab254b96ec": "e3ee1f87fd54c70492f3d8ccf5b9f5d9",
".git/objects/30/7150725d851e85996353f782ecc2aac9a5d8e2": "8b50744b4ab5549e1bfbf7bf461baf34",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/40/608a95043b3f978af7ea5461db767a71cd4eba": "66ead2a8fa92bc82c47e2258269bf1a8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/16ae59e0276da36572fb833863925f991f3d05": "c0fa8af1ac8cfb1f31e67cf042e4caf9",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/28bf01f3e2c69d6fec80313c887842e084da36": "6ef86966bd1be9bc0324b66f356401e1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/1f359581b50880d05a9dbcfc0164ce59935dc0": "e53cd33d12781eabc62f30a0c2d6c0f8",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/0b5cdbe7672bda4e886f8b40425880051acea2": "228ab9b30dbfd3157d014eb88f8f16b2",
".git/objects/58/de61a337ad7104902c6584d5543573b6abb9e4": "96c4696f91c1e7abcb1d59019b1bd672",
".git/objects/5c/c8aeff60c188c1963e4d1e3d10fef06925a584": "4fe5afc9f9a98eb9dc6d412ff918b64e",
".git/objects/64/dc91f62396ee695782c82543a607b46490d132": "b541765358f3bf56c56e77bb3e927e0f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/9241e53fa1d44e85585f426a6609ac68ab7964": "1665fb76d6ce6896f932eef609f3a17d",
".git/objects/6c/521f2f4a6fa0d77a9c5d6dc8a09bb728f7cd6d": "af6a251d7197d60189964d022141f10a",
".git/objects/70/0d22a242189540e5c56bc44fdcbdf54d47eb89": "626fa3a8a66dcf8248095952d57f4d5c",
".git/objects/70/57367c59cdea053628e02ff714487bed66ca25": "d0688d66c674bafcb6fc9dabe3424bec",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/104239bf9a5b9ae8576c525c166f43dd01dc73": "5d4373527904f8233dbcc7065111f7e7",
".git/objects/7c/c18557c18fe3aa494aca4b87dc1e6596df27e6": "f16752a5bc9524527d52c09061f2246f",
".git/objects/85/ada981ba4c6099ae49c86260038d47f589717d": "76b00318b5c176ff3bb01f7d367a463a",
".git/objects/85/f07f0d11c4a4c0137928c694bd12c2a4983b34": "4099781497a0711d66616f09225c3718",
".git/objects/87/cb8dee27eefc715a1391f96d7fd359eaa5d399": "678a0386779180499588cc6f000967e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/9b/07e712f809eed8d4928282c5ad47f7d31c427e": "a3f07b90f752f4cf34dd41d831b1e126",
".git/objects/9d/8f1041862a01e99fd51512782b20efedf98878": "fd53c3eb4b6ded350c8c367088ca7645",
".git/objects/9f/722f83fa8e4ac6e2de24982534117788e776e7": "c92088a4653c7d16a4bd1b0758793a54",
".git/objects/a0/01a4566c3ba698b04445fd508e20663555e47d": "a66d651c71e8dcfeec0510b677a66dc8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/4ffe047bf3d309b66b2bc56b98a925afc5bfac": "eb3058ed8a000737ae7d9459f74847a8",
".git/objects/a4/072ad99772de8d2089084ca3bb5d463c20a55a": "857514ac1267d76e5f6689da2241142c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/2df9475e0df796063cd7d439b60dd32b8a6023": "78af94b8a0c16d41acc629f1515b16ea",
".git/objects/b2/1d68584dde3c15d10fe2c03353374931ae88be": "7a9dcfc8da838951c2ed30721ef59f72",
".git/objects/b4/556ada0322eb4825e8c2183b39e5f0e7632c25": "e9eb1a7c5bea3c6c7324ff26bdde4c87",
".git/objects/b5/5dceeefc0f36d208ecdf698f45373cd04cd654": "3091dcb8c2fdee76ba39a66071d5e63e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7c0e5af333c65e0207cdb4d4735dfcb20236fe": "3c59b9d354f13d706ec98c1468123723",
".git/objects/d5/561a1363d6e4a9197f83e3051298767dc39d62": "65c17cd11b856c9483cb4f26898b74d6",
".git/objects/d5/70c57f707a3d4e81458c49f3e165204a815533": "521a26fb3f192ae39daec54c931c5034",
".git/objects/d5/f6e1b9bca02de55c3980eba203cccf5d3656da": "63ac16f6fb414c0ab0babda7e81cb232",
".git/objects/d6/4641d7127ab567afbf41e99222712101b30dbb": "d5a9edfa600f68512b8c67f386729248",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/31b29ebb9c6069bbd1c4bbc8b6d0678d5748c6": "bfbeb8235ad553e4462af24d8d4f77b6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b3494061faf3e2969154b7fa321838bdc93466": "4cffc667e9937243ad79a9a300ceffa6",
".git/objects/ed/43c9c9642fe7ae2c8eb6f820a64ed94e4539a0": "130b9d48594de010aa733ea9bd6d1b01",
".git/objects/f4/ffefec2489f9d941c06fe6a637e1f75a86136a": "ee647d8a53438350838b8cfcd480f88d",
".git/objects/f9/8c473eb2dc75279bdfb57f3e397a0cf888bc74": "4f7ed3c5bedd74f1581accbdca62c511",
".git/objects/fd/395860a90b2a0af1c17ca016e283002743f805": "f7aab318a26b13e91068f0e76691e090",
".git/refs/heads/master": "5caf883e1280f3e3661d248a7c0f9feb",
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
"index.html": "c8f82a36ca934756bde38dc53d07b64a",
"/": "c8f82a36ca934756bde38dc53d07b64a",
"main.dart.js": "254df1fd5088e469f5756bd793ac9574",
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
