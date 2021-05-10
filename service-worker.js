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

var precacheConfig = [["D:/博客/github/MyBlog/public/2020/11/20/序列化/1.jpg","87b5803d466e7bd2e8ef10cc510433fd"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/2.png","cf1c7f28856bd346bbd8967fe7c5520d"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/3.png","12db2e9e5d23d62eef95d01677f0d368"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/4.png","ca00bf43b554e84d4583a315fba4c96c"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/index.html","7f3a4e1b3e802f288969ad5d2eed349c"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/1.png","b8f67a1c437bd40958a2f70be6e079a3"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/2.png","2c9f45bb95c0946341542fa0f86c0682"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/3.png","600f016d2ffce77499478bcb47888188"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/4.png","cb96e4e63c39397f49c9e88af99f42fc"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/5.png","45793736c9b65433c4003dcc2c2a8464"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/6.jpg","1973e23c23c2aedfd54df1b8cdc96cd5"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/7.png","91918ba2dd13b1d6fa253071ba5e92b6"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/8.png","588a9c28f438b6db8ad18eaea814c930"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/index.html","77930636785b9e936088c7d541f8e7e0"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/1.png","582e94c4c585086c26881142b4b680a0"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/2.png","fc60ffd3070d5caf3ff1fb7e747c00cf"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/3.png","b3025486b3dfcd9ce7a884377de3950a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/4.png","528a7a5bc9249801fe6a4d733e075553"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/5.png","c8e0b72f3275441ea74c186e59f0e686"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/6.png","c597899edc8e4d5ac735a4c45e3cbe4a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/7.png","8be06e01c129a0dcada8dfc6dc74db90"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/index.html","d1c292c6ff67dac65fc77dd19380354c"],["D:/博客/github/MyBlog/public/2020/11/28/爆破脚本/index.html","a77b2ec587556016a7061066204c2e03"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/1.png","13cdbefd356d356b226ababd3341d716"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/10.png","19d81915b67b4f49cc34e35d3f4ca928"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/2.png","50f3c0b82cdb2e85f9ad58b59f712bcf"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/3.png","978ff966c9b6593aab4ecfa98cb689c9"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/4.png","7397a9832b316a2634825c4c8cacc44f"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/5.png","da7e2803796ee6e2fe5fc81bcc729286"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/6.png","d3a7c95ceb58cd2907eb3df3d7eba273"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/7.png","56d9ea1f4f77b91851a156e3b5522f84"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/8.png","101b22dd6d8ed4f40e7f0382f50a5119"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/9.png","ef28ec6126c899c35e0ff260f8418acd"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/index.html","63000dff0e5a5e7aec89684d530bfa1b"],["D:/博客/github/MyBlog/public/2020/12/08/docker/index.html","0b4a325efc508a72d502b36cec766973"],["D:/博客/github/MyBlog/public/2020/12/08/linux/index.html","7d256de4ee6e69d631fbfe1b204af34e"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/1.png","61d938de8c04039b3015659d04ffeabb"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/10.png","52cbb7c593d4b6ec51ce9bf5a0bc1f6b"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/11.png","53a038496fed45ed51126454a26bcbc3"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/12.png","1b89febe490fcd9789ca078de9684cf7"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/13.png","628bd6e6f08b280435121e610e8abfd5"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/14.png","90e28ebd11756da7b6e06162e486c557"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/15.png","e128c5cf78d10082f5bb20f8e342177c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/16.png","595aabae75d70a56eccdc999fbf18eed"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/17.png","37e909a3c096d8f06c9f3e24202863fd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/2.png","1c6154c44681f7c4033fdc9082dfff45"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/3.png","c43a8ff84137db4e595a40fc3b047d27"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/4.png","51854a68944aaae268db6eb548d55791"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/5.png","54948790c37fbf55bc73c91eec82a93c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/6.png","13b33f039da5915837373d9e0d6190af"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/7.png","b5efe7d857686b764e594eb0b5d54785"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/8.png","b9d45a17954c65499f365c9bf2af75f1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/9.png","487fc8667f180ca7accde1c7d2cc82a1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/index.html","0a436d584c1f5a563776fa60d8332dbb"],["D:/博客/github/MyBlog/public/2020/12/09/nc/index.html","be833d608042d4d8bfaaccbb17cee879"],["D:/博客/github/MyBlog/public/2020/12/10/信息搜集/index.html","216e5f323844bcb0a0542eabc34f9c2b"],["D:/博客/github/MyBlog/public/2020/12/13/INF/1.png","f083829bd72ff736906fe074b722c1a7"],["D:/博客/github/MyBlog/public/2020/12/13/INF/2.png","ce97bdfc4f05eb420a3e140c551ed806"],["D:/博客/github/MyBlog/public/2020/12/13/INF/3.png","46cac517ad3843824825e33a64e2f3e4"],["D:/博客/github/MyBlog/public/2020/12/13/INF/4.png","bd1ca532a1c96aef63b97355419cadbe"],["D:/博客/github/MyBlog/public/2020/12/13/INF/index.html","b578ab2f84e488287133162c69e42e5d"],["D:/博客/github/MyBlog/public/2020/12/16/ctfshow-web入门-命令执行/index.html","0878a0f42f0aaea26869e34ecaa3679a"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/1.png","eb8d0074c44c6061f50de99d18fe0aa0"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/2.png","5ae75524a410780c8e0e3e7d4f68aafd"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/index.html","6d047918109bda1d35f917c30cb8653d"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/1.png","d1e16ab35952093d696b04e0979b5ccb"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/index.html","1761dcd1571080a16142e223e3bf28b0"],["D:/博客/github/MyBlog/public/2020/12/21/ctfshow_web入门-文件包含/index.html","297a00d990bf20ed5c511abd1c63b741"],["D:/博客/github/MyBlog/public/2020/12/23/ctfshow-web入门-sql注入/index.html","bc40810aeec48b24ff91b274f71b23fc"],["D:/博客/github/MyBlog/public/2020/12/29/kali网络攻击/index.html","fafaec5e96d1fd45a9421d90fcba746c"],["D:/博客/github/MyBlog/public/2020/12/31/java-Dao/index.html","f9423ef0b4276a228e4586bdf2e4e445"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/1.png","f1dbaa097ccc29e27933e5d734b8af2a"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/index.html","9ce25f8e3166b946956a448e131e6cc9"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/1.png","e438ebe1541790d78848b3898df39231"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/2.png","bca4145776b4d7cc029b976eaea48669"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/index.html","7d5198908f57b74391618a47be0be326"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/1.png","a36432fea2ee65b4c6a4217d3b4ce230"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/2.png","11dbb7f1bbbdd2f747d1ef19948a5f31"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/3.png","8cea0417b3e484f6fa14da212022ab76"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/4.png","dac2cc71521f980466d6b5b185447409"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/5.png","eda8a2767c73e2fcd6a8139a9087efd6"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/6.png","6cb3cb3ff16cad1ef19213c80f462a7e"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/index.html","aa9cdb47f866611bbde2f62648ae7f8b"],["D:/博客/github/MyBlog/public/2021/01/05/nmap/index.html","bb23464f372a7c19a2bfda2b5d5d5d10"],["D:/博客/github/MyBlog/public/2021/01/17/centos搭建php环境/index.html","87cb160f44184cde2cba712a20406eec"],["D:/博客/github/MyBlog/public/2021/01/19/vulhub搭建/index.html","0dbc9573d8fa3526cd54a84a77204d08"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/1.png","fabd53e1eff20c9af3eae4a45bbb14ed"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/index.html","a02f750a599c528fbbbb31b5954328ee"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/1.png","d06ad86dc5d9a9cd225187f7141e50bc"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/2.png","7a038cb1e686b3f47c00a21ded2b850e"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/index.html","060c05cfc26032d3380490a98ec647f4"],["D:/博客/github/MyBlog/public/2021/01/24/A-B和C/index.html","3fd1bc65205bb4882f1de1911b292ba1"],["D:/博客/github/MyBlog/public/2021/01/26/java内存泄露/index.html","3b61d251c7d0a0eb1e69518f1e2b2869"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/1.png","2aaa908cb690dd8b0dc38548c33a6ac7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/2.png","533ef5b6ec24169c1a6470ffaf17d9e4"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/3.png","cc3f1812727b01df454e82f5478effe7"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/4.png","5e2bf090cfb188b190b0cf0e7072487d"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/5.png","29399b90f543faf4eefeda19cc426498"],["D:/博客/github/MyBlog/public/2021/01/26/零散知识点/index.html","37850dae729d89ec821def919826a06a"],["D:/博客/github/MyBlog/public/2021/01/27/容器解析漏洞/index.html","590e3aa5224aee0c119bcd203768032e"],["D:/博客/github/MyBlog/public/2021/02/21/服务器总结/index.html","c51d3d3541212b8a437738a1b97aada2"],["D:/博客/github/MyBlog/public/2021/03/02/git的基本使用/index.html","06733f09b927cab4c443bd3c37665729"],["D:/博客/github/MyBlog/public/2021/03/05/AJAX/index.html","a7a385f18cd9c46f0dc8dfa53079d760"],["D:/博客/github/MyBlog/public/2021/03/06/安全设备/index.html","6e6496fac6e991a8cbcda18824923d32"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/1.png","815297283b1d574f7e3a3643b42ce9a3"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/2.png","8519071b1dad1a56f136ad2982ecb274"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/index.html","8cee04ac786725b0ce4936251ca8544f"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/1.png","2bf4209a63e5c2aaec2d9fdeb0778c9f"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/2.png","cd7b6f2846673b7809779b7e28374658"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/3.png","d49fde9d7185877e087145d115d49400"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/4.png","cfc8b81f13b9420b0a56dafe5688d2b0"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/5.png","618e7855818612716c7e91422f81d734"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/index.html","307ff868b49cc2f27639cdbd70d72336"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/1.png","fc25160190fadc6e2534b12ab6977a61"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/index.html","a4e2a3ca07f768bb5ef81a84ebbb718e"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/1.png","db5bd479541659562d6080c9482074c7"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/2.png","6b67c57323e10e3e6673302373e18930"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/3.png","52a9f4c1552e3b1f4b4c1e65385e28c2"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/4.png","3e11c0a3e1c470041a2133ce66de0151"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/5.png","fd92da4dff6b4a3b415cdfd0cd15b9bf"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/index.html","9c94f030b94d41f2306a0b61a99b5251"],["D:/博客/github/MyBlog/public/2021/03/16/jsp与asp的一些记录/index.html","ef0607ee0a9154d2a9d6d2a79384f891"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/1.png","13317d552e3e9bf7fce6bcf0ec843663"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/2.png","3c097ad537d52124861d6cc9b8133c34"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/3.png","ec4e083a3230703d001e58a3514f6b0c"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/4.png","9f6505d4a4906fd8bf1b58d3e411f42f"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/5.png","eb85d5a92641db8ffb475da53e690ab6"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/6.png","2235a69bfc00bf75dbf72f5d9766e970"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/index.html","b4e59f9dd0aaa11ae23139cd95238a37"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/1.png","f1692ed8e3c9f957ef3cb25577a2da44"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/10.png","3ff5b5f2f1fb7be07938d690258af1e6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/11.png","9577c1c05a798c0b0d7e998e6e240b90"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/12.png","2155dd185ca38148440e92645865708a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/13.png","086538a2a600f5858ec68cb33731c856"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/14.png","55b6ea8075b1a4a8a490ad459bf0bea8"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/15.png","d4dd5cabaf6d9062d96d7fcc381c02ae"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/16.png","978f2d4edc821f3f73bd676a473fef5a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/17.png","b49897046f392a84df380e5e60e97be6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/18.png","b27f61155e88b81a077acd0e5299913f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/19.png","6516de08e91f70f8cdf013468a6792d7"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/2.png","c92cabe2c3d1e2e1a7142edcefd03c6f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/20.png","eee2d047c9bbc8d45e0f93863f77cab9"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/21.png","ed1bc48fa12919d10b0ab3c780d711af"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/22.png","131e6245a9523195afaaed3e580f8a99"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/23.png","f1555ad245726d4b0edcba769dff557c"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/24.png","2151d200a4b7660156e6fe3d57b0d7bb"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/25.png","6d516ff229e53538a94822a11dc79cab"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/26.png","f4bbd410daa94e61811cfea47e8d3fa1"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/27.png","99c9e00accfa3c1aff67ad2c2c30ffc4"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/28.png","4fdd15665cb243be8c19d453677b243d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/29.png","6f80f73d8c4562508556be80e2ee6553"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/3.png","919735203de39b711b769272da335d1d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/4.png","a4f6c2da772b81f09d87f2ceaeb77432"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/5.png","00a6edd2c4616f00270b31f970a4be7b"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/6.png","102050a28f0a55098e5f0aec312b1077"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/7.png","3aa9915027051b3639d21a03ec92e604"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/8.png","12801f55ac030e1c0e1cf1e5d2f3a5c2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/9.png","711119256dd22ec61ed5d04f7cdcb8e2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/index.html","af61a3ba0be17c0a18b846b6a83695f4"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/1.png","3418fa472637ec55776e096a7fc39b6b"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/2.png","1a358988b5f7ae13755563d2439d2494"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/3.png","76097c4d7657e08f31e7af7cd7e7000a"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/index.html","70241421da2c73b57bb295b7e442fb12"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/1.png","b85eb9ee3351c1377cabaecfae6fd5ae"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/index.html","92c1475c50d088b36dea2ceb0021f9d4"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/1.png","0b403572a2a4459eb223bccce926039d"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/2.png","9b3023049df67504452dfb5083d64dbd"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/index.html","3a97e1e63a1edf44151833dc32b9310d"],["D:/博客/github/MyBlog/public/2021/03/23/青藤云hw面试题/index.html","2bbae03d2576c9b5e2e9003906c00671"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/1.png","fc1d4a589ad51ed4ef7a4b40550e9dc6"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/2.png","fcbfc0ab223cd66b4f4e0c5874a3c6af"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/3.png","cd2c498551ed6ebd598937363ce38bbe"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/index.html","e15741365724d12d81e3d291e23f3feb"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/1.png","36050d599ece86cca7a9df1c677a95cd"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/2.png","0ed4cdd2729c89ad0023506bc674e3c6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/3.png","022cea351f1240c7de954081950715a6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/4.png","a62f7fd4c56a1cdb566b70856af86ba5"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/5.png","1aa8cfc4dce3f32d7c07158c6dc75d67"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/6.png","4008e1a97f3531a6134cdcc3af351a19"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/7.png","500a262f055ea3f8a89f4e74eb1bf08f"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/index.html","cdca4e417b201566df18b3f3b5b31f5f"],["D:/博客/github/MyBlog/public/2021/04/06/APM/index.html","875ed5b1357258fc18bc4817b6064fb4"],["D:/博客/github/MyBlog/public/2021/04/07/135端口利用/index.html","07c661cef92210a370d55db0eb7ef0b6"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/1.png","d9dd55301711b1405fbf5983c5ad3caa"],["D:/博客/github/MyBlog/public/2021/04/14/21,22,23端口/index.html","9875d80fa99dba540a059987898f57e3"],["D:/博客/github/MyBlog/public/2021/04/15/使用软链接修改默认启动项/index.html","70e9a340520877ca9c8ceb64048f9a6e"],["D:/博客/github/MyBlog/public/2021/04/16/linux下删除中文乱码文件/index.html","f8995c928ba497b14ff7f98845086fb9"],["D:/博客/github/MyBlog/public/2021/04/17/端口复用/index.html","9808ac0e49d3bed8c396ba27dcc0602d"],["D:/博客/github/MyBlog/public/2021/04/18/溯源/index.html","f3a40e41b71276c940a9b3c6d6ac8ded"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/1.png","513c5b25f5193279ba2bb30e22485780"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/2.png","0c4559b93121ab35d4ca15261f571ad5"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/3.png","49f64f6f902b29b601e907d2af021f4d"],["D:/博客/github/MyBlog/public/2021/04/19/Webmin未经身份验证的远程代码执行/index.html","d1bfe2a19da87238ef97c83b7c071cb3"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/1.png","eff909f136ee4cc076bc98169191bedb"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/2.png","4dd58afea167d81cfac35f7616226d3e"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/3.png","b846473db4d1dc425d0bb31e3b04de90"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/4.png","a12d525fb27732d4d37799ccb9f19fd0"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/5.png","145feb2e824ce87e16022d5262b69bf1"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/6.png","67943c006788528ec06fa5dfc8e1f5f3"],["D:/博客/github/MyBlog/public/2021/04/19/fckeditor编辑器漏洞/index.html","75da409358ec442b14f3b6f712fe85a2"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/1.png","bed2e3836c589116c63d0093cc9be80d"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/2.png","a40d661942ba2444003123e8d99db265"],["D:/博客/github/MyBlog/public/2021/04/19/uWSGI漏洞复现-CVE-2018-7490/index.html","638b72051e54e6c9a798b8c7b3aacb92"],["D:/博客/github/MyBlog/public/2021/04/19/内存马/index.html","fdf55cfe78c379b8671049e57abf749d"],["D:/博客/github/MyBlog/public/2021/04/20/pickle/index.html","ac97d242a84925066936abe7f8393df6"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/1.png","37e8feebe81bde13c12812340ecfe975"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/2.png","b1e273ce11664d966b858d8f820c16ea"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/3.png","0113d911496279b1eeb09b04a074c1cd"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/4.png","f3617e7ea37ec016068e086bb7ea26e4"],["D:/博客/github/MyBlog/public/2021/04/20/飞星鱼-漏洞复现/index.html","77ad523acf7e7debd31e73bede77c991"],["D:/博客/github/MyBlog/public/2021/05/04/java-agent/index.html","f06b48a543f1766d0cb1a994118d3ab0"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/1.png","56aa34b3a5b3f300044f8ef522a44e6b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/10.png","65197222454ae0d64257d8951ea46cae"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/11.png","b5a3c0ab4f1984d0f9a8fa73adeda20b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/2.png","1ca994f7e54b60a615519e76ae2d68cf"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/3.png","c81fe6e0b9face5581bd9a20a7a78817"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/4.png","bcba0858b0a26bac2126b743fd1c3f1b"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/5.png","a33ee6e24f3534326d512a3cbe301194"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/6.png","64f39a2864a0a31fb5a30d5afef441a0"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/7.png","cffbf9d00d36c156259f63cb5c6a2e3a"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/8.png","ea4ae6c26d2c20e64e4c77f6e572b582"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/9.png","1321bb032c1cd4181884c2d5a606c883"],["D:/博客/github/MyBlog/public/2021/05/04/jvm/index.html","544f4bdb2d879822f58b0e8ab7ef40ab"],["D:/博客/github/MyBlog/public/2021/05/04/thinkphp-5-x/index.html","6c0d66d1154509d515ae4ced93bdd03b"],["D:/博客/github/MyBlog/public/2021/05/07/linux和windows加固/1.png","c0d4b13ffeb867333295648da84191b5"],["D:/博客/github/MyBlog/public/2021/05/07/linux和windows加固/index.html","5528b6e4a7afcf69e94494751a7963f0"],["D:/博客/github/MyBlog/public/2021/05/09/域前置与隐藏C2/index.html","a91b2d1125f67920bfc7c86ef2a049e3"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/1.png","d12d59494bff8de584b2742cea9a7ec9"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/2.png","16391f9a57f7fe20f4bb8d318fd0ac0f"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/3.png","0ffaf8f69f37ca9a2a5ee2c9ff3a0435"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/4.png","b1ef22fbfd79733690f677881802bbd5"],["D:/博客/github/MyBlog/public/2021/05/10/windows系统那些奇技淫巧/index.html","824e25b7b6c8d2f9c3598631aca4be16"],["D:/博客/github/MyBlog/public/404.html","b17b02d2c23eeceaf7bb7afe38c14da6"],["D:/博客/github/MyBlog/public/archives/2020/11/index.html","6609b900775c9c0280e7fc733ac6410b"],["D:/博客/github/MyBlog/public/archives/2020/12/index.html","93aa22a0100ebba866b7836d8ac4a180"],["D:/博客/github/MyBlog/public/archives/2020/index.html","6d2cd7f24a6baf7e3ff903b15d3889e0"],["D:/博客/github/MyBlog/public/archives/2021/01/index.html","8031f427219d94f8134a9a0e4b12c667"],["D:/博客/github/MyBlog/public/archives/2021/02/index.html","9ec4c5197613426dba91c9810bba9954"],["D:/博客/github/MyBlog/public/archives/2021/03/index.html","67d0264ac8cad2aeac7205391f17d08f"],["D:/博客/github/MyBlog/public/archives/2021/04/index.html","281404c60f06dfd8e631b2b53423a015"],["D:/博客/github/MyBlog/public/archives/2021/05/index.html","441895fad294831ff6112c275f8a0c1d"],["D:/博客/github/MyBlog/public/archives/2021/index.html","76f7b7e8fd07bc389cfdebc4990de594"],["D:/博客/github/MyBlog/public/archives/2021/page/2/index.html","1212bd75362a3d90a5a63da6fe8b18b0"],["D:/博客/github/MyBlog/public/archives/2021/page/3/index.html","5ca12e0657b19282954b1ee8ac514dc1"],["D:/博客/github/MyBlog/public/archives/index.html","303ff94199df47da1a968e92bd6c630b"],["D:/博客/github/MyBlog/public/archives/page/2/index.html","c69dbca93dd29d18e8364fb3a075edaa"],["D:/博客/github/MyBlog/public/archives/page/3/index.html","dc2675e63a444d4895d69490992c975b"],["D:/博客/github/MyBlog/public/archives/page/4/index.html","82fd01655c07ecb023185812eacf4859"],["D:/博客/github/MyBlog/public/categories/CTF/index.html","d33c4f7d283c6bfed16f6d197962422b"],["D:/博客/github/MyBlog/public/categories/Kali/index.html","a33ef0e230b64f1b054c3bf3b83e15f3"],["D:/博客/github/MyBlog/public/categories/index.html","ec7374e40789d82ee176b1be5ab3a8d8"],["D:/博客/github/MyBlog/public/categories/java/index.html","4267b4f5cc1b7dc54686a413758c154b"],["D:/博客/github/MyBlog/public/categories/linux/index.html","a8c5ea280c371b244ee1c1d9338c6a46"],["D:/博客/github/MyBlog/public/categories/python/index.html","93346a54dd297c3995df15bbf929c857"],["D:/博客/github/MyBlog/public/categories/工具/index.html","8170d1f7a52c99878c6eef1c38f739ef"],["D:/博客/github/MyBlog/public/categories/渗透测试/index.html","c07805da58060710c4b7fa1ec698f505"],["D:/博客/github/MyBlog/public/categories/漏洞复现/index.html","e09f1125284c10e69ba000b8af449cf3"],["D:/博客/github/MyBlog/public/categories/笔记/index.html","289f9009da56e75112de296930760b8a"],["D:/博客/github/MyBlog/public/categories/笔记/page/2/index.html","eb78ba537ffee97c98ac5967a633bb8c"],["D:/博客/github/MyBlog/public/categories/编程/index.html","702c77a5a52e75ca42ab8da78243e196"],["D:/博客/github/MyBlog/public/categories/脚本编写/index.html","aabea34f8a9f5ca2ebdf31ec7b59eae4"],["D:/博客/github/MyBlog/public/categories/面试题/index.html","28bf4befd31acab2ed960e0af8ff436d"],["D:/博客/github/MyBlog/public/categories/靶场/index.html","89968ecb9681dbb8171efefe1eddbf24"],["D:/博客/github/MyBlog/public/css/index.css","e2c54cb6ea90e1ec8ba974030f4a272f"],["D:/博客/github/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/博客/github/MyBlog/public/img/1.jpg","567b4c69c65374f3c556a6e8d5482233"],["D:/博客/github/MyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/博客/github/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/博客/github/MyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/博客/github/MyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/博客/github/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/博客/github/MyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/博客/github/MyBlog/public/img/图库/1.jpg","d2b4a168f2370179df97777e43be1513"],["D:/博客/github/MyBlog/public/img/图库/10.jpg","33e849e29c33be8ef1a578b2f6f731a4"],["D:/博客/github/MyBlog/public/img/图库/11.jpg","c29603fbaa7c1da6528771f97ded1efb"],["D:/博客/github/MyBlog/public/img/图库/12.jpg","e81a061445f06afb72d9bb29f92dc141"],["D:/博客/github/MyBlog/public/img/图库/13.jpg","b7fa46c15cce388469f8f83e57201fa0"],["D:/博客/github/MyBlog/public/img/图库/14.jpg","0e17fd4e30f427f9906620372003c677"],["D:/博客/github/MyBlog/public/img/图库/15.jpg","4810a512db049b25a43f17b94cf56569"],["D:/博客/github/MyBlog/public/img/图库/16.jpg","5cff568bc5ca40e922a91177548ac305"],["D:/博客/github/MyBlog/public/img/图库/17.jpg","6545c99d89d4a0594179561e8a0a2845"],["D:/博客/github/MyBlog/public/img/图库/18.jpg","23a29f8c6e22727232559a379c1db488"],["D:/博客/github/MyBlog/public/img/图库/19.jpg","866a7d4cf7f5e6fc645ff59c71638932"],["D:/博客/github/MyBlog/public/img/图库/2.jpg","fed2f4e7860322da91af10a340e8560a"],["D:/博客/github/MyBlog/public/img/图库/20.jpg","e687c9f4474672b9cf7d202f55a05f64"],["D:/博客/github/MyBlog/public/img/图库/21.jpg","1158c3705521a2e2c2129d0e0c367bd3"],["D:/博客/github/MyBlog/public/img/图库/22.jpg","963ddf4cf4af00ad2811d575b21bcfc3"],["D:/博客/github/MyBlog/public/img/图库/23.jpg","afac975317036a40ff91ae7c8d0e833b"],["D:/博客/github/MyBlog/public/img/图库/24.jpg","0d9e17957bee66003063610283bebded"],["D:/博客/github/MyBlog/public/img/图库/25.jpg","6444310f3d08621865d7b8980ea49e84"],["D:/博客/github/MyBlog/public/img/图库/26.jpg","b44aa953db328fbdfd9b685e7adc45e9"],["D:/博客/github/MyBlog/public/img/图库/27.jpg","af99bb747603ffbb6a277a12e84af778"],["D:/博客/github/MyBlog/public/img/图库/28.jpg","b418b784d642933b7a2e56f16a72f34c"],["D:/博客/github/MyBlog/public/img/图库/29.jpg","911f3df25fc7d27e1bff3a3f27a082f1"],["D:/博客/github/MyBlog/public/img/图库/3.jpg","c766617c4ada671270c77fe9aa28ee5b"],["D:/博客/github/MyBlog/public/img/图库/30.jpg","c6fadc02e4453ab733bdb8c5c256012c"],["D:/博客/github/MyBlog/public/img/图库/4.jpg","faec6e8496abbb17046fbf77695c4cd8"],["D:/博客/github/MyBlog/public/img/图库/5.jpg","114241e804fcdd68cafabe4372b2f08b"],["D:/博客/github/MyBlog/public/img/图库/6.jpg","ed864b453b1381640eb987b169339f3c"],["D:/博客/github/MyBlog/public/img/图库/7.jpg","eb5c4199c64307b3c94b8efdaf30b8a7"],["D:/博客/github/MyBlog/public/img/图库/8.jpg","6bca9dd6cb0242d7a320c9f005268d39"],["D:/博客/github/MyBlog/public/img/图库/9.jpg","1469c5f303c03baf540b1a360958a02a"],["D:/博客/github/MyBlog/public/index.html","6a62aa9a590c10badcdd04fa96b222e3"],["D:/博客/github/MyBlog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/博客/github/MyBlog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/博客/github/MyBlog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/博客/github/MyBlog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/博客/github/MyBlog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/博客/github/MyBlog/public/link/index.html","af2c1cbc77cea4eba92f79054dac022e"],["D:/博客/github/MyBlog/public/page/2/index.html","bacb86a48444ce9262d320e1cd78a6e0"],["D:/博客/github/MyBlog/public/page/3/index.html","9d69b960c47daf61acc993314d75b364"],["D:/博客/github/MyBlog/public/page/4/index.html","1ed435977584d099d1a59b2f6ec72514"]];
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







