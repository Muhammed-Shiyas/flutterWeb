'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ade03a47654252eda12034e9e06c95ec",
"assets/AssetManifest.bin.json": "896b45fdec836b8e64f497346566b4b6",
"assets/AssetManifest.json": "58585325c721f1417f99d53c328d8a98",
"assets/assets/appIcons/about-me.svg": "5ba132bea54172ff907c80a48093f459",
"assets/assets/appIcons/app-store.png": "f0f46797f162fce23dbeff8ee177a2e7",
"assets/assets/appIcons/app-store.svg": "87e208948ff1d45be6e459c36b046d13",
"assets/assets/appIcons/apple-music%2520(1).svg": "f7373033c779bb4e9435aff29bd27847",
"assets/assets/appIcons/apple-music.svg": "f7373033c779bb4e9435aff29bd27847",
"assets/assets/appIcons/apple-tv.svg": "65037e20ce23a7cb4871e294cf6f226b",
"assets/assets/appIcons/camera.svg": "1bf186db7cc10abf55bd4c3137c432c9",
"assets/assets/appIcons/clock.svg": "28e30be3195ee2799a09b909a03334c0",
"assets/assets/appIcons/contacts%2520(1).svg": "19444257c2273c213a6633b3db3a0e5b",
"assets/assets/appIcons/contacts.png": "4ab41dfc46c1aa5e9bd838702d41c976",
"assets/assets/appIcons/contacts.svg": "19444257c2273c213a6633b3db3a0e5b",
"assets/assets/appIcons/facetime.svg": "c22249c8d0485889d0107dffce7da733",
"assets/assets/appIcons/github.png": "0147d5393877baa41856aa5f862cd5d5",
"assets/assets/appIcons/github.svg": "76d344f08412543c74ccd1fb2493d607",
"assets/assets/appIcons/ios-message.svg": "e4984dffd476373078a89e5b77fd1de8",
"assets/assets/appIcons/linkedin-logo-2430.svg": "31c7474cfa1ab61ca522a1e0948e1e78",
"assets/assets/appIcons/linkedin.png": "2e51cec4dc8a907a1c1767a03903ceac",
"assets/assets/appIcons/photos.png": "f61b9b5d4783af65a87e575b624a5c04",
"assets/assets/appIcons/safari.svg": "781ef5409a6e4fe83e90bd59a758ff7a",
"assets/assets/appIcons/settings.svg": "b92c129b81e46500c0ea52996be639c2",
"assets/assets/download.png": "5350878fab268450086953977bdf4599",
"assets/assets/images/battery-signal.png": "089b7a446eaaa40ea1ebe9921e4e2e29",
"assets/assets/images/camera.png": "6f387e84d3b545a29ee94985e4feb41a",
"assets/assets/images/Cloudy.svg": "7996c321fd1265661fea90d3a7776ed5",
"assets/assets/images/CloudyRed.svg": "9f83b2763e7cffc684a1b4c0606f8732",
"assets/assets/images/flashlight.png": "7e0b34dc69b78be77c1e858d9e96ee33",
"assets/assets/images/iphonelock.jpg": "e1ada97285938299197a25557c50a02d",
"assets/assets/images/Lock.jpg": "bf253e5d21c9a49482f2ad39b82fa344",
"assets/assets/images/projects/0.jpg": "543905a58017ebb67acc5cbfda8ea44e",
"assets/assets/images/projects/1.jpg": "d970d89f60c02ae38446dbe91d5afc06",
"assets/assets/images/projects/2.jpg": "da8d4a044e228337c36074a2287834a4",
"assets/assets/images/projects/3.jpg": "2f86b9b04ddc16995612a604f04614d1",
"assets/assets/images/projects/4.jpg": "fe122b4fa3d19a7d96c26eace3a25a86",
"assets/assets/images/projects/5.jpg": "da8d4a044e228337c36074a2287834a4",
"assets/assets/shiyas.png": "1c1cacd2a3d180fde3e109cdfe7dc222",
"assets/assets/space.riv": "b904c7eb4a052e845c3495201d11913f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8c56fcb008dd0a6fcd39b5f2ab2bd57a",
"assets/NOTICES": "6459a44a37dc0fa63d316cea2f4068dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b62243b064d440b462fa1eed7d9afea",
"/": "3b62243b064d440b462fa1eed7d9afea",
"main.dart.js": "9597cf60fab17d464b62572ec385804f",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
