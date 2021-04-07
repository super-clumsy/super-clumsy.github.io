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

var precacheConfig = [["D:/博客/github/MyBlog/public/2020/11/20/序列化/1.jpg","87b5803d466e7bd2e8ef10cc510433fd"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/2.png","cf1c7f28856bd346bbd8967fe7c5520d"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/3.png","12db2e9e5d23d62eef95d01677f0d368"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/4.png","ca00bf43b554e84d4583a315fba4c96c"],["D:/博客/github/MyBlog/public/2020/11/20/序列化/index.html","a0c66dff907e027152dbc4a67b5477a5"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/1.png","b8f67a1c437bd40958a2f70be6e079a3"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/2.png","2c9f45bb95c0946341542fa0f86c0682"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/3.png","600f016d2ffce77499478bcb47888188"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/4.png","cb96e4e63c39397f49c9e88af99f42fc"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/5.png","45793736c9b65433c4003dcc2c2a8464"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/6.jpg","1973e23c23c2aedfd54df1b8cdc96cd5"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/7.png","91918ba2dd13b1d6fa253071ba5e92b6"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/8.png","588a9c28f438b6db8ad18eaea814c930"],["D:/博客/github/MyBlog/public/2020/11/20/记一次渗透测试/index.html","cc5921144bf9141db3a46c4673763887"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/1.png","582e94c4c585086c26881142b4b680a0"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/2.png","fc60ffd3070d5caf3ff1fb7e747c00cf"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/3.png","b3025486b3dfcd9ce7a884377de3950a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/4.png","528a7a5bc9249801fe6a4d733e075553"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/5.png","c8e0b72f3275441ea74c186e59f0e686"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/6.png","c597899edc8e4d5ac735a4c45e3cbe4a"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/7.png","8be06e01c129a0dcada8dfc6dc74db90"],["D:/博客/github/MyBlog/public/2020/11/22/DVWA的high和impossible/index.html","39f7ef627282a260f16285b7a5ed3676"],["D:/博客/github/MyBlog/public/2020/11/28/爆破脚本/index.html","954ca807f1668b4ec54aecca931e903c"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/1.png","13cdbefd356d356b226ababd3341d716"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/10.png","19d81915b67b4f49cc34e35d3f4ca928"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/2.png","50f3c0b82cdb2e85f9ad58b59f712bcf"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/3.png","978ff966c9b6593aab4ecfa98cb689c9"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/4.png","7397a9832b316a2634825c4c8cacc44f"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/5.png","da7e2803796ee6e2fe5fc81bcc729286"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/6.png","d3a7c95ceb58cd2907eb3df3d7eba273"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/7.png","56d9ea1f4f77b91851a156e3b5522f84"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/8.png","101b22dd6d8ed4f40e7f0382f50a5119"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/9.png","ef28ec6126c899c35e0ff260f8418acd"],["D:/博客/github/MyBlog/public/2020/12/05/ctfshow-web/index.html","bd2b72d3a1062b0614baeaee81d19bd0"],["D:/博客/github/MyBlog/public/2020/12/08/docker/index.html","a2ba51586ac56067c8f227c716924689"],["D:/博客/github/MyBlog/public/2020/12/08/linux/index.html","4946e7f1119db807791d32edfb988fcd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/1.png","61d938de8c04039b3015659d04ffeabb"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/10.png","52cbb7c593d4b6ec51ce9bf5a0bc1f6b"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/11.png","53a038496fed45ed51126454a26bcbc3"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/12.png","1b89febe490fcd9789ca078de9684cf7"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/13.png","628bd6e6f08b280435121e610e8abfd5"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/14.png","90e28ebd11756da7b6e06162e486c557"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/15.png","e128c5cf78d10082f5bb20f8e342177c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/16.png","595aabae75d70a56eccdc999fbf18eed"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/17.png","37e909a3c096d8f06c9f3e24202863fd"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/2.png","1c6154c44681f7c4033fdc9082dfff45"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/3.png","c43a8ff84137db4e595a40fc3b047d27"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/4.png","51854a68944aaae268db6eb548d55791"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/5.png","54948790c37fbf55bc73c91eec82a93c"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/6.png","13b33f039da5915837373d9e0d6190af"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/7.png","b5efe7d857686b764e594eb0b5d54785"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/8.png","b9d45a17954c65499f365c9bf2af75f1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/9.png","487fc8667f180ca7accde1c7d2cc82a1"],["D:/博客/github/MyBlog/public/2020/12/08/sqli-labs/index.html","f104405245ea5b4fd4a739d0c1dab6d9"],["D:/博客/github/MyBlog/public/2020/12/09/nc/index.html","f1b349d09866fb11a81d8be67e1876d2"],["D:/博客/github/MyBlog/public/2020/12/10/信息搜集/index.html","d83ef87d1edfa20fc3785d98a31c14e1"],["D:/博客/github/MyBlog/public/2020/12/13/INF/1.png","f083829bd72ff736906fe074b722c1a7"],["D:/博客/github/MyBlog/public/2020/12/13/INF/2.png","ce97bdfc4f05eb420a3e140c551ed806"],["D:/博客/github/MyBlog/public/2020/12/13/INF/3.png","46cac517ad3843824825e33a64e2f3e4"],["D:/博客/github/MyBlog/public/2020/12/13/INF/4.png","bd1ca532a1c96aef63b97355419cadbe"],["D:/博客/github/MyBlog/public/2020/12/13/INF/index.html","59928f5620f22faea8f9d35d5b5104cf"],["D:/博客/github/MyBlog/public/2020/12/16/ctfshow-web入门-命令执行/index.html","e750b2c5f6503cd13538fec21c330084"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/1.png","eb8d0074c44c6061f50de99d18fe0aa0"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/2.png","5ae75524a410780c8e0e3e7d4f68aafd"],["D:/博客/github/MyBlog/public/2020/12/17/ctfshow-萌新web/index.html","fc4cad07cb34d1f07f545b4ee8c60e74"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/1.png","d1e16ab35952093d696b04e0979b5ccb"],["D:/博客/github/MyBlog/public/2020/12/17/无字符构造RCE/index.html","f15abad22f05a1d9dc1428c88c7c63aa"],["D:/博客/github/MyBlog/public/2020/12/21/ctfshow_web入门-文件包含/index.html","23b06c655bcb9c5a159a2fdaa51bd19b"],["D:/博客/github/MyBlog/public/2020/12/23/ctfshow-web入门-sql注入/index.html","7d4708fba9dd6790df69b10f13b3fee0"],["D:/博客/github/MyBlog/public/2020/12/29/kali网络攻击/index.html","aebd6df948ac9bea32b5664407b11188"],["D:/博客/github/MyBlog/public/2020/12/31/java-Dao/index.html","59c661a39c1907265b829a615048555d"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/1.png","f1dbaa097ccc29e27933e5d734b8af2a"],["D:/博客/github/MyBlog/public/2021/01/03/windows提权/index.html","027f151951d61533c60cfefafe04269d"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/1.png","e438ebe1541790d78848b3898df39231"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/2.png","bca4145776b4d7cc029b976eaea48669"],["D:/博客/github/MyBlog/public/2021/01/05/GUI编程/index.html","fdad841c5f0a99b28ce4b5b27e6ea2b2"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/1.png","a36432fea2ee65b4c6a4217d3b4ce230"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/2.png","11dbb7f1bbbdd2f747d1ef19948a5f31"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/3.png","8cea0417b3e484f6fa14da212022ab76"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/4.png","dac2cc71521f980466d6b5b185447409"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/5.png","eda8a2767c73e2fcd6a8139a9087efd6"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/6.png","6cb3cb3ff16cad1ef19213c80f462a7e"],["D:/博客/github/MyBlog/public/2021/01/05/msf初学/index.html","b0fb40a206ea4684b5f1eff6414c12d6"],["D:/博客/github/MyBlog/public/2021/01/05/nmap/index.html","89a1c3ea1828434ddfc0908cff1d49fb"],["D:/博客/github/MyBlog/public/2021/01/17/centos搭建php环境/index.html","a3d0476400b1bde0994998eaf3b3e343"],["D:/博客/github/MyBlog/public/2021/01/19/vulhub搭建/index.html","d53341b196e98644930d0be4915213ef"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/1.png","fabd53e1eff20c9af3eae4a45bbb14ed"],["D:/博客/github/MyBlog/public/2021/01/20/phpunit-远程代码执行漏洞-cve-2017-9814/index.html","6f15b9485be9e6a2ead7d2b27354515f"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/1.png","d06ad86dc5d9a9cd225187f7141e50bc"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/2.png","7a038cb1e686b3f47c00a21ded2b850e"],["D:/博客/github/MyBlog/public/2021/01/22/php远程代码执行漏洞-cve-2019-11043/index.html","b66e89c4111c71a62e0b2733c3fc2b66"],["D:/博客/github/MyBlog/public/2021/01/24/A-B和C/index.html","ccd7720f7ec0cabc26db493eddc690bc"],["D:/博客/github/MyBlog/public/2021/01/26/java内存泄露/index.html","f9438b388ded5a4e9acaf34b56801240"],["D:/博客/github/MyBlog/public/2021/01/26/jsonp与ORM/1.png","2aaa908cb690dd8b0dc38548c33a6ac7"],["D:/博客/github/MyBlog/public/2021/01/26/jsonp与ORM/index.html","3cc0a35a1a5b58016a0e1e22e7ec5834"],["D:/博客/github/MyBlog/public/2021/01/27/容器解析漏洞/index.html","5f7e1ddaf20995d71799bc51bd418eb9"],["D:/博客/github/MyBlog/public/2021/02/21/服务器总结/index.html","1831ca0c6536b8a2701ead406c4ef850"],["D:/博客/github/MyBlog/public/2021/03/02/git的基本使用/index.html","a95b2122829ffc3e4fd4c51e7388a442"],["D:/博客/github/MyBlog/public/2021/03/05/AJAX/index.html","f327434cf7cbe560d1e4f8b212b54590"],["D:/博客/github/MyBlog/public/2021/03/06/安全设备/index.html","dc37430c7ab084f81a873c46733d8d70"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/1.png","815297283b1d574f7e3a3643b42ce9a3"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/2.png","8519071b1dad1a56f136ad2982ecb274"],["D:/博客/github/MyBlog/public/2021/03/06/蜜罐/index.html","42dc540d127f99a30d27d7b3c7f21230"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/1.png","2bf4209a63e5c2aaec2d9fdeb0778c9f"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/2.png","cd7b6f2846673b7809779b7e28374658"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/3.png","d49fde9d7185877e087145d115d49400"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/4.png","cfc8b81f13b9420b0a56dafe5688d2b0"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/5.png","618e7855818612716c7e91422f81d734"],["D:/博客/github/MyBlog/public/2021/03/12/mysql提权/index.html","af0ceec2817a79d0d480ee8ccbb050c6"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/1.png","fc25160190fadc6e2534b12ab6977a61"],["D:/博客/github/MyBlog/public/2021/03/13/linux-suid提权/index.html","84c4a89dd51f6112d34276fb98bd0008"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/1.png","db5bd479541659562d6080c9482074c7"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/2.png","6b67c57323e10e3e6673302373e18930"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/3.png","52a9f4c1552e3b1f4b4c1e65385e28c2"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/4.png","3e11c0a3e1c470041a2133ce66de0151"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/5.png","fd92da4dff6b4a3b415cdfd0cd15b9bf"],["D:/博客/github/MyBlog/public/2021/03/14/信息搜集-CMS网站指纹识别/index.html","a592c697808070240f87228306cdfbd9"],["D:/博客/github/MyBlog/public/2021/03/16/jsp与asp的一些记录/index.html","bd60f875aee3df498a66c71b1a2c0a04"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/1.png","13317d552e3e9bf7fce6bcf0ec843663"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/2.png","3c097ad537d52124861d6cc9b8133c34"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/3.png","ec4e083a3230703d001e58a3514f6b0c"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/4.png","9f6505d4a4906fd8bf1b58d3e411f42f"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/5.png","eb85d5a92641db8ffb475da53e690ab6"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/6.png","2235a69bfc00bf75dbf72f5d9766e970"],["D:/博客/github/MyBlog/public/2021/03/16/phpcms后台低权限任意命令执行/index.html","30b4382c7dbda29778831b3cdba29e30"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/1.png","f1692ed8e3c9f957ef3cb25577a2da44"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/10.png","3ff5b5f2f1fb7be07938d690258af1e6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/11.png","9577c1c05a798c0b0d7e998e6e240b90"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/12.png","2155dd185ca38148440e92645865708a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/13.png","086538a2a600f5858ec68cb33731c856"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/14.png","55b6ea8075b1a4a8a490ad459bf0bea8"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/15.png","d4dd5cabaf6d9062d96d7fcc381c02ae"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/16.png","978f2d4edc821f3f73bd676a473fef5a"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/17.png","b49897046f392a84df380e5e60e97be6"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/18.png","b27f61155e88b81a077acd0e5299913f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/19.png","6516de08e91f70f8cdf013468a6792d7"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/2.png","c92cabe2c3d1e2e1a7142edcefd03c6f"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/20.png","eee2d047c9bbc8d45e0f93863f77cab9"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/21.png","ed1bc48fa12919d10b0ab3c780d711af"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/22.png","131e6245a9523195afaaed3e580f8a99"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/23.png","f1555ad245726d4b0edcba769dff557c"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/24.png","2151d200a4b7660156e6fe3d57b0d7bb"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/25.png","6d516ff229e53538a94822a11dc79cab"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/26.png","f4bbd410daa94e61811cfea47e8d3fa1"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/27.png","99c9e00accfa3c1aff67ad2c2c30ffc4"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/28.png","4fdd15665cb243be8c19d453677b243d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/29.png","6f80f73d8c4562508556be80e2ee6553"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/3.png","919735203de39b711b769272da335d1d"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/4.png","a4f6c2da772b81f09d87f2ceaeb77432"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/5.png","00a6edd2c4616f00270b31f970a4be7b"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/6.png","102050a28f0a55098e5f0aec312b1077"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/7.png","3aa9915027051b3639d21a03ec92e604"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/8.png","12801f55ac030e1c0e1cf1e5d2f3a5c2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/9.png","711119256dd22ec61ed5d04f7cdcb8e2"],["D:/博客/github/MyBlog/public/2021/03/19/vulnhub-zico2/index.html","52872c02d8624f5d9baf7e8a805dfff2"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/1.png","3418fa472637ec55776e096a7fc39b6b"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/2.png","1a358988b5f7ae13755563d2439d2494"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/3.png","76097c4d7657e08f31e7af7cd7e7000a"],["D:/博客/github/MyBlog/public/2021/03/20/一句话弹反shell/index.html","90e98cb9aead4db9bd696f85b17e3872"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/1.png","b85eb9ee3351c1377cabaecfae6fd5ae"],["D:/博客/github/MyBlog/public/2021/03/22/linux-脏牛提权/index.html","ce531ee9f8326350fc306cff1a6021a8"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/1.png","0b403572a2a4459eb223bccce926039d"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/2.png","9b3023049df67504452dfb5083d64dbd"],["D:/博客/github/MyBlog/public/2021/03/22/烂土豆提权/index.html","e587d7669ddfd57ff0ec71c4c84a786c"],["D:/博客/github/MyBlog/public/2021/03/23/青藤云hw面试题/index.html","c3e3c624c7cda2e343c6bf7a1a7d5f9b"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/1.png","fc1d4a589ad51ed4ef7a4b40550e9dc6"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/2.png","fcbfc0ab223cd66b4f4e0c5874a3c6af"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/3.png","cd2c498551ed6ebd598937363ce38bbe"],["D:/博客/github/MyBlog/public/2021/03/26/命令执行与一句话木马/index.html","d2d9f16c8c0664bbe52ecf6cb32f960a"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/1.png","36050d599ece86cca7a9df1c677a95cd"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/2.png","0ed4cdd2729c89ad0023506bc674e3c6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/3.png","022cea351f1240c7de954081950715a6"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/4.png","a62f7fd4c56a1cdb566b70856af86ba5"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/5.png","1aa8cfc4dce3f32d7c07158c6dc75d67"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/6.png","4008e1a97f3531a6134cdcc3af351a19"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/7.png","500a262f055ea3f8a89f4e74eb1bf08f"],["D:/博客/github/MyBlog/public/2021/03/30/星澜科技面试题/index.html","48fdbdb3673c377db1b38e7ddc1a4c52"],["D:/博客/github/MyBlog/public/2021/04/06/APM/index.html","b675c2fffd2364d91703012aada6c6f8"],["D:/博客/github/MyBlog/public/2021/04/07/135端口利用/index.html","5934576da8a9072f1caf8b1cd464e88b"],["D:/博客/github/MyBlog/public/404.html","01e10a17abdd1b7d56551d55ad12fa66"],["D:/博客/github/MyBlog/public/archives/2020/11/index.html","ba1fb97770426afef2873711d7a3de5c"],["D:/博客/github/MyBlog/public/archives/2020/12/index.html","07f9bbb7741c9c452607d5e38f731036"],["D:/博客/github/MyBlog/public/archives/2020/index.html","0906554b5a1527cb95ab17d08fff4972"],["D:/博客/github/MyBlog/public/archives/2021/01/index.html","c7ee7a148a157aebae9efd4cf9f8efdf"],["D:/博客/github/MyBlog/public/archives/2021/02/index.html","204fe991ecbe35f767536a0cbcd6cf88"],["D:/博客/github/MyBlog/public/archives/2021/03/index.html","4199bbf5edaddb355706f1b88bd0300e"],["D:/博客/github/MyBlog/public/archives/2021/04/index.html","5d49add834e5df264a483836770fc651"],["D:/博客/github/MyBlog/public/archives/2021/index.html","2f564d907fdfbe197427758a5c955717"],["D:/博客/github/MyBlog/public/archives/2021/page/2/index.html","463a80551136d4823ffc844ccd5151cd"],["D:/博客/github/MyBlog/public/archives/index.html","b5af5f2dc162c3c78f90740ababe8f0b"],["D:/博客/github/MyBlog/public/archives/page/2/index.html","7b1d575caa39c54fa0c1a86a3a3739e9"],["D:/博客/github/MyBlog/public/archives/page/3/index.html","bb893bedc3fb5876d8cd7d90489348ca"],["D:/博客/github/MyBlog/public/categories/CTF/index.html","0bd014dfb3b83bd75db5a3be6d55cce3"],["D:/博客/github/MyBlog/public/categories/Kali/index.html","c51d9ca2a6103b0040f112278b6f70b0"],["D:/博客/github/MyBlog/public/categories/index.html","90e05b89f8e463ea14914106c88d45e9"],["D:/博客/github/MyBlog/public/categories/java/index.html","31955bfbe43a49e60b1c144fe130213b"],["D:/博客/github/MyBlog/public/categories/linux/index.html","eb8d4c954b6457e95a428cef776b4b6d"],["D:/博客/github/MyBlog/public/categories/工具/index.html","e6f32167fc6bba5c10baa8b93e488e59"],["D:/博客/github/MyBlog/public/categories/渗透测试/index.html","a617b8c4a6aeb31a1b75f7e5a9a48f0e"],["D:/博客/github/MyBlog/public/categories/漏洞复现/index.html","68bdcce035a80ec55e7e2999ac43d0bf"],["D:/博客/github/MyBlog/public/categories/笔记/index.html","e4ff8d696a03b3370711b4203672c1db"],["D:/博客/github/MyBlog/public/categories/编程/index.html","3fa8ed01afd4ff732edd2b3e2508720d"],["D:/博客/github/MyBlog/public/categories/脚本编写/index.html","950b95984f9808ffdd6aa592c216e44f"],["D:/博客/github/MyBlog/public/categories/面试题/index.html","2884099d4783a5c87bc2652e598b1c65"],["D:/博客/github/MyBlog/public/categories/靶场/index.html","0ae4a6877bbfddac851761c9b049f23d"],["D:/博客/github/MyBlog/public/css/index.css","e2c54cb6ea90e1ec8ba974030f4a272f"],["D:/博客/github/MyBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/博客/github/MyBlog/public/img/1.jpg","567b4c69c65374f3c556a6e8d5482233"],["D:/博客/github/MyBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/博客/github/MyBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/博客/github/MyBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/博客/github/MyBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/博客/github/MyBlog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/博客/github/MyBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/博客/github/MyBlog/public/img/图库/1.jpg","d2b4a168f2370179df97777e43be1513"],["D:/博客/github/MyBlog/public/img/图库/10.jpg","33e849e29c33be8ef1a578b2f6f731a4"],["D:/博客/github/MyBlog/public/img/图库/11.jpg","c29603fbaa7c1da6528771f97ded1efb"],["D:/博客/github/MyBlog/public/img/图库/12.jpg","e81a061445f06afb72d9bb29f92dc141"],["D:/博客/github/MyBlog/public/img/图库/13.jpg","b7fa46c15cce388469f8f83e57201fa0"],["D:/博客/github/MyBlog/public/img/图库/14.jpg","0e17fd4e30f427f9906620372003c677"],["D:/博客/github/MyBlog/public/img/图库/15.jpg","4810a512db049b25a43f17b94cf56569"],["D:/博客/github/MyBlog/public/img/图库/16.jpg","5cff568bc5ca40e922a91177548ac305"],["D:/博客/github/MyBlog/public/img/图库/17.jpg","6545c99d89d4a0594179561e8a0a2845"],["D:/博客/github/MyBlog/public/img/图库/18.jpg","23a29f8c6e22727232559a379c1db488"],["D:/博客/github/MyBlog/public/img/图库/19.jpg","866a7d4cf7f5e6fc645ff59c71638932"],["D:/博客/github/MyBlog/public/img/图库/2.jpg","fed2f4e7860322da91af10a340e8560a"],["D:/博客/github/MyBlog/public/img/图库/20.jpg","e687c9f4474672b9cf7d202f55a05f64"],["D:/博客/github/MyBlog/public/img/图库/21.jpg","1158c3705521a2e2c2129d0e0c367bd3"],["D:/博客/github/MyBlog/public/img/图库/22.jpg","963ddf4cf4af00ad2811d575b21bcfc3"],["D:/博客/github/MyBlog/public/img/图库/23.jpg","afac975317036a40ff91ae7c8d0e833b"],["D:/博客/github/MyBlog/public/img/图库/24.jpg","0d9e17957bee66003063610283bebded"],["D:/博客/github/MyBlog/public/img/图库/25.jpg","6444310f3d08621865d7b8980ea49e84"],["D:/博客/github/MyBlog/public/img/图库/26.jpg","b44aa953db328fbdfd9b685e7adc45e9"],["D:/博客/github/MyBlog/public/img/图库/27.jpg","af99bb747603ffbb6a277a12e84af778"],["D:/博客/github/MyBlog/public/img/图库/28.jpg","b418b784d642933b7a2e56f16a72f34c"],["D:/博客/github/MyBlog/public/img/图库/29.jpg","911f3df25fc7d27e1bff3a3f27a082f1"],["D:/博客/github/MyBlog/public/img/图库/3.jpg","c766617c4ada671270c77fe9aa28ee5b"],["D:/博客/github/MyBlog/public/img/图库/30.jpg","c6fadc02e4453ab733bdb8c5c256012c"],["D:/博客/github/MyBlog/public/img/图库/4.jpg","faec6e8496abbb17046fbf77695c4cd8"],["D:/博客/github/MyBlog/public/img/图库/5.jpg","114241e804fcdd68cafabe4372b2f08b"],["D:/博客/github/MyBlog/public/img/图库/6.jpg","ed864b453b1381640eb987b169339f3c"],["D:/博客/github/MyBlog/public/img/图库/7.jpg","eb5c4199c64307b3c94b8efdaf30b8a7"],["D:/博客/github/MyBlog/public/img/图库/8.jpg","6bca9dd6cb0242d7a320c9f005268d39"],["D:/博客/github/MyBlog/public/img/图库/9.jpg","1469c5f303c03baf540b1a360958a02a"],["D:/博客/github/MyBlog/public/index.html","1116c997361a4666f8608cf2206072fb"],["D:/博客/github/MyBlog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/博客/github/MyBlog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/博客/github/MyBlog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/博客/github/MyBlog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/博客/github/MyBlog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/博客/github/MyBlog/public/link/index.html","31d5c56b65b72012a508f4fb2f1696fb"],["D:/博客/github/MyBlog/public/page/2/index.html","811bf7c23b2db442b4d42f611abfa90a"],["D:/博客/github/MyBlog/public/page/3/index.html","4c659541f2121966a7ccaf6593102817"]];
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







