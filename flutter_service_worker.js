'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dcc89c20924867eba2c65bacf99d6fe0",
"index.html": "88c55173d35dbe59e10c253821655393",
"/": "88c55173d35dbe59e10c253821655393",
"main.dart.js": "ebb0d0e871a2b466ecda9407fbc3968a",
"favicon.png": "8bea26da4c8522cfbb8daaac058b9650",
"icons/Icon-512.png": "8bea26da4c8522cfbb8daaac058b9650",
"manifest.json": "c65ff7966f22e1ff18249a9fc64a2ba4",
".git/config": "351faa3ffe8884c67f0146bb1abf78e0",
".git/objects/3e/23d393daace63ac107735e80bbafacc81678ba": "2849607d7933a508aded930457c3618f",
".git/objects/68/f297f287bda111113d9253821945afaacd1667": "a4bcb9fa72ea8e3528565587f2931a8e",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/57/5177ec3b24d7689feb8a307a3878708aa7f838": "053ec64c36dc096c7744987c588406bb",
".git/objects/6f/465ddb6551081b7df785d33f15a230ab8718d9": "45d41fd96e4020c5ee103bbe462265e3",
".git/objects/6a/bc29066d89a22840e6f7cb6241da0893023933": "0f759aa683d083a73cac594863846ce1",
".git/objects/32/835ff6387881eb63974dad638082da6a6bf293": "c8e95bdafb349183a9a8619d36b5294f",
".git/objects/32/5b4b42b16c81e298303a68cfce1a1ad5ba8a78": "f0ce86a536c3b61c0e6d7ae45cbd2766",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/69/6b42096a01227811adb2e896153ccff4c0207a": "61fb97e88c10d902c904012b03f1df21",
".git/objects/51/51725b85116c508002667581773a6ebe97147b": "17324c9e5fd54367e71dfa44c7d7729a",
".git/objects/58/746746ae279e6d436931112328052aa08963c2": "16c78efd47093bc925508cef84e4176f",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/5f/91ad27fff5d6280126c67d253568acbc5f737a": "f8b444e20f9ddfb248ea6839a6b337b0",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/b5/b7a041ebca4d4fe7b2c2a16dea49270d4e55b7": "09dac785596e2b9da8a6ea1628c8b473",
".git/objects/b5/8b210ef330597a732e1bad409091172cfdbcbe": "35689b5f8aa79dda1d70ea0e5a65c042",
".git/objects/b2/440305294bcdf4de7f47bb45271860a253a8db": "63ff98419b675cf153717b96ad181a5d",
".git/objects/b2/27865fba1f7c76e47294ce35e60f8ab093ed06": "270f3e81d5b95689bb3bd5b030f632a1",
".git/objects/ac/14bed09d02e23cb48c50bdf17ea5affe5847c3": "b6383fb23918e0325cff77260e68e5d0",
".git/objects/bb/19012bd932b498ee46b3f403c58b1615780051": "d0e239bf35c790352fa13e167815b1b8",
".git/objects/d7/b48a8fb3df18cc13f0c58b8f79d44282084952": "7179e378526c7ba7c2e1940fa6a25873",
".git/objects/d1/7ba91c3a3ac298ce6a0d8dc13abc5acc5e7078": "283453a5ecd51ff54f7ac58193e4e8b4",
".git/objects/d6/396200bb4aae3f3bf32ad57ba4b24e949c4bf6": "56d65221a1aeab8ec010fe9dcc99714c",
".git/objects/ae/d367cc1bc67ea2588b987dfb1728c1ada36b1a": "610d0f34a5736ebd1e280a4894dcf204",
".git/objects/e5/b84625a8a03d7a00c3e3d7d9c1dfd19ca6fab7": "7fbb1e3cfc61478836c2037aa592ea1e",
".git/objects/c7/f0c92a3934d10739ab157f4e85e508e3bab8f4": "9026109d303763cff99f5218737ec9b1",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/e3/5df5c9222abb89c45ad4827c6120fbbd8039d1": "e0e7b334d83c06d6e2f46f580eba3b4c",
".git/objects/cf/2522c614074966d5a45a42f51766963a195108": "da46606de41b58e77897c6b14249cd59",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/ca/3387d84f7a142b36d2b6113682c963baf7b324": "75931cdb864da09db881adc7653975dc",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/27/bc7569df69328bc3495e1bdc00fd99fe9f89c7": "f4e883255e2d7aa0d9beb38f9fbc5309",
".git/objects/4b/20682e7d17816b3ee0d44032122934e0dbe194": "95ae78e6d489925a8e0dcebaefc3f225",
".git/objects/7c/e6257ce29890a09248a22ccea2c88f262ff619": "c47bf06d1ed2b286f81ff3da3bd72281",
".git/objects/89/df8c28ac0634a1df7484bf53d18a4e64a8b9b4": "ce5ba1c3c12d1c12281d555c0c73037f",
".git/objects/89/a93bdeb19638b83de7784f90f8a9b74b1a3fdb": "4255fc45998bbb3c44b7155182c828cd",
".git/objects/1f/121f5e265bd9f817c9a33d55b970db35f930bb": "d32bf908c48234379b57fd436f052ca7",
".git/objects/80/f6455c70df14bfb176df4dd5fff62c4e11ad8c": "5bc32d7afb2fd79e467179ad3aae2c59",
".git/objects/28/2a3ef1848e41bb9eb5fc2b91207659582aff73": "7b2fcca33af1f0acc725b8eff50794dd",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/26/5baf415a392598383c98f00ab45813fd7da724": "d6ba7249668ef9ef14ff73cafc5d1c3d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/72/44c0c8d4a890ac6a3860dbd456028f11cacd2f": "50031d35f03f2066c06b77ede0755c47",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/43/87bd7278e2d488ddaf9ce5e46ccd866c7f45bc": "3b9e9cb6e75fceec27612cbb9c169806",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/5d/02afa8edf8ff340220a3166a52703c43d1029f": "a65ab4159df255894c17c2c1788801f2",
".git/objects/5d/448e5acba063c856e800b901071382f8d6cd1e": "266e7fc58b2c763ed1cb993004f73a34",
".git/objects/31/97cd85129b394d28ff173922284238c5a5a3ce": "667f411aad76d22a94fbf3e652add27e",
".git/objects/3a/3e5e9cd4364bd12b3aa613af2a7a61cd21c06f": "0259a04e6026ee47f683253ef547a2f1",
".git/objects/98/f3cb5e19b668f55105316f6ec8bd6561d481b1": "93e20689c0bb039a5494ce6e06cf1713",
".git/objects/30/f38d424ad423ec33f6bb60bcd63d8186a0779a": "d2d357cfd876294b795055ed39104123",
".git/objects/37/d16faec09addef5f35af07ce256adce1a0aac5": "fdda91a3713b1cc1d5dec8a80ad73e89",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/52/7f4723dc95181af5838c341089c8ede729059c": "97139f0f347c87de5ce33764508440bb",
".git/objects/97/5070c35994eef968ce40fa06303d74ba00acc9": "b48a36e2e44a2c04ff75754ff91ae8fb",
".git/objects/0f/66fe9d63ef7122ade87a3988a6cb03bafe6350": "a7e7b9e5b9357d50cba1442fd98fba03",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/5122212b1a6ac1b27cce4e2f0377d9b8d22909": "bbf9b5e7674e2a9e165f27a03bc37fd2",
".git/objects/de/e50fdf570fbc5b2a5772faf6262292c3cb93d0": "a7d8c34968d3506a6390f5fbc8f6e9ca",
".git/objects/a1/829f33bbb2db897b402afb52a2b8b615b9127a": "499a07933642c65cbdf0760eb45a2a66",
".git/objects/ef/1a9bbade1a9bb76f87a718dcb1753e7e980783": "0afdab47cc141bb2c0bf1dec6da8d5b2",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/ea/5b9a88523f46dde23f0f5fc6f38b3ace7dde8a": "889c1f487814021087229fade8468e67",
".git/objects/e1/872dad0c43f672d6048b6ca7f110156c511cc2": "5e65eb2d258cfab512fc1f6475279a88",
".git/objects/e6/478365a3cfba7f81853b51ddb74e881ae9fbd3": "1f8c7be69611711f58f5b3ef0487c1ab",
".git/objects/fa/5e21f208ac260e12a3485eb7da4e059612f7d4": "38d9347d8d060a53ae9bda3a473dd101",
".git/objects/c5/9df19a8d9274d390b64c0b9a89c677c63a1ae5": "a3ea80d3504e7de0f4e2ebe233e790f5",
".git/objects/46/2560a94239e79de6f467a9d924d07a4bf2beea": "332fec5e250940329b19ae6afcca674a",
".git/objects/83/80599cc463d2d484f2017a78f46537ad90eb45": "c6ac8269fcd4d37fe3aaca6b410f9f35",
".git/objects/77/63c613e1c793fca57269cc83491007c3e6465e": "44572bcf32923a121a662b99c634ff75",
".git/objects/48/a8c9ff738f897140bda2c9de8615a00cd52835": "bac118903f460682c98500d00280e5b1",
".git/objects/70/1abe446bc20721a9721079c4b550b417cd06fe": "a5d87e5afc58f598b53390bf2920a233",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/71/d34522a117e8946a10946e060d771cc28728dc": "88f815ff54e4c64e67624c4023d069be",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/49/68405fd0fd50f86f6e1a67df4798d957f4be25": "8a2a326f48b2b3eaf78030ae75c1923a",
".git/objects/2e/631c2b8ccbfdfff54fbd7ad92ede5096bd218f": "5f851349658f90bf6bd91894ff1014a1",
".git/objects/47/1d1ed011062fe659e233aa813d05c5c22a22c0": "627c4f0676d7a38ddb5363d7ed274954",
".git/objects/8b/150306477ea900406867e70f773930640b642f": "7f186b42e443ed398b1df4f12e8e98bf",
".git/objects/13/9aa685985c7cf8d356e1d810f39a693e85e33b": "f0cd949921ab34a34a1a26d58f254f02",
".git/objects/25/64ef96e30d5d784ed89c52c8e1409f56e5b866": "59918b5cbb0147c54a17d4ec79e96c68",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e0dbe450fc2bd9aef5bb24dcff10bbd",
".git/logs/refs/heads/master": "7e0dbe450fc2bd9aef5bb24dcff10bbd",
".git/logs/refs/remotes/origin/master": "d7767efd60c097cd3967839dd15a1241",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "f1c062766f960a2246bf1e4823dc83f6",
".git/refs/remotes/origin/master": "f1c062766f960a2246bf1e4823dc83f6",
".git/index": "fda1c5948a7d5b2d3765ace223af7e03",
".git/COMMIT_EDITMSG": "552756628b961d7247e41ea3907720e3",
"assets/lucasargento.png": "23f341c8f7e7abdd1f35d15acac0cb6f",
"assets/kumpiflyer4.png": "6c68182762c224eb6d39665522611640",
"assets/enterprise5.png": "307fb305cc93cff5b2b038aa95d6bc6d",
"assets/kumpiflyer2.png": "b369fb0b241aa4a0eee2e50b918c2fe4",
"assets/adobexd.png": "b45f712eb37732bced6b5caf983db4be",
"assets/kumpiflyer3.png": "3305c2745bc0022abb6f4152c0490c5a",
"assets/enterprise1.png": "894e4e624fa3d99a214a0be25335f44c",
"assets/enterprise3.png": "f7844d47bab432e1d6df42e04225be9b",
"assets/kumpiflyer1.png": "b8a25619a736d11f855a0add4d87be42",
"assets/flutter.png": "e56f069051ffb93ac31005949273b34a",
"assets/enterprise2.png": "1efcc7e26e054f33a1a31d6691c4630a",
"assets/gallaretas4.png": "f236e71dbca59d209889b9070e84b95c",
"assets/gallaretas5.png": "1e3044436661aaa69707e724e05e9d2e",
"assets/web/assets/lucasargento.png": "23f341c8f7e7abdd1f35d15acac0cb6f",
"assets/web/assets/kumpiflyer4.png": "6c68182762c224eb6d39665522611640",
"assets/web/assets/enterprise5.png": "307fb305cc93cff5b2b038aa95d6bc6d",
"assets/web/assets/kumpiflyer2.png": "b369fb0b241aa4a0eee2e50b918c2fe4",
"assets/web/assets/adobexd.png": "b45f712eb37732bced6b5caf983db4be",
"assets/web/assets/kumpiflyer3.png": "3305c2745bc0022abb6f4152c0490c5a",
"assets/web/assets/enterprise1.png": "894e4e624fa3d99a214a0be25335f44c",
"assets/web/assets/enterprise3.png": "f7844d47bab432e1d6df42e04225be9b",
"assets/web/assets/kumpiflyer1.png": "b8a25619a736d11f855a0add4d87be42",
"assets/web/assets/flutter.png": "e56f069051ffb93ac31005949273b34a",
"assets/web/assets/enterprise2.png": "1efcc7e26e054f33a1a31d6691c4630a",
"assets/web/assets/gallaretas4.png": "f236e71dbca59d209889b9070e84b95c",
"assets/web/assets/gallaretas5.png": "1e3044436661aaa69707e724e05e9d2e",
"assets/web/assets/computadora.png": "c9ae483de480a7f529774ba296027c10",
"assets/web/assets/yo_tiojos.png": "c0ce7c3749e44f32d389aeac60def25e",
"assets/web/assets/gallaretas6.png": "85952584c4bbd1719ad42c165aa14efd",
"assets/web/assets/firebase.png": "9d0202b69d62d187e93910c0053b5a6b",
"assets/web/assets/smartphone.png": "92465bdcf4b03e4d9ee6a64e97d3d348",
"assets/web/assets/todo.png": "06d3a9ca763d4e2bbdf9cf4d4fe00e83",
"assets/web/assets/gallaretas2.png": "cb9dc6e6f6d63c9888cc1af2bf0af1aa",
"assets/web/assets/gallaretas3.png": "88476b5898edb4dd988a64c82a2badf1",
"assets/web/assets/gallaretas1.png": "6b63d35a436d8e69cc4e0cc3ae68087d",
"assets/web/assets/admob.png": "0fc0794bdfca2a127d8202e3adbdc2ad",
"assets/web/assets/getitongoogleplay.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/web/assets/yo_serio.png": "04caedd9afa70c323fb07abd5c2d40ab",
"assets/web/assets/favicon.png": "8bea26da4c8522cfbb8daaac058b9650",
"assets/web/assets/lampara.png": "c3022a838f970677ca127fb4e7715479",
"assets/web/assets/Dise%25C3%25B1o_sin_t%25C3%25ADtulo__6_-removebg-preview.png": "28f8d697c446898d564bc65e0fdfa261",
"assets/web/assets/chatlogo.png": "3b2b7fa8ed64542249849b779f48356d",
"assets/web/assets/rocket.png": "8ac0ec5127d4625657246f4195970fbb",
"assets/web/assets/kumpilogo.png": "2250b7d100fdc31b1e050198604b7322",
"assets/web/assets/headerkumpi.png": "4e31a3ad27c2c0a50c5108cc745cd5c9",
"assets/web/assets/gallaretasLogo.png": "339cee052884898b6d061eca46a8ac0e",
"assets/computadora.png": "c9ae483de480a7f529774ba296027c10",
"assets/yo_tiojos.png": "c0ce7c3749e44f32d389aeac60def25e",
"assets/gallaretas6.png": "85952584c4bbd1719ad42c165aa14efd",
"assets/firebase.png": "9d0202b69d62d187e93910c0053b5a6b",
"assets/smartphone.png": "92465bdcf4b03e4d9ee6a64e97d3d348",
"assets/AssetManifest.json": "50f2dba1f9694dcc4c87e8e0d0ec0fe6",
"assets/todo.png": "06d3a9ca763d4e2bbdf9cf4d4fe00e83",
"assets/gallaretas2.png": "cb9dc6e6f6d63c9888cc1af2bf0af1aa",
"assets/gallaretas3.png": "88476b5898edb4dd988a64c82a2badf1",
"assets/gallaretas1.png": "6b63d35a436d8e69cc4e0cc3ae68087d",
"assets/admob.png": "0fc0794bdfca2a127d8202e3adbdc2ad",
"assets/NOTICES": "6cdba7673f217965737e1d38bb819194",
"assets/getitongoogleplay.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/yo_serio.png": "04caedd9afa70c323fb07abd5c2d40ab",
"assets/favicon.png": "8bea26da4c8522cfbb8daaac058b9650",
"assets/lampara.png": "c3022a838f970677ca127fb4e7715479",
"assets/chatlogo.png": "3b2b7fa8ed64542249849b779f48356d",
"assets/rocket.png": "8ac0ec5127d4625657246f4195970fbb",
"assets/kumpilogo.png": "2250b7d100fdc31b1e050198604b7322",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/headerkumpi.png": "4e31a3ad27c2c0a50c5108cc745cd5c9",
"assets/Dise%C3%B1o_sin_t%C3%ADtulo__6_-removebg-preview.png": "28f8d697c446898d564bc65e0fdfa261",
"assets/gallaretasLogo.png": "339cee052884898b6d061eca46a8ac0e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
