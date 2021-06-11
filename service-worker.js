/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/博客/github/MyBlog/public/2020/11/20/序列化/1.jpg","87b5803d466e7bd2e8ef10cc510433fd"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/2.png","cf1c7f28856bd346bbd8967fe7c5520d"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/3.png","12db2e9e5d23d62eef95d01677f0d368"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/4.png","ca00bf43b554e84d4583a315fba4c96c"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/5.png","a2c5e9e6f9e8dc37204e789146bdf82c"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/index.html","df1cdeda74e82075d97c7b2acb861d5d"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/1.png","b8f67a1c437bd40958a2f70be6e079a3"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/2.png","2c9f45bb95c0946341542fa0f86c0682"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/3.png","600f016d2ffce77499478bcb47888188"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/4.png","cb96e4e63c39397f49c9e88af99f42fc"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/5.png","45793736c9b65433c4003dcc2c2a8464"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/6.jpg","1973e23c23c2aedfd54df1b8cdc96cd5"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/7.png","91918ba2dd13b1d6fa253071ba5e92b6"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/8.png","588a9c28f438b6db8ad18eaea814c930"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/index.html","3ce0aa9071f1e8fa31caeff1bf435bef"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/1.png","582e94c4c585086c26881142b4b680a0"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/2.png","fc60ffd3070d5caf3ff1fb7e747c00cf"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/3.png","b3025486b3dfcd9ce7a884377de3950a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/4.png","528a7a5bc9249801fe6a4d733e075553"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/5.png","c8e0b72f3275441ea74c186e59f0e686"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/6.png","c597899edc8e4d5ac735a4c45e3cbe4a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/7.png","8be06e01c129a0dcada8dfc6dc74db90"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/index.html","520fcb0afefe51024e585b5900963893"],["D:/博客/github/MyBlog/public/2020/11/28/爆破脚本/index.html","c9d964bdcb00ef857d3098171fec5cb9"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/1.png","13cdbefd356d356b226ababd3341d716"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/10.png","19d81915b67b4f49cc34e35d3f4ca928"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/2.png","50f3c0b82cdb2e85f9ad58b59f712bcf"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/3.png","978ff966c9b6593aab4ecfa98cb689c9"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/4.png","7397a9832b316a2634825c4c8cacc44f"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/5.png","da7e2803796ee6e2fe5fc81bcc729286"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/6.png","d3a7c95ceb58cd2907eb3df3d7eba273"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/7.png","56d9ea1f4f77b91851a156e3b5522f84"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/8.png","101b22dd6d8ed4f40e7f0382f50a5119"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/9.png","ef28ec6126c899c35e0ff260f8418acd"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/index.html","f391c4823ab188149e08aa349c955537"],["D:/博客/github/MyBlog/public/2020/12/08/docker/index.html","ee5415848b6202ffde0d7181e12eea42"],["D:/博客/github/MyBlog/public/2020/12/08/linux/index.html","51b4f5342b2fa38636aa9f4fc1aa817a"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/1.png","61d938de8c04039b3015659d04ffeabb"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/10.png","52cbb7c593d4b6ec51ce9bf5a0bc1f6b"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/11.png","53a038496fed45ed51126454a26bcbc3"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/12.png","1b89febe490fcd9789ca078de9684cf7"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/13.png","628bd6e6f08b280435121e610e8abfd5"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/14.png","90e28ebd11756da7b6e06162e486c557"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/15.png","e128c5cf78d10082f5bb20f8e342177c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/16.png","595aabae75d70a56eccdc999fbf18eed"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/17.png","37e909a3c096d8f06c9f3e24202863fd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/2.png","1c6154c44681f7c4033fdc9082dfff45"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/3.png","c43a8ff84137db4e595a40fc3b047d27"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/4.png","51854a68944aaae268db6eb548d55791"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/5.png","54948790c37fbf55bc73c91eec82a93c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/6.png","13b33f039da5915837373d9e0d6190af"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/7.png","b5efe7d857686b764e594eb0b5d54785"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/8.png","b9d45a17954c65499f365c9bf2af75f1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/9.png","487fc8667f180ca7accde1c7d2cc82a1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/index.html","811c4fb3f0e9b49b41fa37ea36ac54d6"],["D:/博客/github/MyBlog/public/2020/12/09/nc/index.html","38faee0af6adc53c9e43a0d2091e435c"],["D:/博客/github/MyBlog/public/2020/12/10/信息搜集/index.html","3a1ae09b5be5f9e2b147bb61b219c677"],["D:/博客/github/MyBlog/public/2020/12/13/INF/1.png","f083829bd72ff736906fe074b722c1a7"],["D:/博客/github/MyBlog/public/2020/12/13/INF/2.png","ce97bdfc4f05eb420a3e140c551ed806"],["D:/博客/github/MyBlog/public/2020/12/13/INF/3.png","46cac517ad3843824825e33a64e2f3e4"],["D:/博客/github/MyBlog/public/2020/12/13/INF/4.png","bd1ca532a1c96aef63b97355419cadbe"],["D:/博客/github/MyBlog/public/2020/12/13/INF/index.html","37fdb2d6776c2fd7f9d9f362e41b2dc6"],["D:/博客/github/MyBlog/public/2020/12/16/ctfshow-web入门-命令执行/index.html","8f023dc4c87e343d0e97c593169617c4"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/1.png","eb8d0074c44c6061f50de99d18fe0aa0"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/2.png","5ae75524a410780c8e0e3e7d4f68aafd"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/index.html","31a8dd38f49493cfb233839c23118f9b"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/1.png","d1e16ab35952093d696b04e0979b5ccb"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/index.html","6ec972b3c6a2d21c1491f138b2578d5b"],["D:/博客/github/MyBlog/public/2020/12/21/ctfshow_web入门-文件包含/index.html","200cb0217bfcdc34671ec474bf3acc2c"],["D:/博客/github/MyBlog/public/2020/12/23/ctfshow-web入门-sql注入/index.html","22255846203f08162bbb50bb301a240a"],["D:/博客/github/MyBlog/public/2020/12/29/kali网络攻击/index.html","60eb6ee04fac35991e156c7daca82c34"],["D:/博客/github/MyBlog/public/2020/12/31/java-Dao/index.html","5e558d767ab817528f821162be430666"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/1.png","f1dbaa097ccc29e27933e5d734b8af2a"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/index.html","be4f1501fb307db26dcedc6a7f515970"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/1.png","e438ebe1541790d78848b3898df39231"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/2.png","bca4145776b4d7cc029b976eaea48669"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/index.html","2a0268ba26bfd2afd148aa93ac849067"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/1.png","a36432fea2ee65b4c6a4217d3b4ce230"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/2.png","11dbb7f1bbbdd2f747d1ef19948a5f31"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/3.png","8cea0417b3e484f6fa14da212022ab76"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/4.png","dac2cc71521f980466d6b5b185447409"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/5.png","eda8a2767c73e2fcd6a8139a9087efd6"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/6.png","6cb3cb3ff16cad1ef19213c80f462a7e"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/index.html","2997dd20e5b4d7705a95621ea11f4389"],["D:/博客/github/MyBlog/public/2021/01/05/nmap/index.html","6c92a0665f4914b901221e13326bdf85"],["D:/博客/github/MyBlog/public/2021/01/17/centos搭建php环境/index.html","b489b2a0304481590be3014ffe2e32d0"],["D:/博客/github/MyBlog/public/2021/01/19/vulhub搭建/index.html","87f15e1620326a9fa5bcf3e5786356e3"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/1.png","fabd53e1eff20c9af3eae4a45bbb14ed"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/index.html","97de86393ee028e25da5d2d3556c6930"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/1.png","d06ad86dc5d9a9cd225187f7141e50bc"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/2.png","7a038cb1e686b3f47c00a21ded2b850e"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/index.html","65f45d0bfa7d351a9d7bafc76402988e"],["D:/博客/github/MyBlog/public/2021/01/24/A-B和C/index.html","501be5ac0ac1259ec609f85d4da7cfb5"],["D:/博客/github/MyBlog/public/2021/01/26/java内存泄露/index.html","e1585fa996938a8dec929076f68be8df"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/1.png","2aaa908cb690dd8b0dc38548c33a6ac7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/2.png","533ef5b6ec24169c1a6470ffaf17d9e4"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/3.png","cc3f1812727b01df454e82f5478effe7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/4.png","5e2bf090cfb188b190b0cf0e7072487d"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/5.png","29399b90f543faf4eefeda19cc426498"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/index.html","27af49c2b98d0be4e030b2a4ad18b973"],["D:/博客/github/MyBlog/public/2021/01/27/容器解析漏洞/index.html","b155a61e228fcad4a4db6de5d2968a6c"],["D:/博客/github/MyBlog/public/2021/02/21/服务器总结/index.html","8a0880c0a3870ec857c19323327f82fa"],["D:/博客/github/MyBlog/public/2021/03/02/git的基本使用/index.html","50babfed6a9a0858710e678319a8e569"],["D:/博客/github/MyBlog/public/2021/03/05/AJAX/index.html","02f0f313bd2f928ce735622228a3d46b"],["D:/博客/github/MyBlog/public/2021/03/06/安全设备/index.html","374d25c9d5401b5156c35bd12502b117"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/1.png","815297283b1d574f7e3a3643b42ce9a3"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/2.png","8519071b1dad1a56f136ad2982ecb274"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/index.html","cecfa3df9c31d64ec682fb64f1c77b94"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/1.png","2bf4209a63e5c2aaec2d9fdeb0778c9f"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/2.png","cd7b6f2846673b7809779b7e28374658"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/3.png","d49fde9d7185877e087145d115d49400"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/4.png","cfc8b81f13b9420b0a56dafe5688d2b0"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/5.png","618e7855818612716c7e91422f81d734"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/index.html","719f701f355e7c6f1b9f497980a467e7"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/1.png","fc25160190fadc6e2534b12ab6977a61"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/index.html","2a5537f1dcebbbbfc70ca2d000351853"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/1.png","db5bd479541659562d6080c9482074c7"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/2.png","6b67c57323e10e3e6673302373e18930"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/3.png","52a9f4c1552e3b1f4b4c1e65385e28c2"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/4.png","3e11c0a3e1c470041a2133ce66de0151"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/5.png","fd92da4dff6b4a3b415cdfd0cd15b9bf"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/index.html","598337703555f91f241c4bf5ea4b1a83"],["D:/博客/github/MyBlog/public/2021/03/16/jsp与asp的一些记录/index.html","44322d7fbd5bc1674e321b30689bea08"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/1.png","13317d552e3e9bf7fce6bcf0ec843663"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/2.png","3c097ad537d52124861d6cc9b8133c34"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/3.png","ec4e083a3230703d001e58a3514f6b0c"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/4.png","9f6505d4a4906fd8bf1b58d3e411f42f"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/5.png","eb85d5a92641db8ffb475da53e690ab6"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/6.png","2235a69bfc00bf75dbf72f5d9766e970"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/index.html","0c5702428d923329efc6c7b1f5d153f7"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/1.png","f1692ed8e3c9f957ef3cb25577a2da44"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/10.png","3ff5b5f2f1fb7be07938d690258af1e6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/11.png","9577c1c05a798c0b0d7e998e6e240b90"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/12.png","2155dd185ca38148440e92645865708a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/13.png","086538a2a600f5858ec68cb33731c856"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/14.png","55b6ea8075b1a4a8a490ad459bf0bea8"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/15.png","d4dd5cabaf6d9062d96d7fcc381c02ae"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/16.png","978f2d4edc821f3f73bd676a473fef5a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/17.png","b49897046f392a84df380e5e60e97be6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/18.png","b27f61155e88b81a077acd0e5299913f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/19.png","6516de08e91f70f8cdf013468a6792d7"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/2.png","c92cabe2c3d1e2e1a7142edcefd03c6f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/20.png","eee2d047c9bbc8d45e0f93863f77cab9"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/21.png","ed1bc48fa12919d10b0ab3c780d711af"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/22.png","131e6245a9523195afaaed3e580f8a99"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/23.png","f1555ad245726d4b0edcba769dff557c"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/24.png","2151d200a4b7660156e6fe3d57b0d7bb"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/25.png","6d516ff229e53538a94822a11dc79cab"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/26.png","f4bbd410daa94e61811cfea47e8d3fa1"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/27.png","99c9e00accfa3c1aff67ad2c2c30ffc4"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/28.png","4fdd15665cb243be8c19d453677b243d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/29.png","6f80f73d8c4562508556be80e2ee6553"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/3.png","919735203de39b711b769272da335d1d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/4.png","a4f6c2da772b81f09d87f2ceaeb77432"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/5.png","00a6edd2c4616f00270b31f970a4be7b"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/6.png","102050a28f0a55098e5f0aec312b1077"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/7.png","3aa9915027051b3639d21a03ec92e604"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/8.png","12801f55ac030e1c0e1cf1e5d2f3a5c2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/9.png","711119256dd22ec61ed5d04f7cdcb8e2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/index.html","030dd7da4b1225fe122bab99bf6a3ef4"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/1.png","3418fa472637ec55776e096a7fc39b6b"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/2.png","1a358988b5f7ae13755563d2439d2494"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/3.png","76097c4d7657e08f31e7af7cd7e7000a"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/index.html","55b64d343b949ae10859cc197725d6eb"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/1.png","b85eb9ee3351c1377cabaecfae6fd5ae"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/index.html","48580d10b351dd602a1fb4a930fbc745"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/1.png","0b403572a2a4459eb223bccce926039d"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/2.png","9b3023049df67504452dfb5083d64dbd"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/index.html","2e85c767d70c35cb1eaddbab436334a0"],["D:/博客/github/MyBlog/public/2021/03/23/青藤云hw面试题/index.html","36cefe4190f70148979a2319e72016e9"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/1.png","fc1d4a589ad51ed4ef7a4b40550e9dc6"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/2.png","fcbfc0ab223cd66b4f4e0c5874a3c6af"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/3.png","cd2c498551ed6ebd598937363ce38bbe"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/index.html","79cade014648b604567e5756dc53265c"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/1.png","36050d599ece86cca7a9df1c677a95cd"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/2.png","0ed4cdd2729c89ad0023506bc674e3c6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/3.png","022cea351f1240c7de954081950715a6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/4.png","a62f7fd4c56a1cdb566b70856af86ba5"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/5.png","1aa8cfc4dce3f32d7c07158c6dc75d67"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/6.png","4008e1a97f3531a6134cdcc3af351a19"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/7.png","500a262f055ea3f8a89f4e74eb1bf08f"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/index.html","4daa8c1dfe55050552621377b8085952"],["D:/博客/github/MyBlog/public/2021/04/06/APM/index.html","414819c98bc97fd7b9c53f1fa09ba7c1"],["D:/博客/github/MyBlog/public/2021/04/07/135端口利用/index.html","ac7259bb2b4d389af351396d93ccd06d"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/1.png","d9dd55301711b1405fbf5983c5ad3caa"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/index.html","a47d4045cfe3c45d5b5f1cc2679bc48c"],["D:/博客/github/MyBlog/public/2021/04/15/使用软链接修改默认启动项/index.html","4964e5865a1ff78ff70a8b14bda1ca11"],["D:/博客/github/MyBlog/public/2021/04/16/linux下删除中文乱码文件/index.html","e931f53330262daff91da2ecd2a633c7"],["D:/博客/github/MyBlog/public/2021/04/17/端口复用/index.html","df7bbda396fe5a9b3f12a4e711161a6c"],["D:/博客/github/MyBlog/public/2021/04/18/溯源/index.html","de3b9e94331a4396f80d5367b8fc2d16"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/1.png","513c5b25f5193279ba2bb30e22485780"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/2.png","0c4559b93121ab35d4ca15261f571ad5"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/3.png","49f64f6f902b29b601e907d2af021f4d"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/index.html","9acb0f3354e4df6f29cc18d8cc36f714"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/1.png","eff909f136ee4cc076bc98169191bedb"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/2.png","4dd58afea167d81cfac35f7616226d3e"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/3.png","b846473db4d1dc425d0bb31e3b04de90"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/4.png","a12d525fb27732d4d37799ccb9f19fd0"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/5.png","145feb2e824ce87e16022d5262b69bf1"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/6.png","67943c006788528ec06fa5dfc8e1f5f3"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/index.html","548c96aa2a823e6955f48fda4d6dc218"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/1.png","bed2e3836c589116c63d0093cc9be80d"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/2.png","a40d661942ba2444003123e8d99db265"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/index.html","5a57f8e85643bbb38ab1e54334faab31"],["D:/博客/github/MyBlog/public/2021/04/19/内存马/index.html","d20f3c8f69748c3ff9a689fa6dd5c148"],["D:/博客/github/MyBlog/public/2021/04/20/pickle/index.html","b5993fb2b1eacbfa753d0a35038a1f66"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/1.png","37e8feebe81bde13c12812340ecfe975"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/2.png","b1e273ce11664d966b858d8f820c16ea"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/3.png","0113d911496279b1eeb09b04a074c1cd"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/4.png","f3617e7ea37ec016068e086bb7ea26e4"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/index.html","c431b56cf6741abf2c6e85a79e9251e5"],["D:/博客/github/MyBlog/public/2021/05/04/java-agent/index.html","4ccb3142c1c70e3257b8b40f809e743a"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/1.png","56aa34b3a5b3f300044f8ef522a44e6b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/10.png","65197222454ae0d64257d8951ea46cae"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/11.png","b5a3c0ab4f1984d0f9a8fa73adeda20b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/2.png","1ca994f7e54b60a615519e76ae2d68cf"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/3.png","c81fe6e0b9face5581bd9a20a7a78817"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/4.png","bcba0858b0a26bac2126b743fd1c3f1b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/5.png","a33ee6e24f3534326d512a3cbe301194"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/6.png","64f39a2864a0a31fb5a30d5afef441a0"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/7.png","cffbf9d00d36c156259f63cb5c6a2e3a"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/8.png","ea4ae6c26d2c20e64e4c77f6e572b582"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/9.png","1321bb032c1cd4181884c2d5a606c883"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/index.html","41e44d6c183da59232e56670019c8105"],["D:/博客/github/MyBlog/public/2021/05/04/thinkphp-5-x/index.html","496df4ac01078ce76f82efcbf79a4ac3"],["D:/博客/github/MyBlog/public/2021/05/07/linux和windows加固/1.png","c0d4b13ffeb867333295648da84191b5"],["D:/博客/github/MyBlog/public/2021/05/07/linux和windows加固/index.html","e4c2669ef34f2ed40bf6939220e45090"],["D:/博客/github/MyBlog/public/2021/05/09/域前置与隐藏C2/index.html","0646b5e0e79ce1666c4e9603bf7742a9"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/1.png","46957aa7d0d043e8e67cf7e0d792009f"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/10.png","b701de2851fab724e4511d33b76f7d3a"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/11.png","51088ab0688899ca5bfed598e467afc2"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/2.png","a7e39bc487fcd5856a1352f79bed4164"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/3.png","84bfa8514bf3c3f0ad98b40e5721206d"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/4.png","ed0e1503c3735a505af3df0431cb0e26"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/5.png","b32cf444cc397c9f6c6ff6974d590ddb"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/6.png","4bf866bc0e62af27720ecf98691399fd"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/7.png","fdd5d6b25b5138574340f28c2eabac62"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/8.png","0787dd2a7818a09332f4ad8d6faf9d8e"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/9.png","23254e018286482b8d7792a3a07236c2"],["D:/博客/github/MyBlog/public/2021/05/10/linux反弹shell/index.html","75fb755db0de137ed1ddb129ae5bd8c7"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/1.png","d12d59494bff8de584b2742cea9a7ec9"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/2.png","16391f9a57f7fe20f4bb8d318fd0ac0f"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/3.png","0ffaf8f69f37ca9a2a5ee2c9ff3a0435"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/4.png","b1ef22fbfd79733690f677881802bbd5"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/index.html","f146674e0e5faf7b6fbc6195d353ebb4"],["D:/博客/github/MyBlog/public/2021/06/04/SSTI/1.png","44d70138fbab4bcc7ecb594140e8b40d"],["D:/博客/github/MyBlog/public/2021/06/04/SSTI/2.png","790a2d2380608e01fe8434ca3003bd1f"],["D:/博客/github/MyBlog/public/2021/06/04/SSTI/index.html","7e5818522edb2afd67b4ebc4f221e593"],["D:/博客/github/MyBlog/public/2021/06/04/easy-cal/1.png","fa937c897dce828fa914e72a2cb7b85b"],["D:/博客/github/MyBlog/public/2021/06/04/easy-cal/index.html","f5a76758df256898a57050e522a58446"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/1.png","7575cf742766a6619a92b485df7eb25a"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/2.png","5ca7a155ed07aa7c1356d2d71c587f72"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/3.png","928186b6b03e5c183d031fb4a88a49d2"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/4.png","e26e878f45b9b8b277781ce6d11d72fa"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/5.png","4ec15d4dd81477d798cb364964d28c2f"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/6.png","9ef846393644d9103e23a1db51659251"],["D:/博客/github/MyBlog/public/2021/06/05/文件上传/index.html","63be96e53b504690db4cb1294d5ab423"],["D:/博客/github/MyBlog/public/2021/06/07/EasySearch/1.png","fc527674dbdeb700dbe80a8de808674d"],["D:/博客/github/MyBlog/public/2021/06/07/EasySearch/2.png","bf7858a40d1a9f5f9152b43be9d7ae36"],["D:/博客/github/MyBlog/public/2021/06/07/EasySearch/index.html","69ab1c00ba445092ec62b37b141adaef"],["D:/博客/github/MyBlog/public/404.html","584e6ab74473b575385a51fd91545b16"],["D:/博客/github/MyBlog/public/archives/2020/11/index.html","f7b2af6edf20e6e0b4dd2527a2a11591"],["D:/博客/github/MyBlog/public/archives/2020/12/index.html","01c1396b6683e7e9eb2214e279422db2"],["D:/博客/github/MyBlog/public/archives/2020/index.html","45938cc53e427922d1c4be71b6913694"],["D:/博客/github/MyBlog/public/archives/2021/01/index.html","d5e34cd1b29c6d02b2d29c3b9e61242e"],["D:/博客/github/MyBlog/public/archives/2021/02/index.html","850bd1614afc508aed94638048af23f1"],["D:/博客/github/MyBlog/public/archives/2021/03/index.html","16817cd3d87afa67c7315293d44fa0bc"],["D:/博客/github/MyBlog/public/archives/2021/04/index.html","cd40b4af0b580bcf67e15c721557ef90"],["D:/博客/github/MyBlog/public/archives/2021/05/index.html","fc622acaaf3602d79a6667081d1e4f43"],["D:/博客/github/MyBlog/public/archives/2021/06/index.html","d92b626b5f8d574cc4f884b049ff8a36"],["D:/博客/github/MyBlog/public/archives/2021/index.html","edec8bd7c6c280dc9a1964917ed081af"],["D:/博客/github/MyBlog/public/archives/2021/page/2/index.html","6c9eab654e60c4644492aae16a797ede"],["D:/博客/github/MyBlog/public/archives/2021/page/3/index.html","a862e2ea5d0e0a3e8a681650d941cd24"],["D:/博客/github/MyBlog/public/archives/index.html","1a7de98f20687c1fe9acbb273ce86f1a"],["D:/博客/github/MyBlog/public/archives/page/2/index.html","88c454438080fed20c60b80e0b370f90"],["D:/博客/github/MyBlog/public/archives/page/3/index.html","fb319bca771f8b3be7fab36344cd63f2"],["D:/博客/github/MyBlog/public/archives/page/4/index.html","4b4ad12a07dd0df0bb0ea325ad5f13f2"],["D:/博客/github/MyBlog/public/categories/CTF/index.html","b30acd999e9db849a0f69b5ad86246a5"],["D:/博客/github/MyBlog/public/categories/Kali/index.html","3c35d23ac39dda49b71c305623b16eda"],["D:/博客/github/MyBlog/public/categories/index.html","796c81a4a41cd0b2e41bd6eb4e096b24"],["D:/博客/github/MyBlog/public/categories/java/index.html","145344fa0f129ea975a9d1140b9bd202"],["D:/博客/github/MyBlog/public/categories/linux/index.html","ddd221a695e6c9e53aff10d805633eeb"],["D:/博客/github/MyBlog/public/categories/python/index.html","08b525b1575159ca24f67a8564b00949"],["D:/博客/github/MyBlog/public/categories/工具/index.html","aa24b680a227b9e83d6d4910cdc217ca"],["D:/博客/github/MyBlog/public/categories/渗透测试/index.html","61ab2a60c6b4c8934a456538d2a13291"],["D:/博客/github/MyBlog/public/categories/漏洞复现/index.html","e1de62af4ad2a0962c1e611c7d4d292d"],["D:/博客/github/MyBlog/public/categories/笔记/index.html","1dfaef1f39367bf4c040ab0f07035655"],["D:/博客/github/MyBlog/public/categories/笔记/page/2/index.html","1b8a675b6dc5e9b65099df6545dfbca5"],["D:/博客/github/MyBlog/public/categories/编程/index.html","b8cb38ee081a35a20051098c7de83186"],["D:/博客/github/MyBlog/public/categories/脚本编写/index.html","20f1da84d593e98ab5c0ae76ae97cc8d"],["D:/博客/github/MyBlog/public/categories/面试题/index.html","746d96dfdc9c6d650595be8a31875f68"],["D:/博客/github/MyBlog/public/categories/靶场/index.html","d43ae53b1402a2adfc712fc1f3ff53fe"],["D:/博客/github/MyBlog/public/css/index.css","e2c54cb6ea90e1ec8ba974030f4a272f"],["D:/博客/github/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/博客/github/MyBlog/public/img/1.jpg","567b4c69c65374f3c556a6e8d5482233"],["D:/博客/github/MyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/博客/github/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/博客/github/MyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/博客/github/MyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/博客/github/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/博客/github/MyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/博客/github/MyBlog/public/img/图库/1.jpg","d2b4a168f2370179df97777e43be1513"],["D:/博客/github/MyBlog/public/img/图库/10.jpg","33e849e29c33be8ef1a578b2f6f731a4"],["D:/博客/github/MyBlog/public/img/图库/11.jpg","c29603fbaa7c1da6528771f97ded1efb"],["D:/博客/github/MyBlog/public/img/图库/12.jpg","e81a061445f06afb72d9bb29f92dc141"],["D:/博客/github/MyBlog/public/img/图库/13.jpg","b7fa46c15cce388469f8f83e57201fa0"],["D:/博客/github/MyBlog/public/img/图库/14.jpg","0e17fd4e30f427f9906620372003c677"],["D:/博客/github/MyBlog/public/img/图库/15.jpg","4810a512db049b25a43f17b94cf56569"],["D:/博客/github/MyBlog/public/img/图库/16.jpg","5cff568bc5ca40e922a91177548ac305"],["D:/博客/github/MyBlog/public/img/图库/17.jpg","6545c99d89d4a0594179561e8a0a2845"],["D:/博客/github/MyBlog/public/img/图库/18.jpg","23a29f8c6e22727232559a379c1db488"],["D:/博客/github/MyBlog/public/img/图库/19.jpg","866a7d4cf7f5e6fc645ff59c71638932"],["D:/博客/github/MyBlog/public/img/图库/2.jpg","fed2f4e7860322da91af10a340e8560a"],["D:/博客/github/MyBlog/public/img/图库/20.jpg","e687c9f4474672b9cf7d202f55a05f64"],["D:/博客/github/MyBlog/public/img/图库/21.jpg","1158c3705521a2e2c2129d0e0c367bd3"],["D:/博客/github/MyBlog/public/img/图库/22.jpg","963ddf4cf4af00ad2811d575b21bcfc3"],["D:/博客/github/MyBlog/public/img/图库/23.jpg","afac975317036a40ff91ae7c8d0e833b"],["D:/博客/github/MyBlog/public/img/图库/24.jpg","0d9e17957bee66003063610283bebded"],["D:/博客/github/MyBlog/public/img/图库/25.jpg","6444310f3d08621865d7b8980ea49e84"],["D:/博客/github/MyBlog/public/img/图库/26.jpg","b44aa953db328fbdfd9b685e7adc45e9"],["D:/博客/github/MyBlog/public/img/图库/27.jpg","af99bb747603ffbb6a277a12e84af778"],["D:/博客/github/MyBlog/public/img/图库/28.jpg","b418b784d642933b7a2e56f16a72f34c"],["D:/博客/github/MyBlog/public/img/图库/29.jpg","911f3df25fc7d27e1bff3a3f27a082f1"],["D:/博客/github/MyBlog/public/img/图库/3.jpg","c766617c4ada671270c77fe9aa28ee5b"],["D:/博客/github/MyBlog/public/img/图库/30.jpg","c6fadc02e4453ab733bdb8c5c256012c"],["D:/博客/github/MyBlog/public/img/图库/4.jpg","faec6e8496abbb17046fbf77695c4cd8"],["D:/博客/github/MyBlog/public/img/图库/5.jpg","114241e804fcdd68cafabe4372b2f08b"],["D:/博客/github/MyBlog/public/img/图库/6.jpg","ed864b453b1381640eb987b169339f3c"],["D:/博客/github/MyBlog/public/img/图库/7.jpg","eb5c4199c64307b3c94b8efdaf30b8a7"],["D:/博客/github/MyBlog/public/img/图库/8.jpg","6bca9dd6cb0242d7a320c9f005268d39"],["D:/博客/github/MyBlog/public/img/图库/9.jpg","1469c5f303c03baf540b1a360958a02a"],["D:/博客/github/MyBlog/public/index.html","1c28d8a51fd095d9f685619a7799ec74"],["D:/博客/github/MyBlog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/博客/github/MyBlog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/博客/github/MyBlog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/博客/github/MyBlog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/博客/github/MyBlog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/博客/github/MyBlog/public/link/index.html","d157ae70553976171dbebeba677486a4"],["D:/博客/github/MyBlog/public/page/2/index.html","1041198581df26c55e411b6e86ac43a1"],["D:/博客/github/MyBlog/public/page/3/index.html","abd98613c2544cef9a1e6ac04f75009c"],["D:/博客/github/MyBlog/public/page/4/index.html","bacd42585365b880c0cb0ddaa41835de"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







