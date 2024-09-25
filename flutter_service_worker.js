'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b102803a00289b11eefedbd9a6dfcb25",
"version.json": "114abd6ee0a20d666901386f52941ce4",
"index.html": "9892f8bd1f709a3a07b5c48a7a11bb61",
"/": "9892f8bd1f709a3a07b5c48a7a11bb61",
"main.dart.js": "a2a5809e522d36be8b979d52d4e2a7f1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ad72c0c7ccf6001a5b8a95aa6720e0e",
".git/ORIG_HEAD": "948066a7c04628b93cccdabad8e08b21",
".git/config": "aa4ca3c15ada7f19091379dada6a2897",
".git/objects/3b/ff3f28075a4d3c4521989bae437a86eedc1219": "145be4e3581875efbd5e678eb57924e1",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/606da8bf4c850a0a567ecf1909e0e8d48fce16": "15733622331004fd2e6a8a27188ac57e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/8e2170360bf195c643ade8c6468e93b7b76151": "c96993afe98955d2e60a2de1dd3db44a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/de36181602afed659b79d94e85870751966c1a": "041868296d63b2b4bf8d984caf5719b4",
".git/objects/ac/9ee8d5c2f9fcb17f8cbe727cc0d3228e7f88b2": "39ee30546918139048914fd4879b7815",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/a3bf547dde57342f09bf277cd63d2a8ed1727b": "f07e20063abe8750f8f5097e103cab97",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/6474b3313428dce1bcb2d17d05b3d09113dc55": "05cf9b98f0c7d578446f4bd46d6c099f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/1eafe72f1878bc2ebee22bf1fd6d7a695020cc": "159ddac8610894c22bfe2e60ae1a8089",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/e1d2c556cb01b8beaed9a91b792ccaed341d14": "c5cba62f1ac5389d868ff07d8d5d6625",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/402eaf9462d69ed3e1ab0a094fbd9e140a52d8": "1e233f18aaee6a6ff9faea3f2203877c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/7b/efae0b1aa53bffdec9d2236a0ba0da579ca8d8": "882f9073bcc6b1184ec113debffa435b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fa0f3cdc81ffbc0007ace59264aa5a437423f4": "c8b4e411eb850b5197429ccefd2ba953",
".git/objects/4c/1e5063b3cc15d2afc2432d8a3b0d8ac06ccdb8": "9dd2842c32b36a54a831efc96df688dd",
".git/objects/72/ac41c8b737f1a415e55e1cbcc74284136dd9c6": "aa9e5ba6710489dbb0df22efaad93b70",
".git/objects/44/3eb1e74049ae34207d48cd015749bfcf1b0079": "09f46e0d1f2a1357aca662ce264cc855",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/6dc897eef4207f25202bf31073da0c24b6495e": "dbeeef8f515df5b9e5af07f6585b9e72",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/983b059e79214e65165e7ea289c1d2c91bb8eb": "5aa41415d5108c8e3890bfea29b9574f",
".git/objects/54/1cc9ef50347873297bb7d98222dcca279e8cc5": "ad371cee34c7bc3cf4e9079a663f1e60",
".git/objects/53/6b63a4b2a16ec75aebb95c7756676b3066faf3": "1df5f7a9f9ef106381b77dd3951690cf",
".git/objects/53/d114ede717d667a551d0d677c345ddcbc97a17": "6522a24cb007da165046f5516d8f34a6",
".git/objects/3f/8e63f470e8c1087cb767fe366e6821d42bf991": "9359bbc02ad9a8b263206c193814313d",
".git/objects/30/2ed7c7c6a24201a6241da482835e869db4d19e": "4d359cf825589ff2bb66db629fffe6c0",
".git/objects/6d/dc3cf39d7a4322e5af81296de9b23de66b52f6": "aed645e3368f299e444240ab90d496dc",
".git/objects/01/b5bdb264f05b69d729057a9bd7021f34fb37d1": "72b0f42bde45b6adfaec3e47750dc1c7",
".git/objects/64/aef98449ae331fc0e1ed8c86536008a9a683c8": "ed1c795efa78130576af03c66e2aca98",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d392dc3eeed6bfb8d56697b709b0111a50aa20": "7f68b7b40d622deaafe52067d5b52ee7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/ef08716efb75e1bc5ecf153c5a2f6d7489b39d": "f38ee1d4de2ca1c9fabdc32b14ecef91",
".git/objects/b6/8ffac9b146000911c3ee244132cac1df689450": "b24faf73416af9f88964e6dedc413745",
".git/objects/af/a23e35d3593a51f35a6595e618f87de16d15d7": "6e2a8710bdf3fb57292d35e4e18affaa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1804cc25ee9f264c902e25e078a5da55f51dff": "addf9524011db03f58cd457f1a60e4e7",
".git/objects/a1/3a1801fad4e4191549e6d76082a96bdb4a735d": "f0317bfc4175336e528f996cf4bac9c5",
".git/objects/fa/3ce00542508c1260ae16dd20f45a383565dc67": "51194b7a44735c66d22eac170d3d26b0",
".git/objects/ff/368ba77286938a3064d47f43b8e8b3e12c4d96": "ef8502448aff02653deb101acca8ebeb",
".git/objects/e9/17c79224b4ee39237d3c7c03cff432b1a0f487": "0a01305e5c404bda300be51b6cffa15d",
".git/objects/cb/e6c65ed69929df32fb4f6b6b175448beaeb578": "1b8582231e765bd8f5cf8af52587119b",
".git/objects/f8/6208917f4f692bbfc13ad7d2d4196954aa30e9": "c3569e36319dad86bbed94a144a545ea",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/1b/38db5bb69bf8e9f55e736f4a9e43363868e902": "59b133a279f25f5a58aef108883b4123",
".git/objects/70/d02932a3c4b026e6270925834b8eccb5f14140": "b87b22b1a5f00b127732fe3b0ddf6c7c",
".git/objects/70/84389a0737a97ba3f6d0758a2dd54ee01ea9a7": "36a9a8a900797cb5745f20d58d56eede",
".git/objects/1e/386a0879ef9b95f11e734a99a8f003b1e566bc": "5b7760d09d41a7ab1cf7a6bc0386fd60",
".git/objects/84/39c8f0751bd42c04c765944be452d98e30e06d": "1c6c9e83ba673a2a144993b79d4f4712",
".git/objects/23/ad8ad1ad00127a1c4f9ae51659476db90a80c1": "1e5a5c9b2aafbabf6cd5630c6db72109",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/31a4ecce1a9a1a549d63c7abcabdd59834bc6e": "8d4f2922d46f2e4ffdb3b091f7734a52",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/dffa0b962ef1fb468b7f9e492f7a3c86992cd9": "2e77739cec08784446c1fa18473b9b6c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/3ac4542934b03466abfb19f33cd6f314c723f2": "ac75d2a8342d76faf632796109fe8854",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ba0a2f495161f6f3c7984d25a0b4f5c",
".git/logs/refs/heads/main": "b45490511c7e80e405d1c8a877152809",
".git/logs/refs/remotes/origin/main": "a2be38c4acbcf99e57790a6d87749f5a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "520874cfdda7d6a3ae82a2bdb3cec983",
".git/refs/remotes/origin/main": "520874cfdda7d6a3ae82a2bdb3cec983",
".git/index": "b57841fdacb04b79d6759f208d34c26f",
".git/COMMIT_EDITMSG": "4cfaf0ff613a422703b8b43303a970e2",
".git/FETCH_HEAD": "c38a95ff7e97a16b01b16bb66ef5e648",
"assets/AssetManifest.json": "61ab5ae3ab8c094ecaa48b68d18bcd4e",
"assets/NOTICES": "0e0c24da3b2c0035ec99afeb92f3a008",
"assets/FontManifest.json": "8036f5273dfae06830bbe26e8be72df1",
"assets/AssetManifest.bin.json": "f39031e112b92682f53fdb0c923b4ad4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9c3eadabf7b3601970aa1d6e8cebb293",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/logos/img.png": "73a81110adce73acc9852d388dcffd8b",
"assets/assets/logos/frame.png": "71e6644bf24652d7a1b31d75d3108f3d",
"assets/assets/fonts/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
