'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/configuration/configuration.json": "bdb37f349f0ede43189b8332643b8942",
"assets/asset/configuration/entity/banks.json": "421a9883dec3ae4d03a1611a7f30c05d",
"assets/asset/configuration/entity/bank_types.json": "c4ca60096afbf92dc50af39f500f8b01",
"assets/asset/configuration/entity/flx_roles.json": "63be22585bc459b1c3e196ef627b85b4",
"assets/asset/configuration/entity/flx_users.json": "59b327ccd3dce86d710c447a82d2df10",
"assets/asset/gif/maintenance.gif": "8b9f585677b53390a8bf2b27c60cbce3",
"assets/asset/html/email_new_comment.html": "29240516b25905173b2f4f7b7b60f31c",
"assets/asset/image/avatar.png": "560456fb86912b36189f1c618b0ae29c",
"assets/asset/image/background-night.jpg": "5ed3aaa51f021b2b6962486d5e38662f",
"assets/asset/image/icon/accountant.png": "924f4379b9d0c1d59ece41ba012081a1",
"assets/asset/image/icon/add-basket.png": "0bf1710b4f63fba89e4840aaebb1754c",
"assets/asset/image/icon/area-chart.png": "a47c8a075dbeed7ca90bf88ece77ed76",
"assets/asset/image/icon/asset-data.png": "6313051793382865637522139d5c5398",
"assets/asset/image/icon/asset-location.png": "af7bb36bbce60cfde72d106a08ecb096",
"assets/asset/image/icon/asset-type.png": "40d16213adf7dc27b4651e650e23737a",
"assets/asset/image/icon/bill.png": "b9e3f649669906b310da0cf5ed2170e8",
"assets/asset/image/icon/chart.png": "22557f40d3d58a867ee0bea7aecfe09d",
"assets/asset/image/icon/contact-form.png": "a96360e37250faa8101b5833968ec75e",
"assets/asset/image/icon/credit-card.png": "2b2152101a4a7df904926384d81da14d",
"assets/asset/image/icon/department.png": "e42913ba586af5819ef58f2023ecf50c",
"assets/asset/image/icon/design-code.png": "87ee6733339de2d38c237d10755f8856",
"assets/asset/image/icon/discount.png": "5d776e13ca2414c13bb29944a34fe628",
"assets/asset/image/icon/formulations.png": "6c3d8b257a60af09be797df14864036c",
"assets/asset/image/icon/layers.png": "c206309025a441d48d6ede7f26bf6fa7",
"assets/asset/image/icon/machines.png": "24c2c3b5fa0b37a01fcc939bbf81181d",
"assets/asset/image/icon/manufacturer.png": "83152febcbaeb923696cb43152c8f91a",
"assets/asset/image/icon/material-group.png": "1083538c51f535d49584fcc47fc60ff5",
"assets/asset/image/icon/material-issue.png": "6c9a1d90ba1f6fce73b98a6f9f6a6b90",
"assets/asset/image/icon/material-receive.png": "ee48ea17137beabaf6dda1844f29479a",
"assets/asset/image/icon/material-retest.png": "28634a75d98aef022914d94f545af81e",
"assets/asset/image/icon/material-return.png": "04b2af49106d99665d46fc0b48f3a91b",
"assets/asset/image/icon/material-type.png": "6bc44308cb2a1597f127af921b990754",
"assets/asset/image/icon/medicine.png": "2aa2246df01939b148000c0b5bcb52f1",
"assets/asset/image/icon/money.png": "2ae2972dc44d51226a30c62e77655002",
"assets/asset/image/icon/notebook.png": "38b77cbe4171415ecf072b42020a7703",
"assets/asset/image/icon/package.png": "aaa0aa5d757d9ccc04a92dbdc35348cc",
"assets/asset/image/icon/parcel-care.png": "e7553a405ce29b51b76e7b7bb42dab58",
"assets/asset/image/icon/pay-day.png": "4235041dea8614662d70de5d8fd71c35",
"assets/asset/image/icon/product-group.png": "079327e8cff966af3ed38b861d491cdd",
"assets/asset/image/icon/product-request.png": "25cf97a374820ce698e816021c169cf0",
"assets/asset/image/icon/production-stage.png": "04b1f0c565942d5b90e65e2a3f277f73",
"assets/asset/image/icon/sales-order.png": "043b9acc2015fb2a900dfbe1fc4078c3",
"assets/asset/image/icon/schedule.png": "ec44ce4c16b466cd9c7555db28a001c7",
"assets/asset/image/icon/shopping-bag.png": "0093e2ce6fb9b8864614d791996b488e",
"assets/asset/image/icon/shopping-list.png": "d8e1c26f1e0d187e1ffbf6aa54fa8bd8",
"assets/asset/image/icon/stage-process.png": "f3a443b40ddc26b1297cb856a73512e0",
"assets/asset/image/icon/stock-market.png": "bc06ccfbbde3b661cad773662dbfd6f1",
"assets/asset/image/icon/supplier.png": "b2e3e0892819fbdde27e7631c40fa8c3",
"assets/asset/image/icon/transaction-non-order.png": "510e820c72baaf06a7d7b0be9e91e504",
"assets/asset/image/icon/transaction-routine.png": "d30cddbbcfb9c945d4032ccbf3bedcd3",
"assets/asset/image/icon/transaction.png": "ba8344a0f9fa8eb9cf3e50860cfbe67d",
"assets/asset/image/icon/unpacking.png": "9b1960fcb899102b4485977f21396d14",
"assets/asset/image/icon/worksheet.png": "c593e3a5e1a5c30225dc3f44e6a01b58",
"assets/asset/image/login-background.jpg": "b8563a3bb8caefb479caeb4c7ae0394b",
"assets/asset/image/logo-company-01.png": "dab54f2b2cf1a95128907cc87678d009",
"assets/asset/image/logo-company-02.png": "10c045cbc091f19689f484e26120cc57",
"assets/asset/image/logo-company-03.png": "602cb309600289e156bf417cb9fac3b0",
"assets/asset/image/logo-company-04.png": "a95d6e2ace4f7cd080dd77a4a7cc6fe6",
"assets/asset/image/logo-name-company-01.png": "2bba8194da736476e7a64ad6e0950203",
"assets/asset/image/logo-name-company-02.png": "66269161af962bbb14833f7859b31006",
"assets/asset/image/logo-name-company-03.png": "80526a2e445133332cb59cf4677b9b32",
"assets/asset/image/logo-name-company-04.png": "e79302530d33c1d35c2da4c3fe3afad2",
"assets/asset/image/logo.png": "602cb309600289e156bf417cb9fac3b0",
"assets/asset/sound/alert.mp3": "452b9336b3c28cad939fa440f6cddeb5",
"assets/asset/sound/fail.mp3": "c5c8a1be642d92f881023d641b2bffed",
"assets/asset/sound/success.mp3": "4eb0e5d0ec6119778e1f4f1f03c87c35",
"assets/asset/svg/avatar.svg": "aae8cd27dad4407d5821ce0ebc3f2149",
"assets/asset/svg/bg_login.svg": "ea2a1a58fdddca3c531549c8a3232e01",
"assets/asset/svg/extension/csv.svg": "0b9fe5417f5cea806c2c455df8c8b9f7",
"assets/asset/svg/extension/doc.svg": "acc0068ac639bfe463eb8ffebd7bd7c9",
"assets/asset/svg/extension/docx.svg": "3a032b63b0459ab9f12b2b79848cb1d8",
"assets/asset/svg/extension/gif.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/html.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/mp3.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/mp4.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/mpeg.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/other.svg": "19cacb5203d55ad814c2537942c58fea",
"assets/asset/svg/extension/pdf.svg": "95f236e6951925a31f34300fbe914dce",
"assets/asset/svg/extension/ppt.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/rar.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/raw.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/svg.svg": "cad653dc35a2003249013499d0adaee1",
"assets/asset/svg/extension/txt.svg": "78149bd70dc4aa53f64c8ae28700750f",
"assets/asset/svg/extension/wav.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/asset/svg/extension/xls.svg": "b1b5862e83fc7bc419ff886effda3246",
"assets/asset/svg/extension/xlsx.svg": "d5f59e92a90cc443228ad2884518c138",
"assets/asset/svg/extension/xml.svg": "73fff02a0bb884f059e88754ce426bf1",
"assets/asset/svg/extension/zip.svg": "9bb51715aa6c2f3c98a73f6ed971e392",
"assets/asset/svg/logo.svg": "4808212fc49897f151296fc0b40096ee",
"assets/asset/svg/logo_named.svg": "c7492ebc9af65f7ed00b132108eed961",
"assets/asset/svg/powered_by.svg": "a6f1e1c694112172fcb76d01b14b6827",
"assets/asset/svg/sidebar-hide.svg": "62228c920f3d79cf90a7b4715d8f38c9",
"assets/asset/svg/sidebar-show.svg": "706f530314fbf965833e3918ede51949",
"assets/asset/svg/stats.svg": "0466fb7e56006029a534601071f149fb",
"assets/asset/svg/warning.svg": "40bd0dc5bf08fbec2e2b6a706c2ab6f6",
"assets/asset/translation/en.json": "64d158eeddcfafc5f9aa190f85350d9d",
"assets/asset/translation/id.json": "4dde12d3b99e1ba14d5352d635aad85c",
"assets/AssetManifest.bin": "63e73e58e542458be79554ab3a36ac46",
"assets/AssetManifest.bin.json": "75e3eea433d0e3a1cefb62b4d1e2691a",
"assets/AssetManifest.json": "a8055ddbeba4ba43bebc4728aa8a8427",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "9f00a674936b1b698f905cdd61183c5b",
"assets/NOTICES": "78f2a102dd2bc3c8393faab05c546452",
"assets/packages/flexurio_erp_core/asset/gif/maintenance.gif": "8b9f585677b53390a8bf2b27c60cbce3",
"assets/packages/flexurio_erp_core/asset/html/email_new_comment.html": "29240516b25905173b2f4f7b7b60f31c",
"assets/packages/flexurio_erp_core/asset/image/avatar.png": "560456fb86912b36189f1c618b0ae29c",
"assets/packages/flexurio_erp_core/asset/image/background-3.jpg": "00eb7d5ae23db2d41f156c197a801c7f",
"assets/packages/flexurio_erp_core/asset/image/background-night.jpg": "5ed3aaa51f021b2b6962486d5e38662f",
"assets/packages/flexurio_erp_core/asset/image/icon/accountant.png": "924f4379b9d0c1d59ece41ba012081a1",
"assets/packages/flexurio_erp_core/asset/image/icon/add-basket.png": "0bf1710b4f63fba89e4840aaebb1754c",
"assets/packages/flexurio_erp_core/asset/image/icon/asset-data.png": "6313051793382865637522139d5c5398",
"assets/packages/flexurio_erp_core/asset/image/icon/asset-location.png": "af7bb36bbce60cfde72d106a08ecb096",
"assets/packages/flexurio_erp_core/asset/image/icon/asset-type.png": "40d16213adf7dc27b4651e650e23737a",
"assets/packages/flexurio_erp_core/asset/image/icon/bill.png": "b9e3f649669906b310da0cf5ed2170e8",
"assets/packages/flexurio_erp_core/asset/image/icon/contact-form.png": "a96360e37250faa8101b5833968ec75e",
"assets/packages/flexurio_erp_core/asset/image/icon/credit-card.png": "2b2152101a4a7df904926384d81da14d",
"assets/packages/flexurio_erp_core/asset/image/icon/department.png": "e42913ba586af5819ef58f2023ecf50c",
"assets/packages/flexurio_erp_core/asset/image/icon/design-code.png": "87ee6733339de2d38c237d10755f8856",
"assets/packages/flexurio_erp_core/asset/image/icon/discount.png": "5d776e13ca2414c13bb29944a34fe628",
"assets/packages/flexurio_erp_core/asset/image/icon/formulations.png": "6c3d8b257a60af09be797df14864036c",
"assets/packages/flexurio_erp_core/asset/image/icon/layers.png": "c206309025a441d48d6ede7f26bf6fa7",
"assets/packages/flexurio_erp_core/asset/image/icon/machines.png": "24c2c3b5fa0b37a01fcc939bbf81181d",
"assets/packages/flexurio_erp_core/asset/image/icon/manufacturer.png": "83152febcbaeb923696cb43152c8f91a",
"assets/packages/flexurio_erp_core/asset/image/icon/material-group.png": "1083538c51f535d49584fcc47fc60ff5",
"assets/packages/flexurio_erp_core/asset/image/icon/material-issue.png": "6c9a1d90ba1f6fce73b98a6f9f6a6b90",
"assets/packages/flexurio_erp_core/asset/image/icon/material-receive.png": "ee48ea17137beabaf6dda1844f29479a",
"assets/packages/flexurio_erp_core/asset/image/icon/material-retest.png": "28634a75d98aef022914d94f545af81e",
"assets/packages/flexurio_erp_core/asset/image/icon/material-return.png": "04b2af49106d99665d46fc0b48f3a91b",
"assets/packages/flexurio_erp_core/asset/image/icon/material-type.png": "6bc44308cb2a1597f127af921b990754",
"assets/packages/flexurio_erp_core/asset/image/icon/medicine.png": "2aa2246df01939b148000c0b5bcb52f1",
"assets/packages/flexurio_erp_core/asset/image/icon/money.png": "2ae2972dc44d51226a30c62e77655002",
"assets/packages/flexurio_erp_core/asset/image/icon/notebook.png": "38b77cbe4171415ecf072b42020a7703",
"assets/packages/flexurio_erp_core/asset/image/icon/parcel-care.png": "e7553a405ce29b51b76e7b7bb42dab58",
"assets/packages/flexurio_erp_core/asset/image/icon/pay-day.png": "4235041dea8614662d70de5d8fd71c35",
"assets/packages/flexurio_erp_core/asset/image/icon/product-group.png": "079327e8cff966af3ed38b861d491cdd",
"assets/packages/flexurio_erp_core/asset/image/icon/product-request.png": "25cf97a374820ce698e816021c169cf0",
"assets/packages/flexurio_erp_core/asset/image/icon/production-stage.png": "04b1f0c565942d5b90e65e2a3f277f73",
"assets/packages/flexurio_erp_core/asset/image/icon/sales-order.png": "043b9acc2015fb2a900dfbe1fc4078c3",
"assets/packages/flexurio_erp_core/asset/image/icon/schedule.png": "ec44ce4c16b466cd9c7555db28a001c7",
"assets/packages/flexurio_erp_core/asset/image/icon/shopping-bag.png": "0093e2ce6fb9b8864614d791996b488e",
"assets/packages/flexurio_erp_core/asset/image/icon/shopping-list.png": "d8e1c26f1e0d187e1ffbf6aa54fa8bd8",
"assets/packages/flexurio_erp_core/asset/image/icon/stage-process.png": "f3a443b40ddc26b1297cb856a73512e0",
"assets/packages/flexurio_erp_core/asset/image/icon/stock-market.png": "bc06ccfbbde3b661cad773662dbfd6f1",
"assets/packages/flexurio_erp_core/asset/image/icon/supplier.png": "b2e3e0892819fbdde27e7631c40fa8c3",
"assets/packages/flexurio_erp_core/asset/image/icon/transaction-non-order.png": "510e820c72baaf06a7d7b0be9e91e504",
"assets/packages/flexurio_erp_core/asset/image/icon/transaction-routine.png": "d30cddbbcfb9c945d4032ccbf3bedcd3",
"assets/packages/flexurio_erp_core/asset/image/icon/transaction.png": "ba8344a0f9fa8eb9cf3e50860cfbe67d",
"assets/packages/flexurio_erp_core/asset/image/icon/unpacking.png": "9b1960fcb899102b4485977f21396d14",
"assets/packages/flexurio_erp_core/asset/image/icon/worksheet.png": "c593e3a5e1a5c30225dc3f44e6a01b58",
"assets/packages/flexurio_erp_core/asset/image/logo-company-01.png": "dab54f2b2cf1a95128907cc87678d009",
"assets/packages/flexurio_erp_core/asset/image/logo-company-02.png": "10c045cbc091f19689f484e26120cc57",
"assets/packages/flexurio_erp_core/asset/image/logo-company-03.png": "602cb309600289e156bf417cb9fac3b0",
"assets/packages/flexurio_erp_core/asset/image/logo-name-company-01.png": "2bba8194da736476e7a64ad6e0950203",
"assets/packages/flexurio_erp_core/asset/image/logo-name-company-02.png": "66269161af962bbb14833f7859b31006",
"assets/packages/flexurio_erp_core/asset/image/logo-name-company-03.png": "80526a2e445133332cb59cf4677b9b32",
"assets/packages/flexurio_erp_core/asset/image/logo.png": "602cb309600289e156bf417cb9fac3b0",
"assets/packages/flexurio_erp_core/asset/sound/alert.mp3": "452b9336b3c28cad939fa440f6cddeb5",
"assets/packages/flexurio_erp_core/asset/sound/fail.mp3": "c5c8a1be642d92f881023d641b2bffed",
"assets/packages/flexurio_erp_core/asset/sound/success.mp3": "4eb0e5d0ec6119778e1f4f1f03c87c35",
"assets/packages/flexurio_erp_core/asset/svg/avatar.svg": "1f2db6f4dd00a7181018a403666dc8fd",
"assets/packages/flexurio_erp_core/asset/svg/bg_login.svg": "b3264d6beb62f501e8092a6b53a83558",
"assets/packages/flexurio_erp_core/asset/svg/extension/csv.svg": "1c494314884e5f13bfbbeeacac3e0d9a",
"assets/packages/flexurio_erp_core/asset/svg/extension/doc.svg": "a7f2ba2652429c7597463405c51bd652",
"assets/packages/flexurio_erp_core/asset/svg/extension/docx.svg": "fb6387519468d9642a09bd551182b55e",
"assets/packages/flexurio_erp_core/asset/svg/extension/gif.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/html.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/mp3.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/mp4.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/mpeg.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/other.svg": "46ba8cd444af28325e89a44246169d1e",
"assets/packages/flexurio_erp_core/asset/svg/extension/pdf.svg": "9d1c88ff85d9f78d5378a9fbe8fbdc9d",
"assets/packages/flexurio_erp_core/asset/svg/extension/ppt.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/rar.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/raw.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/svg.svg": "da362da30d2c4a330fc94b731c7f2911",
"assets/packages/flexurio_erp_core/asset/svg/extension/txt.svg": "7b0b2a338d34c2246f3e360127d4dc8a",
"assets/packages/flexurio_erp_core/asset/svg/extension/wav.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/flexurio_erp_core/asset/svg/extension/xls.svg": "736269fe78bd0e93fae13b89158b41a6",
"assets/packages/flexurio_erp_core/asset/svg/extension/xlsx.svg": "3a5b541faf230088ad93ca0fa89abbd0",
"assets/packages/flexurio_erp_core/asset/svg/extension/xml.svg": "bceceaf62d634e6b1e7bc7bd60bd5fc0",
"assets/packages/flexurio_erp_core/asset/svg/extension/zip.svg": "1daa6d1d1cf5a8ef8487d5dabc53bfdb",
"assets/packages/flexurio_erp_core/asset/svg/logo.svg": "20327db4c7b8527ad882818d96cb5a64",
"assets/packages/flexurio_erp_core/asset/svg/logo_named.svg": "ca14346c7bdb38906ae3e7574130e398",
"assets/packages/flexurio_erp_core/asset/svg/powered_by.svg": "fadda3f4d9ed17aebe140439b2f6de20",
"assets/packages/flexurio_erp_core/asset/svg/stats.svg": "3964b374d3ba0dafb4e1cb3827f1fef9",
"assets/packages/flexurio_erp_core/asset/svg/warning.svg": "40bd0dc5bf08fbec2e2b6a706c2ab6f6",
"assets/packages/flexurio_erp_core/asset/translation/en.json": "5caf520d350744f519776fd3c0aa0bbe",
"assets/packages/flexurio_erp_core/asset/translation/id.json": "e7950be2ed62cb4bc030a06931d55d67",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "16e78b0b89244570375891d81d8098df",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6883bb0bcfc421f3804f76ec3eed10df",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "3d45e20d97f10673d032b89c3075316a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "725bcae9564e710c34304f70bc4ab2eb",
"icons/Icon-192.png": "af81d15ef652d29c17d71f0255fd5aba",
"icons/Icon-512.png": "73bda10be2ca12bf1dffa6b94b7af920",
"icons/Icon-maskable-192.png": "af81d15ef652d29c17d71f0255fd5aba",
"icons/Icon-maskable-512.png": "73bda10be2ca12bf1dffa6b94b7af920",
"index.html": "35bf8583e7d76399ba151d28965c49a7",
"/": "35bf8583e7d76399ba151d28965c49a7",
"main.dart.js": "dba4b7794d47bc1f241859a236b38d6b",
"manifest.json": "0956b2156a3ad68e909990efc7e8c02e",
"version.json": "592b4e5d82c4a74a81a72cd32861e88d"};
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
