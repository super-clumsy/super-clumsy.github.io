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

var precacheConfig = [["D:/博客/github/MyBlog/public/2020/11/20/序列化/1.jpg","87b5803d466e7bd2e8ef10cc510433fd"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/2.png","cf1c7f28856bd346bbd8967fe7c5520d"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/3.png","12db2e9e5d23d62eef95d01677f0d368"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/4.png","ca00bf43b554e84d4583a315fba4c96c"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/index.html","1bf9ff07dcf0741dfa8f8fcbb2e1c628"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/1.png","b8f67a1c437bd40958a2f70be6e079a3"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/2.png","2c9f45bb95c0946341542fa0f86c0682"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/3.png","600f016d2ffce77499478bcb47888188"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/4.png","cb96e4e63c39397f49c9e88af99f42fc"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/5.png","45793736c9b65433c4003dcc2c2a8464"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/6.jpg","1973e23c23c2aedfd54df1b8cdc96cd5"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/7.png","91918ba2dd13b1d6fa253071ba5e92b6"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/8.png","588a9c28f438b6db8ad18eaea814c930"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/index.html","6bf231229421c9be4f0d63976502cfd9"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/1.png","582e94c4c585086c26881142b4b680a0"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/2.png","fc60ffd3070d5caf3ff1fb7e747c00cf"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/3.png","b3025486b3dfcd9ce7a884377de3950a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/4.png","528a7a5bc9249801fe6a4d733e075553"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/5.png","c8e0b72f3275441ea74c186e59f0e686"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/6.png","c597899edc8e4d5ac735a4c45e3cbe4a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/7.png","8be06e01c129a0dcada8dfc6dc74db90"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/index.html","76da4c2b0b41fc21af5425c104bb73a4"],["D:/博客/github/MyBlog/public/2020/11/28/爆破脚本/index.html","3c79ea0efe165bb935d4af453f2d30f4"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/1.png","13cdbefd356d356b226ababd3341d716"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/10.png","19d81915b67b4f49cc34e35d3f4ca928"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/2.png","50f3c0b82cdb2e85f9ad58b59f712bcf"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/3.png","978ff966c9b6593aab4ecfa98cb689c9"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/4.png","7397a9832b316a2634825c4c8cacc44f"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/5.png","da7e2803796ee6e2fe5fc81bcc729286"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/6.png","d3a7c95ceb58cd2907eb3df3d7eba273"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/7.png","56d9ea1f4f77b91851a156e3b5522f84"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/8.png","101b22dd6d8ed4f40e7f0382f50a5119"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/9.png","ef28ec6126c899c35e0ff260f8418acd"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/index.html","9f1622e04f1ca8a162955c5987b0463f"],["D:/博客/github/MyBlog/public/2020/12/08/docker/index.html","bf87174a721b3e76dbcbe87e08f0ff5e"],["D:/博客/github/MyBlog/public/2020/12/08/linux/index.html","9fc9d05a35d22e3dcd0ace140adaffdd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/1.png","61d938de8c04039b3015659d04ffeabb"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/10.png","52cbb7c593d4b6ec51ce9bf5a0bc1f6b"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/11.png","53a038496fed45ed51126454a26bcbc3"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/12.png","1b89febe490fcd9789ca078de9684cf7"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/13.png","628bd6e6f08b280435121e610e8abfd5"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/14.png","90e28ebd11756da7b6e06162e486c557"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/15.png","e128c5cf78d10082f5bb20f8e342177c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/16.png","595aabae75d70a56eccdc999fbf18eed"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/17.png","37e909a3c096d8f06c9f3e24202863fd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/2.png","1c6154c44681f7c4033fdc9082dfff45"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/3.png","c43a8ff84137db4e595a40fc3b047d27"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/4.png","51854a68944aaae268db6eb548d55791"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/5.png","54948790c37fbf55bc73c91eec82a93c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/6.png","13b33f039da5915837373d9e0d6190af"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/7.png","b5efe7d857686b764e594eb0b5d54785"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/8.png","b9d45a17954c65499f365c9bf2af75f1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/9.png","487fc8667f180ca7accde1c7d2cc82a1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/index.html","4552803c7e522228a4d5a9ade5618713"],["D:/博客/github/MyBlog/public/2020/12/09/nc/index.html","f90ba3d5b098f24a8b8fd5e28465d862"],["D:/博客/github/MyBlog/public/2020/12/10/信息搜集/index.html","d1e2a19441b8ff2ab84ac43a79eaf9c1"],["D:/博客/github/MyBlog/public/2020/12/13/INF/1.png","f083829bd72ff736906fe074b722c1a7"],["D:/博客/github/MyBlog/public/2020/12/13/INF/2.png","ce97bdfc4f05eb420a3e140c551ed806"],["D:/博客/github/MyBlog/public/2020/12/13/INF/3.png","46cac517ad3843824825e33a64e2f3e4"],["D:/博客/github/MyBlog/public/2020/12/13/INF/4.png","bd1ca532a1c96aef63b97355419cadbe"],["D:/博客/github/MyBlog/public/2020/12/13/INF/index.html","c46bd2fdf299de5f7432f7736257815e"],["D:/博客/github/MyBlog/public/2020/12/16/ctfshow-web入门-命令执行/index.html","4f575fb34016556fa8876e53f634c181"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/1.png","eb8d0074c44c6061f50de99d18fe0aa0"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/2.png","5ae75524a410780c8e0e3e7d4f68aafd"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/index.html","8cef99bada7e15af6f27fc25576ada07"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/1.png","d1e16ab35952093d696b04e0979b5ccb"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/index.html","dec4cbbed4e2b1fdf75f4195a80db39e"],["D:/博客/github/MyBlog/public/2020/12/21/ctfshow_web入门-文件包含/index.html","c52049eba5613f235507fb40fd1a1386"],["D:/博客/github/MyBlog/public/2020/12/23/ctfshow-web入门-sql注入/index.html","108bff11c6f0d54bada428a49cb4d4a4"],["D:/博客/github/MyBlog/public/2020/12/29/kali网络攻击/index.html","91345d137d90e7ecccd0e04188296675"],["D:/博客/github/MyBlog/public/2020/12/31/java-Dao/index.html","5bf5ca00b4b6ba12093fe616671b8eeb"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/1.png","f1dbaa097ccc29e27933e5d734b8af2a"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/index.html","087a25f517215fc45208d52ab0997860"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/1.png","e438ebe1541790d78848b3898df39231"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/2.png","bca4145776b4d7cc029b976eaea48669"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/index.html","1ea386629097a143c99920a76ecd7db8"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/1.png","a36432fea2ee65b4c6a4217d3b4ce230"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/2.png","11dbb7f1bbbdd2f747d1ef19948a5f31"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/3.png","8cea0417b3e484f6fa14da212022ab76"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/4.png","dac2cc71521f980466d6b5b185447409"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/5.png","eda8a2767c73e2fcd6a8139a9087efd6"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/6.png","6cb3cb3ff16cad1ef19213c80f462a7e"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/index.html","d900f215d9c6e22d204e6ac16c02abe8"],["D:/博客/github/MyBlog/public/2021/01/05/nmap/index.html","ccf744cbaab0661a584767a700752db9"],["D:/博客/github/MyBlog/public/2021/01/17/centos搭建php环境/index.html","f587ea6af2bb373376f5eed9bf0e4d26"],["D:/博客/github/MyBlog/public/2021/01/19/vulhub搭建/index.html","8f5adf2cabf6f7bda3f13c3fdac32f7c"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/1.png","fabd53e1eff20c9af3eae4a45bbb14ed"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/index.html","2ec0482a40b96f73140da1d5f218d8f3"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/1.png","d06ad86dc5d9a9cd225187f7141e50bc"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/2.png","7a038cb1e686b3f47c00a21ded2b850e"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/index.html","fa8a835abc3b36449632aa6480af0ac1"],["D:/博客/github/MyBlog/public/2021/01/24/A-B和C/index.html","980ff865d3f3a92d65c7e217fbe76e7f"],["D:/博客/github/MyBlog/public/2021/01/26/java内存泄露/index.html","3121844fba260bb0bfdd65c4ff46b947"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/1.png","2aaa908cb690dd8b0dc38548c33a6ac7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/2.png","533ef5b6ec24169c1a6470ffaf17d9e4"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/3.png","cc3f1812727b01df454e82f5478effe7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/4.png","5e2bf090cfb188b190b0cf0e7072487d"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/5.png","29399b90f543faf4eefeda19cc426498"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/index.html","110e226659eb9e79405caeff23272b75"],["D:/博客/github/MyBlog/public/2021/01/27/容器解析漏洞/index.html","8a1ff5b78dc83fea4419221eda9e2ad8"],["D:/博客/github/MyBlog/public/2021/02/21/服务器总结/index.html","4d3c6c264030385ffd61ec783986a7f8"],["D:/博客/github/MyBlog/public/2021/03/02/git的基本使用/index.html","ad1830e05db5db34317a65ddd0f912c0"],["D:/博客/github/MyBlog/public/2021/03/05/AJAX/index.html","b7194e58593093a624b0324bfa8cd31c"],["D:/博客/github/MyBlog/public/2021/03/06/安全设备/index.html","074e4a1b962fbc72634dbd1149c2cc20"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/1.png","815297283b1d574f7e3a3643b42ce9a3"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/2.png","8519071b1dad1a56f136ad2982ecb274"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/index.html","fb2cf3cea89dd334f15e3347fd037995"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/1.png","2bf4209a63e5c2aaec2d9fdeb0778c9f"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/2.png","cd7b6f2846673b7809779b7e28374658"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/3.png","d49fde9d7185877e087145d115d49400"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/4.png","cfc8b81f13b9420b0a56dafe5688d2b0"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/5.png","618e7855818612716c7e91422f81d734"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/index.html","9f8a10a73ed118704110e1286b4e8488"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/1.png","fc25160190fadc6e2534b12ab6977a61"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/index.html","50422957dc601fb628463973dd6b61ca"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/1.png","db5bd479541659562d6080c9482074c7"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/2.png","6b67c57323e10e3e6673302373e18930"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/3.png","52a9f4c1552e3b1f4b4c1e65385e28c2"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/4.png","3e11c0a3e1c470041a2133ce66de0151"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/5.png","fd92da4dff6b4a3b415cdfd0cd15b9bf"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/index.html","916170e1deca5268046bea4ec64d4440"],["D:/博客/github/MyBlog/public/2021/03/16/jsp与asp的一些记录/index.html","037000d7c955e2e640527c2bef393e69"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/1.png","13317d552e3e9bf7fce6bcf0ec843663"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/2.png","3c097ad537d52124861d6cc9b8133c34"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/3.png","ec4e083a3230703d001e58a3514f6b0c"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/4.png","9f6505d4a4906fd8bf1b58d3e411f42f"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/5.png","eb85d5a92641db8ffb475da53e690ab6"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/6.png","2235a69bfc00bf75dbf72f5d9766e970"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/index.html","4845b96a82a5475e1f77e6a8125a84bc"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/1.png","f1692ed8e3c9f957ef3cb25577a2da44"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/10.png","3ff5b5f2f1fb7be07938d690258af1e6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/11.png","9577c1c05a798c0b0d7e998e6e240b90"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/12.png","2155dd185ca38148440e92645865708a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/13.png","086538a2a600f5858ec68cb33731c856"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/14.png","55b6ea8075b1a4a8a490ad459bf0bea8"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/15.png","d4dd5cabaf6d9062d96d7fcc381c02ae"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/16.png","978f2d4edc821f3f73bd676a473fef5a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/17.png","b49897046f392a84df380e5e60e97be6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/18.png","b27f61155e88b81a077acd0e5299913f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/19.png","6516de08e91f70f8cdf013468a6792d7"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/2.png","c92cabe2c3d1e2e1a7142edcefd03c6f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/20.png","eee2d047c9bbc8d45e0f93863f77cab9"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/21.png","ed1bc48fa12919d10b0ab3c780d711af"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/22.png","131e6245a9523195afaaed3e580f8a99"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/23.png","f1555ad245726d4b0edcba769dff557c"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/24.png","2151d200a4b7660156e6fe3d57b0d7bb"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/25.png","6d516ff229e53538a94822a11dc79cab"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/26.png","f4bbd410daa94e61811cfea47e8d3fa1"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/27.png","99c9e00accfa3c1aff67ad2c2c30ffc4"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/28.png","4fdd15665cb243be8c19d453677b243d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/29.png","6f80f73d8c4562508556be80e2ee6553"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/3.png","919735203de39b711b769272da335d1d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/4.png","a4f6c2da772b81f09d87f2ceaeb77432"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/5.png","00a6edd2c4616f00270b31f970a4be7b"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/6.png","102050a28f0a55098e5f0aec312b1077"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/7.png","3aa9915027051b3639d21a03ec92e604"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/8.png","12801f55ac030e1c0e1cf1e5d2f3a5c2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/9.png","711119256dd22ec61ed5d04f7cdcb8e2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/index.html","7ca680453a1ccfa8f0ea8c1cca8a97a8"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/1.png","3418fa472637ec55776e096a7fc39b6b"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/2.png","1a358988b5f7ae13755563d2439d2494"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/3.png","76097c4d7657e08f31e7af7cd7e7000a"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/index.html","e2f6cd65c4611ea2d3f6f816740af67d"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/1.png","b85eb9ee3351c1377cabaecfae6fd5ae"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/index.html","b82c1e7426f2231cb6228100123d3cb1"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/1.png","0b403572a2a4459eb223bccce926039d"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/2.png","9b3023049df67504452dfb5083d64dbd"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/index.html","f1d094ac1ce1dfac06f36c1d794be734"],["D:/博客/github/MyBlog/public/2021/03/23/青藤云hw面试题/index.html","3e0cec032da205b9457bb754c35e458a"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/1.png","fc1d4a589ad51ed4ef7a4b40550e9dc6"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/2.png","fcbfc0ab223cd66b4f4e0c5874a3c6af"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/3.png","cd2c498551ed6ebd598937363ce38bbe"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/index.html","84e3a67ffeb250310aa6040c524b76ee"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/1.png","36050d599ece86cca7a9df1c677a95cd"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/2.png","0ed4cdd2729c89ad0023506bc674e3c6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/3.png","022cea351f1240c7de954081950715a6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/4.png","a62f7fd4c56a1cdb566b70856af86ba5"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/5.png","1aa8cfc4dce3f32d7c07158c6dc75d67"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/6.png","4008e1a97f3531a6134cdcc3af351a19"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/7.png","500a262f055ea3f8a89f4e74eb1bf08f"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/index.html","ea8d8d7f7e060108e069b9d286d8573d"],["D:/博客/github/MyBlog/public/2021/04/06/APM/index.html","ac2bcf05f6c8339152fea21a7f3b9777"],["D:/博客/github/MyBlog/public/2021/04/07/135端口利用/index.html","cf182a5a6180c6f748c827d96ab67e57"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/1.png","d9dd55301711b1405fbf5983c5ad3caa"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/index.html","44909986be8413e7f8ac138957d6d7fa"],["D:/博客/github/MyBlog/public/2021/04/15/使用软链接修改默认启动项/index.html","4fff12a4ea294253b5fe451ac6ceb76f"],["D:/博客/github/MyBlog/public/2021/04/16/linux下删除中文乱码文件/index.html","db54f2ed95ad34d70f9ab7065fc5222a"],["D:/博客/github/MyBlog/public/2021/04/17/端口复用/index.html","78a73ae2938c5b9b5d21927c394a0278"],["D:/博客/github/MyBlog/public/2021/04/18/溯源/index.html","0344dd77b83efc5869f4d503a20a0107"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/1.png","513c5b25f5193279ba2bb30e22485780"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/2.png","0c4559b93121ab35d4ca15261f571ad5"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/3.png","49f64f6f902b29b601e907d2af021f4d"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/index.html","3191c19f432a3a270834dd408c676082"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/1.png","eff909f136ee4cc076bc98169191bedb"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/2.png","4dd58afea167d81cfac35f7616226d3e"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/3.png","b846473db4d1dc425d0bb31e3b04de90"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/4.png","a12d525fb27732d4d37799ccb9f19fd0"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/5.png","145feb2e824ce87e16022d5262b69bf1"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/6.png","67943c006788528ec06fa5dfc8e1f5f3"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/index.html","0fa56455447fd5f9778486c93fb336f6"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/1.png","bed2e3836c589116c63d0093cc9be80d"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/2.png","a40d661942ba2444003123e8d99db265"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/index.html","a0e90d3eb3247f321b59a8f7d831bc01"],["D:/博客/github/MyBlog/public/2021/04/19/内存马/index.html","ac2f0d539e940b6a8866b75bbc61b8ee"],["D:/博客/github/MyBlog/public/2021/04/20/pickle/index.html","49818abb622dec019e0256a51635d55b"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/1.png","37e8feebe81bde13c12812340ecfe975"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/2.png","b1e273ce11664d966b858d8f820c16ea"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/3.png","0113d911496279b1eeb09b04a074c1cd"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/4.png","f3617e7ea37ec016068e086bb7ea26e4"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/index.html","5e8ea00aff91cf34662aa9bb483d6ffe"],["D:/博客/github/MyBlog/public/2021/05/04/java-agent/index.html","249eb2eb03916d8998e29c1594015cbf"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/1.png","56aa34b3a5b3f300044f8ef522a44e6b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/10.png","65197222454ae0d64257d8951ea46cae"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/11.png","b5a3c0ab4f1984d0f9a8fa73adeda20b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/2.png","1ca994f7e54b60a615519e76ae2d68cf"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/3.png","c81fe6e0b9face5581bd9a20a7a78817"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/4.png","bcba0858b0a26bac2126b743fd1c3f1b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/5.png","a33ee6e24f3534326d512a3cbe301194"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/6.png","64f39a2864a0a31fb5a30d5afef441a0"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/7.png","cffbf9d00d36c156259f63cb5c6a2e3a"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/8.png","ea4ae6c26d2c20e64e4c77f6e572b582"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/9.png","1321bb032c1cd4181884c2d5a606c883"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/index.html","0453b1cca65be2be5aa603516107ef2f"],["D:/博客/github/MyBlog/public/2021/05/04/thinkphp-5-x/index.html","86f2a48fefcceff5070825fdd5356c34"],["D:/博客/github/MyBlog/public/404.html","d32f93498b14f921ff187da7e947fa69"],["D:/博客/github/MyBlog/public/archives/2020/11/index.html","22c3af56a2b6602f7de189acd5a55b50"],["D:/博客/github/MyBlog/public/archives/2020/12/index.html","b41832904bd7d9a63bad0ea36c47a080"],["D:/博客/github/MyBlog/public/archives/2020/index.html","a20e7d994d05aae3d558098a82694edf"],["D:/博客/github/MyBlog/public/archives/2021/01/index.html","9070e3f1e26081e72fd04ac38db5275f"],["D:/博客/github/MyBlog/public/archives/2021/02/index.html","5851be586dff8455915b90758d0ad59f"],["D:/博客/github/MyBlog/public/archives/2021/03/index.html","7b2167baf427758e996680849be0e1d0"],["D:/博客/github/MyBlog/public/archives/2021/04/index.html","c50df1b817172760b6588b25c6c44996"],["D:/博客/github/MyBlog/public/archives/2021/05/index.html","253e49b59c04b20f3ba4e16ae4444841"],["D:/博客/github/MyBlog/public/archives/2021/index.html","2830aadb9f44875a3326af04be138ad0"],["D:/博客/github/MyBlog/public/archives/2021/page/2/index.html","c8e724aac98df8ece15ce30811c2fb8b"],["D:/博客/github/MyBlog/public/archives/2021/page/3/index.html","57dd195c4d0d51946a196bb9c3af62bd"],["D:/博客/github/MyBlog/public/archives/index.html","979b9c84b922a2f1e68179ff5c032ce7"],["D:/博客/github/MyBlog/public/archives/page/2/index.html","0cb23eccb30bb22a7446f84d9523717b"],["D:/博客/github/MyBlog/public/archives/page/3/index.html","3af46e059175eeeb09e2b04ebcb07724"],["D:/博客/github/MyBlog/public/archives/page/4/index.html","615df774b90bc1c50a2125e567c71f73"],["D:/博客/github/MyBlog/public/categories/CTF/index.html","25adf37f2721207a2f362a68700bf99d"],["D:/博客/github/MyBlog/public/categories/Kali/index.html","96d4f4b1168d0adadfcb9c6bc1af246f"],["D:/博客/github/MyBlog/public/categories/index.html","d24795fba0091f4e317ec22723fe4902"],["D:/博客/github/MyBlog/public/categories/java/index.html","3b244eafd782743febec63b52e6d29c7"],["D:/博客/github/MyBlog/public/categories/linux/index.html","3f44f1b0b7e9ec81a9f9ae56c369b10c"],["D:/博客/github/MyBlog/public/categories/python/index.html","f766eda4c61129d98a6d60740112afa9"],["D:/博客/github/MyBlog/public/categories/工具/index.html","c84dd3ef7fb67c685acae9f7f363c2a7"],["D:/博客/github/MyBlog/public/categories/渗透测试/index.html","0af460cde9a61b86d2b346132bd88844"],["D:/博客/github/MyBlog/public/categories/漏洞复现/index.html","f1f3671643ae8810816e4757584d5631"],["D:/博客/github/MyBlog/public/categories/笔记/index.html","4429c843e6451f6f61a3086dfa52cf9c"],["D:/博客/github/MyBlog/public/categories/笔记/page/2/index.html","347b8b707eb743382c8f33446f490105"],["D:/博客/github/MyBlog/public/categories/编程/index.html","55e2db918d07f00a5c789f2af01e248d"],["D:/博客/github/MyBlog/public/categories/脚本编写/index.html","67fef6e71f1798e21fd0f1062f7f2d82"],["D:/博客/github/MyBlog/public/categories/面试题/index.html","71979d22a02d2d85c454e776b4cf0f66"],["D:/博客/github/MyBlog/public/categories/靶场/index.html","f53fb2128a3539ed3b0bc5d483003599"],["D:/博客/github/MyBlog/public/css/index.css","e2c54cb6ea90e1ec8ba974030f4a272f"],["D:/博客/github/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/博客/github/MyBlog/public/img/1.jpg","567b4c69c65374f3c556a6e8d5482233"],["D:/博客/github/MyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/博客/github/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/博客/github/MyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/博客/github/MyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/博客/github/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/博客/github/MyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/博客/github/MyBlog/public/img/图库/1.jpg","d2b4a168f2370179df97777e43be1513"],["D:/博客/github/MyBlog/public/img/图库/10.jpg","33e849e29c33be8ef1a578b2f6f731a4"],["D:/博客/github/MyBlog/public/img/图库/11.jpg","c29603fbaa7c1da6528771f97ded1efb"],["D:/博客/github/MyBlog/public/img/图库/12.jpg","e81a061445f06afb72d9bb29f92dc141"],["D:/博客/github/MyBlog/public/img/图库/13.jpg","b7fa46c15cce388469f8f83e57201fa0"],["D:/博客/github/MyBlog/public/img/图库/14.jpg","0e17fd4e30f427f9906620372003c677"],["D:/博客/github/MyBlog/public/img/图库/15.jpg","4810a512db049b25a43f17b94cf56569"],["D:/博客/github/MyBlog/public/img/图库/16.jpg","5cff568bc5ca40e922a91177548ac305"],["D:/博客/github/MyBlog/public/img/图库/17.jpg","6545c99d89d4a0594179561e8a0a2845"],["D:/博客/github/MyBlog/public/img/图库/18.jpg","23a29f8c6e22727232559a379c1db488"],["D:/博客/github/MyBlog/public/img/图库/19.jpg","866a7d4cf7f5e6fc645ff59c71638932"],["D:/博客/github/MyBlog/public/img/图库/2.jpg","fed2f4e7860322da91af10a340e8560a"],["D:/博客/github/MyBlog/public/img/图库/20.jpg","e687c9f4474672b9cf7d202f55a05f64"],["D:/博客/github/MyBlog/public/img/图库/21.jpg","1158c3705521a2e2c2129d0e0c367bd3"],["D:/博客/github/MyBlog/public/img/图库/22.jpg","963ddf4cf4af00ad2811d575b21bcfc3"],["D:/博客/github/MyBlog/public/img/图库/23.jpg","afac975317036a40ff91ae7c8d0e833b"],["D:/博客/github/MyBlog/public/img/图库/24.jpg","0d9e17957bee66003063610283bebded"],["D:/博客/github/MyBlog/public/img/图库/25.jpg","6444310f3d08621865d7b8980ea49e84"],["D:/博客/github/MyBlog/public/img/图库/26.jpg","b44aa953db328fbdfd9b685e7adc45e9"],["D:/博客/github/MyBlog/public/img/图库/27.jpg","af99bb747603ffbb6a277a12e84af778"],["D:/博客/github/MyBlog/public/img/图库/28.jpg","b418b784d642933b7a2e56f16a72f34c"],["D:/博客/github/MyBlog/public/img/图库/29.jpg","911f3df25fc7d27e1bff3a3f27a082f1"],["D:/博客/github/MyBlog/public/img/图库/3.jpg","c766617c4ada671270c77fe9aa28ee5b"],["D:/博客/github/MyBlog/public/img/图库/30.jpg","c6fadc02e4453ab733bdb8c5c256012c"],["D:/博客/github/MyBlog/public/img/图库/4.jpg","faec6e8496abbb17046fbf77695c4cd8"],["D:/博客/github/MyBlog/public/img/图库/5.jpg","114241e804fcdd68cafabe4372b2f08b"],["D:/博客/github/MyBlog/public/img/图库/6.jpg","ed864b453b1381640eb987b169339f3c"],["D:/博客/github/MyBlog/public/img/图库/7.jpg","eb5c4199c64307b3c94b8efdaf30b8a7"],["D:/博客/github/MyBlog/public/img/图库/8.jpg","6bca9dd6cb0242d7a320c9f005268d39"],["D:/博客/github/MyBlog/public/img/图库/9.jpg","1469c5f303c03baf540b1a360958a02a"],["D:/博客/github/MyBlog/public/index.html","8f23c4063bcb243cf2f029415104363d"],["D:/博客/github/MyBlog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/博客/github/MyBlog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/博客/github/MyBlog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/博客/github/MyBlog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/博客/github/MyBlog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/博客/github/MyBlog/public/link/index.html","5516c0b41f3889c7d0468b28665a896b"],["D:/博客/github/MyBlog/public/page/2/index.html","fc4aff44f5bc47eca68d4a1b42d1a812"],["D:/博客/github/MyBlog/public/page/3/index.html","f42ee193063351759659a4503d587beb"],["D:/博客/github/MyBlog/public/page/4/index.html","45a7ecd9f612f6f9885dd6273193a9db"]];
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







