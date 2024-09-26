'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "262487935bf3b3e13adc6907e5367c4b",
"version.json": "114abd6ee0a20d666901386f52941ce4",
"index.html": "5dee795ea26798175c37474048b5bf33",
"/": "5dee795ea26798175c37474048b5bf33",
"main.dart.js": "3b3cae390b96991035caf157ae67409b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "28a6414187fc168f92633ceffedb50dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ad72c0c7ccf6001a5b8a95aa6720e0e",
".git/ORIG_HEAD": "948066a7c04628b93cccdabad8e08b21",
".git/config": "aa4ca3c15ada7f19091379dada6a2897",
".git/objects/0d/5f9702cad547e616ae4c08a3909266f2bb307b": "8d936a2872ee6646f7fa8062fb149e38",
".git/objects/95/ee17eb45bad459be9f9e1da5971b3ec5c7029f": "28e77978a658e4d0c479de6cbdcb6d02",
".git/objects/95/62059c813af21554539e3a737ae30e94891044": "6d078882e15d690cc6cbcfcc161250e8",
".git/objects/0c/6ec60d5b8dd812182c3e95e15bd8dc5786f44a": "cfc40d8fb33880e11c69e2b41df8b129",
".git/objects/66/0b990b435ccd3e23e8f7985037038c46607639": "5efbb380c38d8e31c37511b08d78785d",
".git/objects/3b/ff3f28075a4d3c4521989bae437a86eedc1219": "145be4e3581875efbd5e678eb57924e1",
".git/objects/6f/11af611d26caf43c81ccce0742452468e1266a": "908e78efe57af4674f3b6a713ff021b7",
".git/objects/6f/bcc92aec9cb9d8360b60416549dd67aeb5862a": "6f4086bc14f1a86c7fc55abaea2e7cfb",
".git/objects/6f/561896f540139f0efc2b1dfcb8118a5fd87f63": "fc67908e9fb698ac4bd8c7028f16aebe",
".git/objects/9e/e6fabd54b343caadd4854db04e146a3a635c38": "c5d9bfc221e67c46d72959550fc8244c",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/30f9119de1eae4460adc9471bdb673d7295181": "0f4ef4a7e6355d73686efcf16a8060ec",
".git/objects/69/606da8bf4c850a0a567ecf1909e0e8d48fce16": "15733622331004fd2e6a8a27188ac57e",
".git/objects/3c/6fd193d3dc0e6ce0ac4a5571fe6d970c474151": "46be765e262fab40ad61caeb6d312bb7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/95366f5e9eb60b1a0cdfcefcc0646e6f37af12": "18df6f5aefbbcfada0e141e55ab5ee2a",
".git/objects/94/4f01620970449a7fe5a827cc9368ed53a44eec": "0df77900253d3186a95ef8233226e314",
".git/objects/94/91700374e7647da88a67caf864cb03c58a8c63": "4dfb09b85046381b71327db6bf97faac",
".git/objects/94/8e2170360bf195c643ade8c6468e93b7b76151": "c96993afe98955d2e60a2de1dd3db44a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/1996636e5104443ee62df345d2db873ec32918": "2d1fe26a00099b3d38126c7fe2c67967",
".git/objects/0e/de36181602afed659b79d94e85870751966c1a": "041868296d63b2b4bf8d984caf5719b4",
".git/objects/5a/052967a8242045239fab66cb12a7fe8335bb0c": "75f23a909ee01c9e0d978d35438f8088",
".git/objects/05/3185e5d299739eee7218f2e93876f0c3a5463a": "d1031cd0f181a1e34b10b17db26a2038",
".git/objects/02/165ac28ec61e0ec18fea209f95009b5212d111": "09d38e6d1d4e346c2c68ce1fb76f1c2b",
".git/objects/b2/faab71c70eb494df934ec11be5d3c7130d08cb": "63b4015a805999f7df823616ff8445a4",
".git/objects/ac/bb83608532d0610d6f4e1fd1cd3c0b04082d0b": "40ac85d2d96a7c5454e6256f9131037a",
".git/objects/ac/9ee8d5c2f9fcb17f8cbe727cc0d3228e7f88b2": "39ee30546918139048914fd4879b7815",
".git/objects/ac/aa3722f45b4aae413f5731c71ceea3a0c51d9b": "3f58af04f46cd06722d4898a3b7fc941",
".git/objects/ac/1076e7ede666ce985cc5b6c27060bd2f153acc": "ea0b6bf4e46e6e50d5859efab9d2bed7",
".git/objects/b3/b38329288ffc8b3d83fc756d53105deeca81e3": "59a040e460b0410c5911edd7f46eacaf",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/c9ddd7981550090c189cc6b495a54dfa1530a8": "f2355816bcb79831e2b189f8eb808881",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/7fb6b1d71613e31dca8beb9934ff45d98c3345": "85427fe4177db004386cba3560245070",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/39390bc738a8b21f1646171420de3938ad265d": "c1cb158974dc8da38ecf5593946b7884",
".git/objects/ab/ac72a126b2e06993be27ea5f13d65c47673596": "e7b64c218144d830acc46b389ba2f726",
".git/objects/ab/8146f510ff256964aebca4425d7a7490bd4938": "9c8f49aba7c3522374fa2e6c7c66bc37",
".git/objects/f3/a3bf547dde57342f09bf277cd63d2a8ed1727b": "f07e20063abe8750f8f5097e103cab97",
".git/objects/f3/64169c419dedc97ba2e24e21ebe708d63c982d": "705d8a2a05e22d774ab17e02b6b1bb5b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d7049ded0dab0bf7ea05a7c4059d873eb72978": "b8ff26a4779374ce452d164bfdff35dd",
".git/objects/ee/adae77cd89be660207da76a75d328a1c64829b": "831b0aa1505c7e141dfcbda67d1d3153",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/7c7e882e0cbb31e046bf025f5426eae736089b": "17bfe768000c0f7cf1647a26807be6af",
".git/objects/fc/6474b3313428dce1bcb2d17d05b3d09113dc55": "05cf9b98f0c7d578446f4bd46d6c099f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3f1083eae0055fa08c66bde265d66748b7d306": "81485925d2f02008e6bd41f6580cd5b7",
".git/objects/f5/6ea95a9445edfd52a84b3fc901dd7f62b8ebbf": "633a3f0bd29281523cf2e12f159a1bef",
".git/objects/ca/1eebbe1f1952cbe567abcef415ffb726453028": "6caa53cd36a8f6418d3400ad67c26c9e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/2b1dd48fb0cd552f18a8d6a999117aadd02b0e": "e8fb4d332a39847c61e121a776dc80e0",
".git/objects/ed/6b35bf5a869e93f40322df67559d58b4669d77": "b25d9575753bdb24b9e446499597bf00",
".git/objects/c6/1eafe72f1878bc2ebee22bf1fd6d7a695020cc": "159ddac8610894c22bfe2e60ae1a8089",
".git/objects/ec/0fac4f75c2b499e1f6ffc913e857a6dad4f4ec": "f8b3649fca5334a758baaa4f3789020e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/9ce9d0c60c76251cf57657cee1e3e068feaaab": "a4a9e29fbae182a03bbf2790b10f6b59",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/28bae2cc979ae4b813a194eecba4f08f7a0c0e": "a185433607151aa83ec7b1a444b92ac4",
".git/objects/11/eb7efdfc6b9642696bb6983952e7c20a1c9536": "c15596415e75cab65f0a95f7b908e279",
".git/objects/11/e1d2c556cb01b8beaed9a91b792ccaed341d14": "c5cba62f1ac5389d868ff07d8d5d6625",
".git/objects/7c/45d80c6e401ae755973641836f91d67d1f47d6": "8a3aac73c83e4455ee1704ab0d89f32c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/402eaf9462d69ed3e1ab0a094fbd9e140a52d8": "1e233f18aaee6a6ff9faea3f2203877c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/df874a45cb82a8b8e4b1a1d29145a5ac1e33fd": "d872caa3e225e9cb79d100c3bbda52df",
".git/objects/1a/14be8ed0f830d260cfd998ba3d59b881e86f78": "5c6fdd2df10206f54fd172967a882f09",
".git/objects/28/43e59b29dfe46f6b94017db57f58f17805158c": "68302ab4d906e83ce1ac1569d713df7c",
".git/objects/7b/efae0b1aa53bffdec9d2236a0ba0da579ca8d8": "882f9073bcc6b1184ec113debffa435b",
".git/objects/7b/e992c9f1797d8d482557d4acf76d7a6697a005": "87964858d6e8689d160a0999c4a5e745",
".git/objects/7b/2a3e88c07c0ea17987b0e4483f96568ee5b3fa": "25ba43e68916a834d848f6b13d9457a2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/fa0f3cdc81ffbc0007ace59264aa5a437423f4": "c8b4e411eb850b5197429ccefd2ba953",
".git/objects/7e/e06bc912cf83f572cc8b8788a102819751419e": "225b13874399376a24d0888bcf08cd69",
".git/objects/19/251646f444c1f1d237e432c437c1db62ab9edd": "12698c31a76dcf17f52a85cc7f47a6c8",
".git/objects/19/36e8ce2e960048b5af039746016bcf437a2e4b": "f68342800d0b22bf7147fe834af80a1d",
".git/objects/4c/1e5063b3cc15d2afc2432d8a3b0d8ac06ccdb8": "9dd2842c32b36a54a831efc96df688dd",
".git/objects/26/dc2f1cdca79718a9b48e0523758edaa7912a29": "d3793a05ac9373b3f0f9cf813e113265",
".git/objects/81/187048d377f3c0928d607291824c857100f4b2": "1bc5e7c93999d118154f20c81a4a7079",
".git/objects/72/ac41c8b737f1a415e55e1cbcc74284136dd9c6": "aa9e5ba6710489dbb0df22efaad93b70",
".git/objects/44/3eb1e74049ae34207d48cd015749bfcf1b0079": "09f46e0d1f2a1357aca662ce264cc855",
".git/objects/43/335e4244c86269c616dc801ebc07f33403687c": "2ebf79e05b18a39e30e01c7272544bef",
".git/objects/88/9e64cfb204b7499f486108babb02e43321dcdb": "616bb9beaf4ba1318d0c9e6e94920073",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/dbdd3e428b4f79eded92933684164ff7661550": "83126c4c9fca274ccd4301071c743bf2",
".git/objects/6e/18a8ed2551387c62043dd5fae98ee0f55a5f60": "fb9b580f904462d837a7642b60186ecb",
".git/objects/9a/2ca4e4812ecb97f06358435fe1daf5ed3d0daa": "8a3b5d56c3bb01f7ed44c1cf20ef2d7e",
".git/objects/36/0fa39bb2f49b82d4e25f30b65096805d701391": "aa209d36f0170094206083ce6dd47254",
".git/objects/36/6dc897eef4207f25202bf31073da0c24b6495e": "dbeeef8f515df5b9e5af07f6585b9e72",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/60195320b5a186c274d21f7f91d77c9e39697d": "d522faa62cc8ad953621c62d192b8f0b",
".git/objects/65/983b059e79214e65165e7ea289c1d2c91bb8eb": "5aa41415d5108c8e3890bfea29b9574f",
".git/objects/3a/225ed8c18a824b22049bd3b6dff94e0cb5f897": "a1d9ef86aca64bb4b0398e4eda184f55",
".git/objects/54/1cc9ef50347873297bb7d98222dcca279e8cc5": "ad371cee34c7bc3cf4e9079a663f1e60",
".git/objects/53/ec65da9fe69d10afdabfaa6168223afb90f7b6": "449e2117215f1f22c647a1d6e0e3f687",
".git/objects/53/6b63a4b2a16ec75aebb95c7756676b3066faf3": "1df5f7a9f9ef106381b77dd3951690cf",
".git/objects/53/d114ede717d667a551d0d677c345ddcbc97a17": "6522a24cb007da165046f5516d8f34a6",
".git/objects/3f/8e63f470e8c1087cb767fe366e6821d42bf991": "9359bbc02ad9a8b263206c193814313d",
".git/objects/3f/5a3c3aa1f691f9d43b0d3772a97a526ee9691f": "7cfcc18862b080a6c7760c67c4987eb3",
".git/objects/30/2ed7c7c6a24201a6241da482835e869db4d19e": "4d359cf825589ff2bb66db629fffe6c0",
".git/objects/08/84b57d78e7af155e6fbc8724259a744b996a8c": "2c468bbbb2064a78a7cb0a54e7f562f1",
".git/objects/6d/dc3cf39d7a4322e5af81296de9b23de66b52f6": "aed645e3368f299e444240ab90d496dc",
".git/objects/6d/9bf7c466ffe3b176a4cb767fe9fac2941abd47": "2265b1d6508279a35bbd3a78fa64c84a",
".git/objects/01/d9afedde496b7bf58ca73663bc782abacd60a1": "ed2bcd5f8e16316cc675dfb0633d2397",
".git/objects/01/b5bdb264f05b69d729057a9bd7021f34fb37d1": "72b0f42bde45b6adfaec3e47750dc1c7",
".git/objects/06/e80dd5ddb918c90719df8f1c61c769e847915d": "1c0eb2705dc31253dd85656bce89772f",
".git/objects/6c/c9623501f81224f518ff9dfb7bce6777df3717": "fa792dd2797af2366a7b75aaf936f415",
".git/objects/6c/436bb525a2c71e093d36042889eaa52d0fd478": "a00e8523dc9711109c6bcc217aecb270",
".git/objects/39/5a3993fe8ef8490ebf6a989a127acb528d2086": "448d5b3ede40bbcc13be7006bf16909a",
".git/objects/52/dae7eb079224adff5d9edfd7bfa1deca000d21": "3e8578c00f47c7b66319b1c9a4433506",
".git/objects/63/6e80d9078a9d4a10fbe034a4fcf017d1897b4b": "228d3379027c2f132fc186f191d700bb",
".git/objects/0a/eb71d45d8be6dbb8d0b2f60c097f8016a4611d": "396866d842953aec25b0a93aac82269a",
".git/objects/64/aef98449ae331fc0e1ed8c86536008a9a683c8": "ed1c795efa78130576af03c66e2aca98",
".git/objects/90/7525ad72b404c210eb728ba68b7d3a4895dc77": "2fd0cbef79b587cc36f93b5fd066046b",
".git/objects/bf/eac0f0772ef2ed2a13a86e0dace2293908aa0a": "fc981eba4bca35cf346c6fb38f17e9ca",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d392dc3eeed6bfb8d56697b709b0111a50aa20": "7f68b7b40d622deaafe52067d5b52ee7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/ef08716efb75e1bc5ecf153c5a2f6d7489b39d": "f38ee1d4de2ca1c9fabdc32b14ecef91",
".git/objects/b6/8ffac9b146000911c3ee244132cac1df689450": "b24faf73416af9f88964e6dedc413745",
".git/objects/b6/363370e9668fa63d711cffa45186a9a16d4910": "1e4e6403b3b8a4e7da73f89a86f0e503",
".git/objects/a9/8ca432e214a66403e62563bb656cf8719c9ded": "9003fdafc73c330fffc0f1f64a81e7ce",
".git/objects/af/a23e35d3593a51f35a6595e618f87de16d15d7": "6e2a8710bdf3fb57292d35e4e18affaa",
".git/objects/af/7c8c3801568237e02ab8ac31829c75132afab0": "63836a82f6077bc7fda996384343f0ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8b9147f6533e5884e17cbe14676c49a09cee9c": "e0332f424a024c76ece5e56acca4bab2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1804cc25ee9f264c902e25e078a5da55f51dff": "addf9524011db03f58cd457f1a60e4e7",
".git/objects/a1/3a1801fad4e4191549e6d76082a96bdb4a735d": "f0317bfc4175336e528f996cf4bac9c5",
".git/objects/ef/17e460be9fc9f42a12b769500da6dd9e17e5d8": "1f2eb83f33eb2577b3950e3eaae2f5d9",
".git/objects/ea/8b14d6a5d7aec2d9fa592e768ba384302ca547": "52175c8525b61840daa0e7720535cb38",
".git/objects/e1/0caabdaadacc135269bd562fc7f1b09ba40bc3": "ff7f9275ee5fb31e29723729d1277494",
".git/objects/cd/3d2eef14ec25d5ccc99b23019faa39df2b0cca": "a15f91cad5ff30d2bea7575796301cf7",
".git/objects/fa/3ce00542508c1260ae16dd20f45a383565dc67": "51194b7a44735c66d22eac170d3d26b0",
".git/objects/ff/4f7b5dcd9a366afcf7031d0e59bad73e8127e0": "ad11c236bba0dcca11396e960cf01e69",
".git/objects/ff/368ba77286938a3064d47f43b8e8b3e12c4d96": "ef8502448aff02653deb101acca8ebeb",
".git/objects/c5/f74ec62a02bd6c3aa2dd9a478acce5e74c1230": "cef149a060a62efc267b231b5139e551",
".git/objects/c5/b624cf10210a604b95f83f290afab35a6201d7": "bc528015736e3bc76dfb6f3eb5baa859",
".git/objects/c2/7c08e63902e6802f0b8d5b0997c63867f7a828": "6fe7944fdd8dde548650228f23b7ff7f",
".git/objects/e9/17c79224b4ee39237d3c7c03cff432b1a0f487": "0a01305e5c404bda300be51b6cffa15d",
".git/objects/f1/e208416c04b19cb9a53162a16bca3d09f6f709": "90d642c9c926f8636e385d97c688bdd4",
".git/objects/cb/16a81065c2963e050ab061915919a6df7d40b7": "992024711c376d5bd187757610e0d568",
".git/objects/cb/e6c65ed69929df32fb4f6b6b175448beaeb578": "1b8582231e765bd8f5cf8af52587119b",
".git/objects/cb/6bdeede2f445c1bb9ec5fc24cf4f1d3b5adce1": "cc349b1fc61f40af2e5e8dfe85abae5e",
".git/objects/f8/6208917f4f692bbfc13ad7d2d4196954aa30e9": "c3569e36319dad86bbed94a144a545ea",
".git/objects/ce/0185264a4dbe2098eeea034f60af91016de862": "ab414530842fe6b3d8a76c68764ac119",
".git/objects/e0/999ab0cba2522bd72fdf4f3ca7d94823b00250": "cd3b0b52103a0b691cb0f0e4110f48b8",
".git/objects/46/0e5468c1c8095abc8d67fa84b9a04a219b0e41": "17718cd21ce81355e8ab76c326827cae",
".git/objects/46/51a1d7cb20870d94b021b975f8230174330336": "3e56fde106206cd8be05e8c4ff95506c",
".git/objects/46/db686df910f4a61f559cfe3c24836da979f600": "7b464f056f628973ebe21f33f528981c",
".git/objects/79/8085ef2f836b7cb90c7a1500783734dafffed0": "ae86321df522eaa8a7b3f3e3fab962fc",
".git/objects/79/8d6ea92b4bb6fc7420b02f5173f258befbdd2f": "152d3213985ee100ed3a97cade7d5d62",
".git/objects/79/3a54257a3e1999297f4b9f351cb726f3160ed7": "fb4fc6236ac03277eeb9e001b8bca0c0",
".git/objects/79/7c4a570ab4ec5b077a670bdcd53cfd5d680da6": "4aabf5af34d66e463f7a962f2d293037",
".git/objects/79/2dce20f123879b103afc6d6be2c7ce031f3c6d": "8640ec673adbabe6993bcda8a699618f",
".git/objects/1b/38db5bb69bf8e9f55e736f4a9e43363868e902": "59b133a279f25f5a58aef108883b4123",
".git/objects/70/d02932a3c4b026e6270925834b8eccb5f14140": "b87b22b1a5f00b127732fe3b0ddf6c7c",
".git/objects/70/84389a0737a97ba3f6d0758a2dd54ee01ea9a7": "36a9a8a900797cb5745f20d58d56eede",
".git/objects/1e/386a0879ef9b95f11e734a99a8f003b1e566bc": "5b7760d09d41a7ab1cf7a6bc0386fd60",
".git/objects/84/39c8f0751bd42c04c765944be452d98e30e06d": "1c6c9e83ba673a2a144993b79d4f4712",
".git/objects/84/a9ab4e1b0e142fa34853d823a0b2312bb5a689": "85f5a51266a47dcb86bad5d10d82ef6a",
".git/objects/23/ad8ad1ad00127a1c4f9ae51659476db90a80c1": "1e5a5c9b2aafbabf6cd5630c6db72109",
".git/objects/23/6bd282baef3f1d0ea66e3ddf7c3ce471c2ca0b": "dc9c0564666bb76162eb106f63ce251f",
".git/objects/23/8ceecce629424816d44c60c1778761f4b40644": "2798d73e8987a20526378ff94e96bf27",
".git/objects/8d/2489db7e69b65ea92751a76bc7666563d16764": "8ca58856b55b9fe2c2f2d1d788807d60",
".git/objects/8d/11ef221ac47feddcc8f64c9cd4202fbaf6bc72": "94f112bfa15a8452b174df4abcba1f7f",
".git/objects/85/3d4c195d31dcc3880f42fe98ced794d52e5f49": "f0708007f8a3c17645c69f1ac46baaa6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/31a4ecce1a9a1a549d63c7abcabdd59834bc6e": "8d4f2922d46f2e4ffdb3b091f7734a52",
".git/objects/1d/8c60eb2c47cbe20a950d6661ee9d6b5b881026": "e493173d9bd8e553c6bbbaed2c5addf6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/dffa0b962ef1fb468b7f9e492f7a3c86992cd9": "2e77739cec08784446c1fa18473b9b6c",
".git/objects/76/68af4e712458a95069078768113c0873c315b8": "852685036c93fc8cf2d32000c8177b55",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/c0c27491b97edfe0c0025dababf881c46e4c6a": "2465c133e2468056d37aaf08d372fc02",
".git/objects/2b/3ac4542934b03466abfb19f33cd6f314c723f2": "ac75d2a8342d76faf632796109fe8854",
".git/objects/7a/3cb5e9ba11fdb41d59065a406d3139c3f633ec": "6dd954a82f9f291c653339b22c86160a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2f72fb8290462c36ee946de5c1439c9",
".git/logs/refs/heads/main": "db1eb5461407c545c80cf6d65f7e885f",
".git/logs/refs/remotes/origin/main": "1ea3f9a25ed82918481fa94fbc52f9d3",
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
".git/refs/heads/main": "b798a2417e85e187d05a8109dabf12cc",
".git/refs/remotes/origin/main": "b798a2417e85e187d05a8109dabf12cc",
".git/index": "0a7f88b1a0746bf60c693da6f49b8275",
".git/COMMIT_EDITMSG": "2ae63f764d87ac79cc402fca5a14f9c1",
".git/FETCH_HEAD": "c38a95ff7e97a16b01b16bb66ef5e648",
"assets/AssetManifest.json": "e2dd1aaece6cdc4cc1ee012af1f7d1e5",
"assets/NOTICES": "054846e9fda26d3fc86bf73d4bb1e473",
"assets/FontManifest.json": "3704a850f1c349f3b4cbfda07e3b9b31",
"assets/AssetManifest.bin.json": "3255d9112876de50e7d61972563fab3a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "539f8b74acc6a3fc6848fc6702547f75",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/logos/img.png": "73a81110adce73acc9852d388dcffd8b",
"assets/assets/logos/buttonBg.jpeg": "839db81a11606f42cad17a0f990a327f",
"assets/assets/logos/frame.png": "71e6644bf24652d7a1b31d75d3108f3d",
"assets/assets/fonts/Ruthie-Regular.ttf": "68a0b5a044bafd8fcdfdb049bce05be3",
"assets/assets/fonts/Montserrat-VariableFont_wght.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/assets/fonts/MontaguSlab_24pt-SemiBold.ttf": "e1cc20dc0800e66ec196aa6cf4e34cf3",
"assets/assets/fonts/KhalaadSusan.ttf": "b9d1dac4a536c8fd6251779d51fc192c",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "cc10461cb5e0a6f2621c7179f4d6de17",
"assets/assets/fonts/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
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
