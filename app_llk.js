/*
cron 32 5,36 8,12,18,22 * * ?
const $ = new Env('乐乐看');
目标: 乐乐看pro 
微信打开下载链接https://apillkpro.cengaw.cn/landing_page/779404
抓包heders里的Authorization不要Bearer
默认提现0.3 withdrawTime设置提现时间,不设默认14点提现

格式：export apillkpro="Authorization=eyJhxxxxxxxx"  
多账号换行隔开


*/

const $ = new Env("乐乐看Pro");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义
///////////////////////////////维护参数自行更换//////////////////////////////////
let defaultUA = 'Dalvik/2.1.0 (Linux; U; Android 10; V2203A Build/SP1A.210812.003)'                    //默认UA
let model = 'V2203A'                   //默认机型(改)
let s = 1                                //刷奖励开关 0为关,1为开(默认开启)

var version_='jsjiami.com.v7';function _0xd1bf(_0x2e629f,_0x4271d7){const _0xe30bcd=_0xe30b();return _0xd1bf=function(_0xd1bf04,_0x4c42b9){_0xd1bf04=_0xd1bf04-0x183;let _0x4d33f1=_0xe30bcd[_0xd1bf04];if(_0xd1bf['UjQDqO']===undefined){var _0x13f5c3=function(_0x10667b){const _0x5cc757='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x39409a='',_0x1f3872='';for(let _0x2b04a3=0x0,_0x377b41,_0x47660b,_0x46d305=0x0;_0x47660b=_0x10667b['charAt'](_0x46d305++);~_0x47660b&&(_0x377b41=_0x2b04a3%0x4?_0x377b41*0x40+_0x47660b:_0x47660b,_0x2b04a3++%0x4)?_0x39409a+=String['fromCharCode'](0xff&_0x377b41>>(-0x2*_0x2b04a3&0x6)):0x0){_0x47660b=_0x5cc757['indexOf'](_0x47660b);}for(let _0x8abc6a=0x0,_0x5193ce=_0x39409a['length'];_0x8abc6a<_0x5193ce;_0x8abc6a++){_0x1f3872+='%'+('00'+_0x39409a['charCodeAt'](_0x8abc6a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1f3872);};const _0x109149=function(_0x421ee7,_0x3b01d1){let _0x507648=[],_0x4be844=0x0,_0x295754,_0x588799='';_0x421ee7=_0x13f5c3(_0x421ee7);let _0x1402a7;for(_0x1402a7=0x0;_0x1402a7<0x100;_0x1402a7++){_0x507648[_0x1402a7]=_0x1402a7;}for(_0x1402a7=0x0;_0x1402a7<0x100;_0x1402a7++){_0x4be844=(_0x4be844+_0x507648[_0x1402a7]+_0x3b01d1['charCodeAt'](_0x1402a7%_0x3b01d1['length']))%0x100,_0x295754=_0x507648[_0x1402a7],_0x507648[_0x1402a7]=_0x507648[_0x4be844],_0x507648[_0x4be844]=_0x295754;}_0x1402a7=0x0,_0x4be844=0x0;for(let _0x33f5f0=0x0;_0x33f5f0<_0x421ee7['length'];_0x33f5f0++){_0x1402a7=(_0x1402a7+0x1)%0x100,_0x4be844=(_0x4be844+_0x507648[_0x1402a7])%0x100,_0x295754=_0x507648[_0x1402a7],_0x507648[_0x1402a7]=_0x507648[_0x4be844],_0x507648[_0x4be844]=_0x295754,_0x588799+=String['fromCharCode'](_0x421ee7['charCodeAt'](_0x33f5f0)^_0x507648[(_0x507648[_0x1402a7]+_0x507648[_0x4be844])%0x100]);}return _0x588799;};_0xd1bf['ssBBlK']=_0x109149,_0x2e629f=arguments,_0xd1bf['UjQDqO']=!![];}const _0x3650e4=_0xe30bcd[0x0],_0x3eb3fe=_0xd1bf04+_0x3650e4,_0x464263=_0x2e629f[_0x3eb3fe];return!_0x464263?(_0xd1bf['cENfoG']===undefined&&(_0xd1bf['cENfoG']=!![]),_0x4d33f1=_0xd1bf['ssBBlK'](_0x4d33f1,_0x4c42b9),_0x2e629f[_0x3eb3fe]=_0x4d33f1):_0x4d33f1=_0x464263,_0x4d33f1;},_0xd1bf(_0x2e629f,_0x4271d7);}function _0xe30b(){const _0x273365=(function(){return[...[version_,'FGjsABjwAinamGPip.tehcyomS.hvKh7JfupNVqg==','sCkqWQS','W7WaWRBdQc0','hSoIW5XAdq','tCoDoSoxW6VdSSoiW4GsnCkala','W64VWRZdMG','W4hdSSk9W7FcLG','w2rAWR/cJa','WRhNNyZLUO7LK6T+Da','W6fjBq','uSoubCkWqa','s8kmWQ7cOmo4W6L8','v8kAWR/cU3RcSa','W6fdzmoMW44B','umoBFeWM','BCkJWOpcOSow','W4ZdHSknW5udWQq','W60NWRBdHqFdGW','imoED0ZdOMtdTq','d8o9W59c','WRxcTW8Nlq','W5FdJCkEW5ej','vWlcPbpdSq','WPOMW53cK2VdNW','ntjeex4','WReeWQFdLSoCuMhcNx1IySoDWPC','smkAWR/cVxFcO8oi','W7e+WQLNeImEW63dHZRdUCkqha','W5hdH8kBW5uB','WP9wnNBcNG','xCo8z1iU','WRRdPSk/','W5aWWRfLEq','nmkUWOVdJq','drtcTSkbW6zAxc8ylmoOf8o3W6VcUmojgt1faSoVlNRdJSksAWZdMrVdPKXtW48zpcPDWQHkWP94tsWTWO4z','f8kbW7ZdSmoa','WRHxW7C','W79dECoUW5yfWQi','xEAEIUISOEI1ToAkHEwNNoI0Qo+/T+wnJUMgJUwNHUAvVUAkREAGLEAFUEwoUEMfG+AHVEw/Lq','lJj1W6VdSa','WP5IWOddSgjB','qCkqWQlcQW','W4O5W57cTJizhKiWpatcMLXB','WQBcRsW5ma','hCoFWOPzW6BdKG','W4yQWRfMgq','tNuBWOZcSetcMSo/zmomW7VdVN0','isv5W7ldOa','k8oOWPRcPSor','WPVcISkSW7yV','pSksWQdcJg4','6lAG5y+wpq','uCkwWQG','u8oxlSo5W6NdOmoJ','W7ftW6pcI8khhte','6lwY5y6Rua','cSozWODgW6BdIee','b8orWOapwG','lmoIBIS6amoEtxP4WO1K','x8oJC1S','r8kqWQJcTW','W5ZcICk7mCoS','WP7dRmkLcGilW5eZeCoDaLxdHSkc','WPOMW53cIwVdNCkC','56AFWPuQeq','W4JdGSkwW50v','WPZcVCkaW58PWPrZW7WhrYxcGCkXWOG2y2hcKNldGhtdN8ogwhNdRxyVW7tcI8oCW73cKsa','qUInRowoIUwpNEAvVUAiPEwiR++8QUMASoACJEEUREw+Ia','uXBcHbddMq','W6GxWRbNACk0W4G5W6NdO8o4imk9vuTi','W7KgWRjQBq','ccjEW5/dPq','WPZdTSk/fGGxW4XKpmombv3dNa','t8odhmkMFW','W5RdL8k+W54N','WO8OWP/dLse6W45RWOZcPbWA','lSoAWQ7cVmos','W4/cMbO','CSoKlSkxsW','6lAE5y+jAa','eWhcRSkyW7e','W5xcG8kCb8ow','WRROR6lMSiFOVB3LVRNLPRJLIylPOk7OTRlKUjFVVldORBtPGkBNNyRKVztOGkxOSRxMLjq','W754dCkDpG','wmkwW67cGrm','vCk/WR7cTmo/','AqhcPZFdIG','W7CHmSkLWQu','WOiMWPZdHa','ks4yW5q','54g05OY254YN','u8oIFmkvWOS','srmUW4ZdJW','A8kIlhO','fcXlW7/dPHldOmosESoPW6xdIq','bH0XW6tdTq','W4HrqmkZEhX9o0W/df3cHmotWP3dHcDYW44TFSoLuIDNAmkxu8kguCkxabNcNSkMvmoLWRJdGCkJECkWaSkkW7xcMG7dLCkzsgVcGgrBcCoGW6RcJ3BdPCo1W5HWtCkbWO4s','aSoXWQyqEs8','W6roaSk2','WOzzihlcIW','pSkOWRhcHW','WQ7cH8o5ECo3xmkQ','rmolE8kvWO4','WPpcRmka','W4dcMbNcRG','W40iWQTcqq','W67cTSkndraMW4L8','5QgJ5RA85yMn5P+H5B6n5zgU772c6iID6kw75B6V5zcR6k6U572YtfBdJG','bapcTSkyW7Oo','WQRcG8oJ','ecldG8oD','W73dKmk0W4JcHG','W7/dLSkoW5WEWRjwW7JdKmoJW57cQc0','rSoxkCoEW6RdO8o0W5q','wxn1W6VdOq','mmowW5hdGW','56wrgmk+W4O','WRxNNyJLU5hLKQW9WOVOJy7LVkq','vCouC8kf','WQhcICoW','WQmKW4dcH3e','cJKIWOtcHCkF','w1nBWQZcNG','hsPTW73dJG','aCocWP1cW7dcNbO3B3tdTSoeFSo4uwDHuSooW4TDvmoNWQNcJuNdO8kXx8obWRSTo8k/lSo1WPzuW6ZdPgnVWQ4SdhtdIf5IW4ZdGmosW4JdNxtdJ8oTtSkOW6tcQdCoW44IWO/dUMRcJmkRWR3cMNpdRmoslMtdNHJcUq','kmovCG','W5iKWRL2','WQtcLCozrmo2wa','W4vXnmkAma','W6D9W6lcISkA','W5KnWOj7qW','uColgCocW4e','uCotl8oLW6a','W5ZcOmkncq','hCkcW7q','uCkApvv+','6lsV5y+3sa','iJLjWOZcNa','6lAf5yYajG','5O6O54+Z5yIu','5yED5OQX5yUo','56ApWP/dP8o+','odnS','W59fpSkSeq','6lwI5yYSWQm','cq/cPCkWW7Sepw8nnCoNaG','omo+vNddUW','W44cWPzAzq','lYqpW44','fCooW6/dVSo3','bt1TWP/cMW','W4W6WQFdQWG','WOeKW53cIKe','WQClW4/cQ0e','uSoTELS','5O6M54+Y5yIw','W4FdK8kZW6JcVdy','hCo7W4S','Dw9s','sCkKWPSetmofDmkYWQ/dHa09sa','fsldHmonWRFdOW','W6uiWQDkBSkZW6CIW7tdPCoWDG','W5Slhmk4WRS','d8kYWRFdNCo6','CwTiW6hdNvpdUW','WQr6k8oon8kaWOFdNCkoW7rsW6riW4C','6lwE5y60DW','pSoNW5HEg8kfkCkkWQtdVbWCtW'],...(function(){return[...['WQ82WR3dOZW','W5JdGmkOW67cUa','WP1sn3JcN8onW6K','W5uND8kiz8oEW4hdHmkQW7zjW65MW4S','W7VdS8kKcqixWPGUE8oohfZcJ8oA','lcCh','BSkfWQNcI8op','dszCW6RdIW','WOaOWPBdOcOWW7qPWOZcTaOg','jSk+WQy','WQZcISo7','mSoyW5VdP8oaWQO/W7hcMmoZqSoD','gCoAtLtdJa','vSoCeW','asiJWOtcMColWQJdHJClWPpcRCo5BfNcPdaOW5u0eCoEWQFdMSosWOinfK3dJxX8W6BcSCkuWP9YWQuGWOddQMf6WOTpW4NdT2KmBSkzWOhcTCkWW6HvW698pmo3AhvQWO1FcCkjWQ9JWPHBfmoaWOrqiSo/W7JcIw3dMCobESkkuH7cOba2dc/dQ2KOgxVcMdDHzmokWOLbocZcIv3dMCopWOXggwFcQLugWOyrsmowWQ/dV8k+WQz3WOOOW5/cU0vxWRyf','W5e+WQLNeIm','W4VdISkmW67cUtfh','W6iwWOz5CG','tramW6VdRmk4AWGUWQPVsG','hJzAa1FdJM1WEJGFWQLAvCkdWRi2i1tcNGyqW6K3W6OuWOm6BmkMtJhdS8kWnmoViwaqWQVcNhTUEmkUWRi','WO5tnW','u8oxkSo3W7FdSG','uXOyW4xdRSkQqa','zGBcRtpdNSkbDa','WPPQWOddPwLksq','r8oozmku','fqhcSmkqW7G','vCkqWR/cUG','W6hcISk3f8o2','qSoDoCoZ','vCkXWQ3cRg4','WP9+fSoJiq','A8kYmxO','W67dICk7W5W6','W7RdH8kZW54u','BvLuWO/cGq','pCkWWQJcLG','6lAl5y6yla','W5pcLG/cUmoO','6ls85yYOW5m','pY4yW5JdIsjI','asiJWOtcMColWQJdHJClWPpcRCo5BfNcPdaOW5u0eCoEWQFdMSosWOinfK3dJxX8W6BcSCkuWP13WQvNW47dRg1WWOXaWOJdO2q','W47cQCknj8ou','W5WIWQ57','ng9fW4pdLq/cRSkGstNdICktxSoaoSoCgW','vmknWQRcR8oy','yCopxoAGGUw9MoMvToIVJG','nGddHSoSWPi','W7SHWRhdLW','W7e6WQhdNHhcJshdNGFcQhTsWPBdTCkZWRqZWQqwzbNdTZnBWR/cRweyWOSBWOXQaK3dPrnti8k5WQz/W4feW7lcUH1SW4b/rSkAWRJcQSoQqe0sW7nrnwXEW6tcOeWFWQdcLv0HWPlcVufugupdTq3dH0xdGIm','WQFcRXacfCkmk2LFWOpdUJiVv8oElxdcShnUvSozumoWW51nWONcHH59lSo4WRBcN8o6wLpdMCoijSkyW5yjWR/dOw8ZjgJcVSkxWOddSSkGe353pYxdTCklcCodWRdcM8kYW7juhmodWPxcH2HCg0C1W5/cVG','eJBdG8on','A293WQm','uSokue4f','WP4IWOldJIGIW58','BCk/WPfNWQO','jIrLaLW','imofWR9gW6C','WPRcQmkzW4O','W69paSkQlW','wIhcHIJdQW','AUEESow5QowsTSoaia','j8kWWQ7dHmoHFWm','C8k0o15GuCo+suTEWOj0','g8kiW7RdKmo7','W7OHWRZdGa','W7OVWRVdVaFdLMO','pmovWRO','WQOMW4/cLgldMCoz','WODdmgFcGmkbWQnlgmkQj8ovWRvexSkmbCo/yhPuW5tcISkODSkdhKJcH1rEW4DotNJdNrTswSoLhCoueGZdKJLrWOadpq','6lAL5y+bW4S','prr0ihq','WOdcSmkeW4O','cYZdJCoOWRBdQSoZWPWsWPJdGNS','bCkeW7C','W7zofCk7','WOlcUGi3lG','WRpdOSkMgW','m8kiW7ldRCoxW4Ta','6yAU5BQtWOZPMRNMNy7NRR7LV4u','WPKcWQpdRJW','W4dcOmkzpmonzmo4nmkxWOFdVSoy','ESougSklEa','cmo5WR9EW6a','v8kxWPngWR8A','fWhcRmkvW7On','r3SyrHddGNOqxs0pWOHZ','W4eaemkEWPjOC03dVrGxW6m','W78HWRpdNIa','CmkTWP/cJCoW','CCk6mxO','d8oAW45uhG','WQvWjmoin8kCW5m','W5TGtSoQW4G','BSk2W6VcRYddIa','6z2b5OYl54+S5PEP6zE677Y554Ya5zYo55Q76k6j576k5lI35Q2S5AwF','WQRcKdaWba','lCoPAY05dmkfq1n2WPrDW64','WPKPWPxdHci9W5qJWPW','xJnaW5/dVbddGCopy8oUW6ldNxfmvG','W4XxumoLjde','qmoyWQxcQCkbWO1yh8oEWPhcH8kYWQy','W6OiWQLL','ht80WP/cJ8kf','WOqSW4K','fCkbW4VdUmoG','5ywkioApG+EnQUwlKSoq','W6KVWQFdNqC','qSoDm8oIW6ddUmoYWOOsjCkwma','F8kUW6/cNI8','ntnAW6RdIG','lCoqWRVcSCof','pCoqW65Yiq','r+EUOEwkUmo+zq','W7uHWRi','jcupW5ldNq','W6CgWQ1U','WRNOJ7NLVyi','hmodW4nNma','oSoiW6vWbW','psOzW5BdIa','ooEDQ+w6VEwsU8kVqoIpHow+LW','qwrFW4RdOq','EGxcIsRdOq','tCoDoG','kmk0WP/dPmoJCILTW57cPCk9Ba','WOqMW4dcGxpdGW','W7ScWRn+BmkJ','u8oxlCo6W6tdTCoJ','ESo3j8kxyq','pmosWR3cUCohW6u','zSoCnSoqW5y','6lwd5y6xWPK','kZm2WOBcJ8kdWQC','uCkBWOnyWRyA','oCo3W6zSoW','gmo3W5HsfCkdiq','e8o9W4T3gSktdSkFWRhdOrmk','W5LowSoIls4RlKi','WQZcSditcSoFya','wmk6W6NcTIddJSo5','t8oKEeK6hKy','WOaOWPy','k8oQWR7dSNBcImoHmSogjI3dOSkO','6ls05y+9Fq','esldHSoaWRW','vCollCoZ','cmoZW4vc','uXOyW5/dRSkO','zw90WPVcHmkojKn+rvZdIG','oJWnWQdcPq','aCo2WQivsW','WPFcRCoFCSod','W45HW4pcTmkr','C8kYl2S','Dmk+W6xcOq','WQOsWRtdJWK','W44aaSkVWPnI','b8ohjmkaW458W5hcG8km','aCocWP1cW7dcNbO3B3tdTSoeFSo4uwDHuSooW4TDvmoNWQNcJuNdO8kXx8obWRSTo8k/lSoMWPDqWQldT2q0WQu2adNdL1m','zSkqWQlcUNpcQSozCgddMSk0qLldJq','WOjsn2tcKSoCW6K','cmogWPLEW6RdHvrSz2VdSCkhASk+vMj5uColW4fbxSkRWQVdKuBdQmoWxCoEWRzNkq','W5JcPSkA','ECkKWPLGWRC','gcndfG','pSoUWQvIW6e','uCoRdCoLW7u','WO/cG8o2wCo3t8oU'],...(function(){return['WR/cRHCA','WRhdRmkS','pY4CW5BdLZa','W6lcKJxcS8oi','gIi2WOdcJW','h8o0FNJdRG','k8kzWRFdJSo7','ymktWPL3WPy','WQNdQSkV','W4tdJSk9','esDA','WPSZW4lcJ3m','W7bEW7/cK8kodW','W6atWQvMCW','g8otWPPhW6/dKG','a8kiW6ddQSoEW40','WRlOJOdLJPlLJ5xMLOpMIQVLIjpVVAJPM7BMN6dNRiFLVlW','W54QWRbQ','h8ocW4JdJSobWRWyW6tcJCoUtColWPW','W5babmkEfq','W57cQSkneSopDSot','gtnCW5ldOrxdJ8ojz8oVW63cN2XCfYeiWP0PW7viWQ4oW6NcGSkctg7dPqNdS2BdSG','W44ae8k6','xSkUkhDHr8ozxf5dWO1IW40','WODdmgFcGmkbWQnlgmkQj8ovWRvexSkmbCo/yhPuW5tcISkODSkdhKJcH1rEW4DotNJdGrTssmk4gSkuga3cHcmxWOebp1BcIa','W5ddGSkxW5e','WP7cOCkoW78Z','5Qcn5RAT5yQN5PYb5B6s5zcs77+c6iMv6kA95BYE5zg96k28576gnu3cIG','gmo5WQGE','jYXNWQ7cIG','WOqRWRtdHWK','vJVcKIpdOq','p8oED1ddR3xdTq','W4m8oCkuWRK','W6dcOmkil8oG','kCoTW6JdO8om','smoLDfuYgq','WOnskNdcH8ot','mJhcUSkfW58','WPD0n8oBpW','W7nhrSomkG','cIzFW5hdPaddIW','W6JcGmkPmSo6','fZjEh03cLYmRCICyW6PCtCkCWQ4','W6xdGmkFW7JcOG','W4tdJSk7W6S','kmk0WP8','AComjmkjDa','vCoIC1SV','xCooE8kvWPTUWOq','6lwq5y61Dq','6yAB5BUqW6hPMA3MNlBNRlNLVke','W63NRlxLI601xq','hCkyWQ3dLSoM','BG7cRJC','WOdMNABORkNOTzJMIzdLPztOTOdVVjlLJOxPHBFLPz3MLBRMIQtMOkRMN6tLJPlPHjtMOQFLV6O','aSkgW7tdS8oi','mUs9K+MIU8kj4OUW','xCkscxTC','WRxdPSkQgGixW5y','hJC+WOa','bIfEpKO','FCo5y1y4h0JcOINdL8kYW5hdRG','edpdKSoFWQO','tmoTzu0Y','tI7cOHJdGG','W4lcMXe','acZdOCokWRi','eYbCbhm','xCo+rSkMWPa','W4tcU8kkdCoqoSkzDmkcWP7dSConiCoqWRldTCoCnfqlhhFcNKBdKSklyHDCmCkGWOGXW6DsifrvW6bkWQNcT8kMpSkLWP8','WOVdICkdgWO','WPTEj3ZcLSop','E8kVW7JcQcZdN8k4e8ofeaxcGmk+bmoIW7y/W5jqWO3dPKtcULfmW7BcKr57WRRdQJTL','ncDpauhcHMi','FhPtWOFcLMrndCkeyYTp','W55xx8o6jdC','6lEj5y+ahW','W7CVWRJdIW','mIClWPm','mrpdSc7cGSkrp8khWQi','gI1jmKRcKaWWBYeqWRW','WQK2W5RcJMJdMCkqW4KgWPTIW7GN','W6uiWQC','rSoxkq','bCozWO5ZW63dGNT3EM3dUCor','F8o2poAJREw8OUMvLEIUIG','jsBdI8oBWR3dVmkD','omoEW5ddKSolWRW','dINdRmoTWOO','WOjMWRRdG3y','icv7WQi','z1LMWOJcVa','DaBcRJC','W603WQxdI18','w8oPyW','WR/dQSkS','WQxMJ5VNJzZcVIC','n8kRWPtdJmo5','as/dHCogWQO','uX4fW47dRCkX','W4dcLGNcQmoL','WORcUHaDaa','fCoZWPmACdio','pt4yW58','Amk9WPtcI2e','jaTaWR/cLW','DmoWnCkGDq','zSoJFw0p','iCouyW','WOnmm8oQoW','cmotW7vBjW','gtCLWPxcHW','rCk2e1z2','u8kiWR3cPCoW','W6mIWR7dUYK','ncNdSmo9WPC','WPJcPSkvW4S','fc1kcG','54kA5OY5542/','dZO4WPVcMa','nqf0W7VdVW','WRWlW6dcQeS','W6KHWQBdMG','Emk+khTVqCor','56E3W5hdOSoG','b8oWWQ5cW5e','WP1sn2lcN8op','W6ucWQ5SDmk/','emoxWRZcUmo5','cIzFW4VdPai','dmo7W4Ty','WOHQWP7dPwO','WOTVjSoIpG','fmo3WQec','m1BdSwBcHSoyy8kqW5moWP5F','yEITU+AXLEI/UEw+VowKU+wkKoMGHUI0Uos4PE+/L+ITIEMcMUEFS+s9JUIdI+IWKoAwVW','W53dImkSW5uDWQLB','r+AEKEAjUUwiJ8oasmkW6k6S6zMS6k2e6iEz5P6p6k+G5PMw','d8keWQVcK3W','DmkpWRVcNSot','hIDpf0hcHJe','bcDDbKJcGa','WOKDWPxdSWa','jJL4WQJcKSk5W6q','hYzy','W65eb8kRmJrk','rSkEWQlcNhpcPCoj','tmo7bmoDW7W','bmo9WRyuCc0p','jSovWOr7W4y','pZG4W4/dJW','bJq9WPhcICkf','WPJcPSktW640W4OsWRWfh23cKG','mSoyW5S','W47cUSkCh8opzq','e8kmqCoKgxPDu8kJWRTOW7RcJa','W5JdJSkPW7S','W5XkmSkdiW','eSo3W59ffCkqjq','cqNcSCkf','W7FdM8kXW70d','W5T5W7pcTCk6','W7pcVIFcICoU','CGRcScFdNSkz','csldH8om','W4ftW7hcLSkogxq'];}())];}())];}());_0xe30b=function(){return _0x273365;};return _0xe30b();};const _0x5b3b17=_0xd1bf;(function(_0x553470,_0x1c2801,_0x3524f0,_0x18dc13,_0x4377f5,_0x1fc6df,_0x53cd67){return _0x553470=_0x553470>>0x8,_0x1fc6df='hs',_0x53cd67='hs',function(_0x50dab5,_0x3f40e5,_0x4fc0d6,_0x4586d4,_0x1c2032){const _0x163963=_0xd1bf;_0x4586d4='tfi',_0x1fc6df=_0x4586d4+_0x1fc6df,_0x1c2032='up',_0x53cd67+=_0x1c2032,_0x1fc6df=_0x4fc0d6(_0x1fc6df),_0x53cd67=_0x4fc0d6(_0x53cd67),_0x4fc0d6=0x0;const _0x567163=_0x50dab5();while(!![]&&--_0x18dc13+_0x3f40e5){try{_0x4586d4=-parseInt(_0x163963(0x202,'!emd'))/0x1+parseInt(_0x163963(0x36a,'achh'))/0x2+parseInt(_0x163963(0x297,'lBZN'))/0x3+parseInt(_0x163963(0x28b,'H5)$'))/0x4+-parseInt(_0x163963(0x276,'tkzw'))/0x5+-parseInt(_0x163963(0x253,'V1%j'))/0x6*(-parseInt(_0x163963(0x2c7,'tuCT'))/0x7)+-parseInt(_0x163963(0x308,'Z7(U'))/0x8;}catch(_0x4e943c){_0x4586d4=_0x4fc0d6;}finally{_0x1c2032=_0x567163[_0x1fc6df]();if(_0x553470<=_0x18dc13)_0x4fc0d6?_0x4377f5?_0x4586d4=_0x1c2032:_0x4377f5=_0x1c2032:_0x4fc0d6=_0x1c2032;else{if(_0x4fc0d6==_0x4377f5['replace'](/[pwneFghNfPSKGqyBJtuVA=]/g,'')){if(_0x4586d4===_0x3f40e5){_0x567163['un'+_0x1fc6df](_0x1c2032);break;}_0x567163[_0x53cd67](_0x1c2032);}}}}}(_0x3524f0,_0x1c2801,function(_0x3e2bdb,_0x5c488f,_0x15157d,_0x44405c,_0x8a6645,_0x2c6f6e,_0x1040b7){return _0x5c488f='\x73\x70\x6c\x69\x74',_0x3e2bdb=arguments[0x0],_0x3e2bdb=_0x3e2bdb[_0x5c488f](''),_0x15157d=`\x72\x65\x76\x65\x72\x73\x65`,_0x3e2bdb=_0x3e2bdb[_0x15157d]('\x76'),_0x44405c=`\x6a\x6f\x69\x6e`,(0x126393,_0x3e2bdb[_0x44405c](''));});}(0xc700,0xd43f8,_0xe30b,0xc9),_0xe30b)&&(version_=_0xe30b);let httpResult,httpReq,httpResp,userCookie=($[_0x5b3b17(0x2dc,'tsl)')]()?process[_0x5b3b17(0x2da,'W(y&')]['apillkpro']:$[_0x5b3b17(0x233,'lBZN')](_0x5b3b17(0x198,'5r0y')))||'',withdrawTime=($['isNode']()?process[_0x5b3b17(0x2da,'W(y&')]['kgWithdrawTime']:$[_0x5b3b17(0x196,'Uh4u')]('kgWithdrawTime'))||0xe,nowHour=new Date()[_0x5b3b17(0x2ce,'([nR')](),userList=[],userIdx=0x0,userCount=0x0,m=0x0;class UserInfo{constructor(_0x2b0ab1){const _0x5a7b20=_0x5b3b17,_0x53f29d={'ZojSX':_0x5a7b20(0x207,'1uU@')},_0x366dec=_0x53f29d[_0x5a7b20(0x223,'W!NX')][_0x5a7b20(0x1d4,'JvlN')]('|');let _0x1e94ca=0x0;while(!![]){switch(_0x366dec[_0x1e94ca++]){case'0':this[_0x5a7b20(0x28a,'Yqsk')]=![];continue;case'1':this[_0x5a7b20(0x378,'!emd')]=++userIdx;continue;case'2':this[_0x5a7b20(0x2c2,'tsl)')]=![];continue;case'3':this[_0x5a7b20(0x205,'#k^F')]=this[_0x5a7b20(0x1e7,'W!NX')];continue;case'4':try{this[_0x5a7b20(0x227,'A2o2')]=$['str2json'](_0x2b0ab1),this['ckValid']=!![];}catch(_0x47a358){this[_0x5a7b20(0x343,'yoIz')]=![],$[_0x5a7b20(0x197,'Uh4u')]('账号['+this['index']+_0x5a7b20(0x20d,'V1%j'));}continue;}break;}}async['my'](){const _0x284f7d=_0x5b3b17,_0x29d558={'XdPEM':function(_0x29b99a,_0x50039b,_0x2aa049,_0x240ef0){return _0x29b99a(_0x50039b,_0x2aa049,_0x240ef0);},'GnkFS':function(_0x4c079e,_0x55884e){return _0x4c079e==_0x55884e;},'BIfEV':_0x284f7d(0x188,'MG&Y'),'uepTC':function(_0x13c545,_0x3f469b){return _0x13c545!==_0x3f469b;},'hlEfM':_0x284f7d(0x360,'Uh4u'),'pYPsp':function(_0x291932,_0x27f1b8){return _0x291932===_0x27f1b8;},'vVqpb':_0x284f7d(0x1fb,'CN15')};try{let _0xae0d93='https://apillkpro.cengaw.cn/api/v2/member/profile',_0x4344ed='',_0x3ca738=_0x284f7d(0x361,'Z7(U')+this[_0x284f7d(0x186,'!emd')][_0x284f7d(0x209,'L%&4')],_0x2fb974=_0x29d558['XdPEM'](populateUrlObject,_0xae0d93,_0x3ca738,_0x4344ed);await httpRequest(_0x284f7d(0x216,'W!NX'),_0x2fb974);let _0x1410dc=httpResult;if(!_0x1410dc)return;_0x29d558[_0x284f7d(0x191,'([nR')](_0x1410dc['code'],0x0)?'cUQew'===_0x29d558[_0x284f7d(0x2b1,'FY]z')]?_0x3ef57d[_0x284f7d(0x377,'#k^F')](_0x8e18df):(this[_0x284f7d(0x29e,'pI[x')]=!![],this['canRead']=!![],$[_0x284f7d(0x250,'yaPC')]('账号['+this[_0x284f7d(0x2d0,'(T]1')]+']'+_0x1410dc[_0x284f7d(0x239,'H5)$')]['nickname']+_0x284f7d(0x1f0,'MG&Y')+_0x1410dc[_0x284f7d(0x1c6,'achh')][_0x284f7d(0x31d,'A1K^')]+_0x284f7d(0x36f,'%2BY')+_0x1410dc['result'][_0x284f7d(0x359,'RqRP')]),this[_0x284f7d(0x338,'66#4')]=_0x1410dc['result']['uuid']):$['logAndNotify'](_0x284f7d(0x192,'Iu$E')+this[_0x284f7d(0x1a9,'FY]z')]+_0x284f7d(0x1ee,'tuCT'));}catch(_0x5d08ed){_0x29d558[_0x284f7d(0x30c,'H5)$')](_0x29d558[_0x284f7d(0x2b9,'ezx7')],_0x29d558[_0x284f7d(0x1d5,'7J1T')])?_0x3cbf0c[_0x284f7d(0x317,'ezx7')]('账号['+this[_0x284f7d(0x1d3,']C1I')]+_0x284f7d(0x2d2,'L%&4')+_0x3d7d48['result'][_0x284f7d(0x1b9,'!emd')]+'金币'+_0x14b7c9['result'][_0x284f7d(0x1ab,']!a[')]+_0x284f7d(0x2e8,'H5)$')):console[_0x284f7d(0x2e3,'achh')](_0x5d08ed);}finally{if(_0x29d558[_0x284f7d(0x1b5,'([nR')](_0x29d558[_0x284f7d(0x2b2,'9)K(')],_0x29d558['vVqpb']))return Promise[_0x284f7d(0x31b,'ezx7')](0x1);else _0x59ff2d[_0x284f7d(0x344,'lBZN')](_0x284f7d(0x2e5,'%2BY')+this['name']+_0x284f7d(0x2af,'Z7(U'));}}async[_0x5b3b17(0x1a8,'lBZN')](){const _0x56dd18=_0x5b3b17,_0x3e497d={'TLHrB':'JzRxH','qIEtF':function(_0x42d9f2,_0x2a34ff,_0x48ca96,_0x3a3cc7){return _0x42d9f2(_0x2a34ff,_0x48ca96,_0x3a3cc7);},'nYuRV':_0x56dd18(0x254,'Ej%%'),'CncFE':function(_0x7eb6e3,_0x22db24){return _0x7eb6e3>_0x22db24;},'mvkwR':'已完成','DokIA':'未完成','NAaJp':function(_0x3c27c7,_0x1c2a49){return _0x3c27c7==_0x1c2a49;},'MBXEw':function(_0x421dc3,_0x159dfc){return _0x421dc3===_0x159dfc;},'XOcQQ':'Xxjrh','ZmOIx':function(_0x2f97c7,_0x5d9659){return _0x2f97c7<_0x5d9659;},'pFELO':_0x56dd18(0x185,'Uh4u'),'YfULh':_0x56dd18(0x2f3,'JvlN'),'kqFrr':function(_0x5be8ec,_0x3da1c4){return _0x5be8ec<_0x3da1c4;}};try{if(_0x3e497d['TLHrB']===_0x56dd18(0x2e6,'JvlN'))_0x1d1581['log'](_0x4e7146);else{let _0x1c93f6=_0x56dd18(0x318,'CN15'),_0x47ea79='',_0x480f39=_0x56dd18(0x20e,'66#4')+this[_0x56dd18(0x23b,'A1K^')]['Authorization'],_0x24b668=_0x3e497d[_0x56dd18(0x296,']C1I')](populateUrlObject,_0x1c93f6,_0x480f39,_0x47ea79);await httpRequest(_0x3e497d[_0x56dd18(0x213,'%2BY')],_0x24b668);let _0x35bcd0=httpResult;if(!_0x35bcd0)return;let _0x27a000=_0x35bcd0?.[_0x56dd18(0x269,'R4fS')][_0x56dd18(0x1c4,'zAoi')]||[];for(let _0x565dca of _0x27a000){if(_0x56dd18(0x273,'1uU@')===_0x56dd18(0x323,'R4fS'))return _0x1b645a[_0x56dd18(0x32d,'!emd')](0x1);else{this[_0x56dd18(0x1bb,'A2o2')]=_0x3e497d['CncFE'](''+_0x565dca['st'],''+m)?!![]:![];let _0x17782a=this['state']?_0x3e497d[_0x56dd18(0x2a6,'V1%j')]:_0x3e497d[_0x56dd18(0x2c6,'zAoi')];$[_0x56dd18(0x261,'([nR')](_0x56dd18(0x19e,'MG&Y')+this[_0x56dd18(0x1d0,'pI[x')]+']'+_0x565dca[_0x56dd18(0x2b6,'!emd')]+_0x56dd18(0x206,'MG&Y')+_0x17782a);_0x3e497d[_0x56dd18(0x1f8,'1uU@')](_0x565dca['st'],0x0)&&_0x565dca['id']==0xa&&(_0x3e497d[_0x56dd18(0x220,'R4fS')](_0x56dd18(0x1fa,'66#4'),_0x3e497d[_0x56dd18(0x259,'tkzw')])?_0x72157f=_0x494e22[_0x56dd18(0x32b,'NFPx')](_0x579450[_0x56dd18(0x2d3,'v@^^')]):(this[_0x56dd18(0x212,'JvlN')]='1',await this[_0x56dd18(0x23a,'Uh4u')]()));if(_0x3e497d[_0x56dd18(0x2e4,'lBZN')](_0x565dca['st'],0x0)&&_0x3e497d[_0x56dd18(0x228,'lBZN')](_0x565dca[_0x56dd18(0x214,'1uU@')],0x1)&&_0x3e497d['NAaJp'](_0x565dca['id'],0x9)){if(_0x3e497d[_0x56dd18(0x230,'H5)$')](_0x3e497d[_0x56dd18(0x29a,'MVNb')],_0x3e497d[_0x56dd18(0x28c,'H5)$')]))return _0xbdf39b[_0x56dd18(0x1d7,'W(y&')](0x1);else this[_0x56dd18(0x34d,'yaPC')]='9',await this[_0x56dd18(0x2c9,'Iu$E')]();}_0x3e497d[_0x56dd18(0x33c,'RqRP')](_0x565dca['st'],0x0)&&_0x3e497d[_0x56dd18(0x316,'zAoi')](_0x565dca[_0x56dd18(0x325,'lBZN')],0x1)&&_0x3e497d['NAaJp'](_0x565dca['id'],0x8)&&await this['coin']();}}}}catch(_0x31bea7){console['log'](_0x31bea7);}finally{return Promise['resolve'](0x1);}}async['sign'](){const _0x3d1e8b=_0x5b3b17,_0x4a6974={'DFlTc':function(_0x32e143,_0x29a8b4){return _0x32e143===_0x29a8b4;},'BXLdd':_0x3d1e8b(0x284,'H5)$'),'oBOkv':_0x3d1e8b(0x270,'Uh4u'),'MEIjU':function(_0x34d232,_0x1d6d81){return _0x34d232==_0x1d6d81;},'wpxvr':function(_0x213d2f,_0x13bb24){return _0x213d2f*_0x13bb24;},'Kgnav':function(_0x57cd82,_0x5e7fba){return _0x57cd82/_0x5e7fba;},'IsVtd':function(_0x3ddc1b,_0x2498ca){return _0x3ddc1b!==_0x2498ca;},'Eatof':'teRwB','RDWnq':'uTwcl'};try{if(_0x4a6974['DFlTc']('VqYUx',_0x4a6974['BXLdd'])){let _0x4df4b9=_0x3d1e8b(0x1fd,'MVNb'),_0x2bb2ae='',_0x3b5947=_0x3d1e8b(0x353,'achh')+this['param'][_0x3d1e8b(0x1f5,'W!NX')],_0x1e1be8=populateUrlObject(_0x4df4b9,_0x3b5947,_0x2bb2ae);await httpRequest(_0x4a6974[_0x3d1e8b(0x1bd,'yoIz')],_0x1e1be8);let _0x298e31=httpResult;if(!_0x298e31)return;if(_0x4a6974[_0x3d1e8b(0x321,'MVNb')](_0x298e31[_0x3d1e8b(0x298,'W!NX')],0x0)){let _0x251dfa=Math[_0x3d1e8b(0x280,'achh')](_0x4a6974[_0x3d1e8b(0x1f6,'66#4')](Math[_0x3d1e8b(0x2fd,'66#4')](),0x7530))+0x1388;$[_0x3d1e8b(0x344,'lBZN')]('账号['+this['name']+_0x3d1e8b(0x376,'FY]z')+_0x298e31['result'][_0x3d1e8b(0x256,'Uh4u')]+_0x3d1e8b(0x183,'#k^F')+_0x298e31[_0x3d1e8b(0x25b,'1uU@')][_0x3d1e8b(0x346,'#k^F')]+_0x3d1e8b(0x1ea,'oSlJ')+_0x4a6974[_0x3d1e8b(0x2d5,'L%&4')](_0x251dfa,0x3e8)+_0x3d1e8b(0x29d,'W(y&')),this[_0x3d1e8b(0x1ff,'yzT]')]=_0x298e31[_0x3d1e8b(0x1a2,'ezx7')]['ticket'],await $[_0x3d1e8b(0x1f3,'A2o2')](_0x251dfa),await this[_0x3d1e8b(0x190,'j^6)')]();}else $[_0x3d1e8b(0x35c,']!a[')]('账号['+this[_0x3d1e8b(0x379,'zAoi')]+_0x3d1e8b(0x1eb,'Yqsk')+_0x298e31[_0x3d1e8b(0x1af,'yzT]')]);}else return _0x3c357b[_0x3d1e8b(0x24c,']C1I')](0x1);}catch(_0x297778){_0x4a6974[_0x3d1e8b(0x33e,'J1H%')](_0x4a6974[_0x3d1e8b(0x21d,'jsUL')],_0x4a6974['RDWnq'])?console['log'](_0x297778):_0x20dd19[_0x3d1e8b(0x251,'(T]1')](_0x1cc0b5);}finally{return Promise[_0x3d1e8b(0x33b,'7J1T')](0x1);}}async['action'](){const _0x415a23=_0x5b3b17,_0x3b92e1={'EuTNs':function(_0x5ebdae,_0x581572,_0x1f9d1a,_0x4ec326){return _0x5ebdae(_0x581572,_0x1f9d1a,_0x4ec326);},'CpjbZ':_0x415a23(0x2c4,'yaPC'),'jQmlb':function(_0x3b8acc,_0x2bc67b){return _0x3b8acc!==_0x2bc67b;},'MWPqZ':'yudtn'};try{let _0x380b7c=_0x415a23(0x337,'jsUL')+this[_0x415a23(0x2c1,'oSlJ')],_0x305922='',_0x3ff9e2=_0x415a23(0x193,'A2o2')+this[_0x415a23(0x31f,'Iu$E')][_0x415a23(0x1ce,'lBZN')],_0x38ac99=_0x3b92e1['EuTNs'](populateUrlObject,_0x380b7c,_0x3ff9e2,_0x305922);await httpRequest(_0x3b92e1[_0x415a23(0x275,'CN15')],_0x38ac99);let _0x42b4da=httpResult;if(!_0x42b4da)return;this[_0x415a23(0x1bf,'tuCT')]=_0x42b4da['result'][_0x415a23(0x1b1,'MVNb')],await this[_0x415a23(0x1c3,'tkzw')]();}catch(_0x5a26fe){if(_0x3b92e1['jQmlb'](_0x3b92e1['MWPqZ'],_0x3b92e1['MWPqZ']))return _0xd67eed[_0x415a23(0x24c,']C1I')](0x1);else console[_0x415a23(0x1c0,'Ej%%')](_0x5a26fe);}finally{return Promise[_0x415a23(0x1cb,'MVNb')](0x1);}}async[_0x5b3b17(0x319,'yzT]')](){const _0x47b6a5=_0x5b3b17,_0x4c24a2={'vdkgG':function(_0x26f479,_0xae5bbd,_0x3da3d9,_0x3971d9){return _0x26f479(_0xae5bbd,_0x3da3d9,_0x3971d9);},'eiACF':_0x47b6a5(0x248,'H5)$'),'SyGBk':function(_0x10bb44,_0x538208){return _0x10bb44==_0x538208;},'eKTBb':function(_0x32ab58,_0x4603dd){return _0x32ab58!==_0x4603dd;},'DOWOY':_0x47b6a5(0x362,'kRQA'),'pcpMn':_0x47b6a5(0x372,'FY]z'),'PIZBc':function(_0x8ff5dd,_0x1e4ca5){return _0x8ff5dd===_0x1e4ca5;},'FeJZO':_0x47b6a5(0x231,'L%&4')};try{let _0x28a890=_0x47b6a5(0x336,'#k^F')+this[_0x47b6a5(0x1db,'W!NX')]+'&ecpm=6000.0&tid='+this[_0x47b6a5(0x312,'V1%j')]+'&platformname=6',_0x4d1e93='',_0x40421c='Bearer\x20'+this[_0x47b6a5(0x2a3,'zAoi')][_0x47b6a5(0x209,'L%&4')],_0x40a541=_0x4c24a2[_0x47b6a5(0x2ff,']!a[')](populateUrlObject,_0x28a890,_0x40421c,_0x4d1e93);await httpRequest(_0x4c24a2[_0x47b6a5(0x2d8,'H5)$')],_0x40a541);let _0x124e70=httpResult;if(!_0x124e70)return;_0x4c24a2[_0x47b6a5(0x2a1,'1uU@')](_0x124e70['code'],0x0)?$[_0x47b6a5(0x20c,'J1H%')](_0x47b6a5(0x2e7,'NFPx')+this['name']+_0x47b6a5(0x187,'Iu$E')+_0x124e70[_0x47b6a5(0x194,'RqRP')]['reward']+'金币'+_0x124e70[_0x47b6a5(0x245,'CN15')][_0x47b6a5(0x2d6,'A2o2')]+_0x47b6a5(0x2f8,'CN15')):_0x4c24a2[_0x47b6a5(0x365,'jsUL')](_0x4c24a2[_0x47b6a5(0x1e1,'MVNb')],_0x4c24a2[_0x47b6a5(0x1f4,'CN15')])?$['logAndNotify'](_0x47b6a5(0x294,'JvlN')+this['name']+_0x47b6a5(0x342,'v@^^')+_0x124e70['message']):_0x3aa42b['logAndNotify']('账号['+this[_0x47b6a5(0x352,'tuCT')]+']看资讯:\x20获得'+_0x526d54['result'][_0x47b6a5(0x31a,'([nR')]+'金币');}catch(_0x1115a2){console[_0x47b6a5(0x36d,'L%&4')](_0x1115a2);}finally{if(_0x4c24a2[_0x47b6a5(0x25a,'NFPx')]('THNNL',_0x4c24a2[_0x47b6a5(0x195,'Uh4u')]))return Promise[_0x47b6a5(0x1e0,'H5)$')](0x1);else _0xebe939[_0x47b6a5(0x20a,'zAoi')](_0x108aa4);}}async['video'](){const _0x2fa86e=_0x5b3b17,_0x125b82={'FEnjO':_0x2fa86e(0x1ac,'v@^^'),'ZkTLt':function(_0x3d6596,_0x457394,_0x55df89,_0x277440){return _0x3d6596(_0x457394,_0x55df89,_0x277440);},'HyfuF':function(_0x62098d,_0x115ea0,_0x1a564b){return _0x62098d(_0x115ea0,_0x1a564b);},'nZcmX':function(_0x3c4356,_0x2bcc16){return _0x3c4356!==_0x2bcc16;},'dYGUk':_0x2fa86e(0x1da,'(T]1'),'rsSxj':function(_0x46cd48,_0x1cfee1){return _0x46cd48+_0x1cfee1;},'KwfgJ':'RdIef'};try{let _0x2a80d5=_0x2fa86e(0x27f,'Iu$E'),_0x1ff75f=_0x2fa86e(0x215,'#k^F')+this[_0x2fa86e(0x2ba,'lBZN')],_0x2bfecf=_0x2fa86e(0x201,'CN15')+this[_0x2fa86e(0x1de,'Z7(U')]['Authorization'],_0x5482bf=_0x125b82[_0x2fa86e(0x255,'[J@c')](populateUrlObject,_0x2a80d5,_0x2bfecf,_0x1ff75f);await _0x125b82['HyfuF'](httpRequest,_0x2fa86e(0x2e2,'MVNb'),_0x5482bf);let _0x505daf=httpResult;if(!_0x505daf)return;if(_0x505daf['result'][_0x2fa86e(0x2be,']C1I')]){if(_0x125b82['nZcmX'](_0x125b82['dYGUk'],_0x125b82[_0x2fa86e(0x328,'%2BY')]))return _0x386085[_0x2fa86e(0x282,'kRQA')](0x1);else{this['ticket']=_0x505daf['result'][_0x2fa86e(0x289,'J1H%')];let _0x19fa05=_0x125b82[_0x2fa86e(0x24e,'!emd')](Math['floor'](Math['random']()*0x7530),0x1388);$['logAndNotify'](_0x2fa86e(0x204,'yzT]')+this[_0x2fa86e(0x2b5,'7J1T')]+_0x2fa86e(0x2a0,'lBZN')+_0x19fa05/0x3e8+_0x2fa86e(0x2d1,'tkzw')),await $[_0x2fa86e(0x329,'oSlJ')](_0x19fa05),await this[_0x2fa86e(0x348,'j^6)')]();}}}catch(_0x29df4d){if(_0x2fa86e(0x264,'%2BY')===_0x125b82['KwfgJ'])console[_0x2fa86e(0x30e,'oSlJ')](_0x29df4d);else{const _0x7e02be=_0x125b82['FEnjO'][_0x2fa86e(0x219,'yoIz')]('|');let _0x3d537f=0x0;while(!![]){switch(_0x7e02be[_0x3d537f++]){case'0':this[_0x2fa86e(0x340,'[J@c')]=++_0x1f3872;continue;case'1':try{this[_0x2fa86e(0x27a,'yzT]')]=_0x46d305['str2json'](_0x8abc6a),this[_0x2fa86e(0x21e,']C1I')]=!![];}catch(_0x4d40ef){this[_0x2fa86e(0x199,'jsUL')]=![],_0x421ee7[_0x2fa86e(0x356,'MVNb')](_0x2fa86e(0x2ac,'5r0y')+this[_0x2fa86e(0x2c0,'yzT]')]+']CK格式错误');}continue;case'2':this['canRead']=![];continue;case'3':this[_0x2fa86e(0x1c8,'Yqsk')]=this[_0x2fa86e(0x272,'pI[x')];continue;case'4':this[_0x2fa86e(0x2ad,'Iu$E')]=![];continue;}break;}}}finally{return Promise[_0x2fa86e(0x29c,'L%&4')](0x1);}}async['showed'](){const _0x398492=_0x5b3b17,_0x18559c={'IxKIr':function(_0x227d10,_0x57aa42,_0x524ec2,_0x183325){return _0x227d10(_0x57aa42,_0x524ec2,_0x183325);},'dYkiq':function(_0x24d214,_0x3ec600,_0x1688b3){return _0x24d214(_0x3ec600,_0x1688b3);},'PjBpC':_0x398492(0x1c1,'CN15')};try{let _0x542402=_0x398492(0x2d9,'J1H%')+this[_0x398492(0x1a0,'([nR')]+_0x398492(0x331,'MG&Y')+this['tid']+_0x398492(0x368,'H5)$'),_0x3364eb='',_0x1ba4f8='Bearer\x20'+this[_0x398492(0x306,'Ej%%')][_0x398492(0x304,'Uh4u')],_0x2f3c1d=_0x18559c[_0x398492(0x258,'pI[x')](populateUrlObject,_0x542402,_0x1ba4f8,_0x3364eb);await _0x18559c[_0x398492(0x2b8,'v@^^')](httpRequest,_0x18559c[_0x398492(0x2df,'zAoi')],_0x2f3c1d);let _0x428de3=httpResult;if(!_0x428de3)return;this[_0x398492(0x363,'FY]z')]=_0x428de3[_0x398492(0x18d,'zAoi')][_0x398492(0x36c,'A2o2')],await this['video']();}catch(_0x23d2ab){console['log'](_0x23d2ab);}finally{if(_0x398492(0x1fc,'v@^^')==='cjnPR')_0x5dba5c['logAndNotify'](_0x398492(0x32a,']!a[')+this['name']+_0x398492(0x265,'7J1T')+_0x31b367[_0x398492(0x26f,'W(y&')]);else return Promise['resolve'](0x1);}}async[_0x5b3b17(0x346,'#k^F')](){const _0x473e68=_0x5b3b17,_0x555f5f={'Bynly':function(_0x411855,_0x275e4f,_0x436ebb,_0x541538){return _0x411855(_0x275e4f,_0x436ebb,_0x541538);},'dKrnq':_0x473e68(0x27c,'tuCT'),'gTlyB':function(_0x5cdf1a,_0x52de2c){return _0x5cdf1a+_0x52de2c;},'ycWet':function(_0x410996,_0x3ff849){return _0x410996*_0x3ff849;},'SgkVF':function(_0x387421,_0x3c692f){return _0x387421/_0x3c692f;}};try{let _0x10a366='https://apillkpro.cengaw.cn/api/v2/news/coin',_0x75eb36='',_0x500265=_0x473e68(0x19a,'FY]z')+this['param']['Authorization'],_0x138881=_0x555f5f['Bynly'](populateUrlObject,_0x10a366,_0x500265,_0x75eb36);await httpRequest(_0x555f5f[_0x473e68(0x2de,'tkzw')],_0x138881);let _0x35473f=httpResult;if(!_0x35473f)return;let _0x3df496=_0x555f5f['gTlyB'](Math['floor'](_0x555f5f['ycWet'](Math['random'](),0x32c8)),0xbb8);$[_0x473e68(0x1a3,'%2BY')]('账号['+this[_0x473e68(0x1ed,'1uU@')]+_0x473e68(0x1c7,'yzT]')+_0x555f5f['SgkVF'](_0x3df496,0x3e8)+_0x473e68(0x2ea,'j^6)')),this[_0x473e68(0x34f,'achh')]=_0x35473f[_0x473e68(0x1c5,'J1H%')][_0x473e68(0x26e,'#k^F')],await $[_0x473e68(0x262,'#k^F')](_0x3df496),await this['co']();}catch(_0x1aac5d){console[_0x473e68(0x25e,'R4fS')](_0x1aac5d);}finally{return Promise[_0x473e68(0x293,'tkzw')](0x1);}}async['co'](){const _0x5497c6=_0x5b3b17,_0x438b29={'ZhfHj':function(_0x5cbbe3,_0x267679,_0x1f9cfe,_0x447401){return _0x5cbbe3(_0x267679,_0x1f9cfe,_0x447401);},'FUEnM':function(_0xcd87d5,_0xf2777,_0x5c0620){return _0xcd87d5(_0xf2777,_0x5c0620);},'ijFDR':function(_0x1a38c0,_0x44b1f9){return _0x1a38c0==_0x44b1f9;}};try{let _0x3d58fc=_0x5497c6(0x1cf,'yzT]')+this['tid'],_0x31571d='',_0x1ded5e=_0x5497c6(0x1b6,'tsl)')+this[_0x5497c6(0x374,'j^6)')][_0x5497c6(0x2cd,'pI[x')],_0x14a427=_0x438b29['ZhfHj'](populateUrlObject,_0x3d58fc,_0x1ded5e,_0x31571d);await _0x438b29[_0x5497c6(0x1aa,'7J1T')](httpRequest,_0x5497c6(0x20b,'([nR'),_0x14a427);let _0xcb9ec1=httpResult;if(!_0xcb9ec1)return;_0x438b29[_0x5497c6(0x210,'66#4')](_0xcb9ec1[_0x5497c6(0x1cd,']!a[')],0x0)?$[_0x5497c6(0x35c,']!a[')](_0x5497c6(0x290,'[J@c')+this[_0x5497c6(0x2f7,'W!NX')]+']看资讯:\x20获得'+_0xcb9ec1[_0x5497c6(0x245,'CN15')][_0x5497c6(0x26d,'pI[x')]+'金币'):$['logAndNotify'](_0x5497c6(0x294,'JvlN')+this['name']+']请求过快奖励飞走了，请通知作者调整');}catch(_0x1007d4){console['log'](_0x1007d4);}finally{return Promise[_0x5497c6(0x33b,'7J1T')](0x1);}}async[_0x5b3b17(0x1e4,'Ej%%')](){const _0xcd4285=_0x5b3b17,_0x20543f={'RSHvt':function(_0x4c1a1f,_0x191ce4){return _0x4c1a1f!==_0x191ce4;},'uRfeJ':'HShJU','xkSYs':_0xcd4285(0x2a7,'pI[x'),'MafEH':function(_0x3c69f3,_0x18f911,_0x3c9354,_0x19d9d4){return _0x3c69f3(_0x18f911,_0x3c9354,_0x19d9d4);}};try{if(_0x20543f[_0xcd4285(0x2d7,'%2BY')](_0x20543f['uRfeJ'],_0x20543f[_0xcd4285(0x324,'Z7(U')])){let _0x2e4d60='https://apillkpro.cengaw.cn/api/v2/ads/action/load?class=10000&&channel=2&type=17',_0x28e010='',_0x335f19='Bearer\x20'+this['param'][_0xcd4285(0x278,'Yqsk')],_0x24594a=_0x20543f[_0xcd4285(0x351,'jsUL')](populateUrlObject,_0x2e4d60,_0x335f19,_0x28e010);await httpRequest(_0xcd4285(0x1c1,'CN15'),_0x24594a);let _0x1fe3d6=httpResult;if(!_0x1fe3d6)return;this[_0xcd4285(0x291,'R4fS')]=_0x1fe3d6[_0xcd4285(0x274,'L%&4')][_0xcd4285(0x369,'5r0y')],await this['ad']();}else _0x45101f[_0xcd4285(0x1e5,'yoIz')](_0x5611e9);}catch(_0x4c3758){console[_0xcd4285(0x18a,'([nR')](_0x4c3758);}finally{return Promise['resolve'](0x1);}}async['ad'](){const _0x2b5011=_0x5b3b17,_0x1acdea={'pyDTD':function(_0x37d6ea,_0x48ff74,_0x1df492,_0x519acb){return _0x37d6ea(_0x48ff74,_0x1df492,_0x519acb);},'UtrEj':function(_0x160dfd,_0x220e14,_0x1be25d){return _0x160dfd(_0x220e14,_0x1be25d);},'hHIQt':_0x2b5011(0x2fb,'MG&Y'),'OcmIE':function(_0x2e9931,_0x252f6a){return _0x2e9931+_0x252f6a;},'jhzPi':function(_0x4f23cb,_0x3dedaf){return _0x4f23cb*_0x3dedaf;},'bfsZw':function(_0x11c3eb,_0x5eb6b7){return _0x11c3eb===_0x5eb6b7;},'LovRC':_0x2b5011(0x1ba,'NFPx')};try{let _0x109aaa=_0x2b5011(0x313,'A2o2'),_0x294c44='',_0x36846d=_0x2b5011(0x25d,'tkzw')+this[_0x2b5011(0x267,'V1%j')]['Authorization'],_0x1abcf4=_0x1acdea[_0x2b5011(0x2e0,'([nR')](populateUrlObject,_0x109aaa,_0x36846d,_0x294c44);await _0x1acdea[_0x2b5011(0x2f4,'#k^F')](httpRequest,_0x1acdea['hHIQt'],_0x1abcf4);let _0x280a78=httpResult;if(!_0x280a78)return;let _0x3d57ab=_0x1acdea[_0x2b5011(0x24d,'J1H%')](Math[_0x2b5011(0x21a,'66#4')](_0x1acdea[_0x2b5011(0x1d1,'yaPC')](Math[_0x2b5011(0x21b,'ezx7')](),0x3a98)),0xbb8);$[_0x2b5011(0x208,'CN15')](_0x2b5011(0x2ed,'yoIz')+this[_0x2b5011(0x33f,'yaPC')]+']获取参数成功，随机等待'+_0x3d57ab/0x3e8+_0x2b5011(0x234,'R4fS')),await $[_0x2b5011(0x2cb,'66#4')](_0x3d57ab),await this[_0x2b5011(0x2fa,'Uh4u')]();}catch(_0x2cbe5d){if(_0x1acdea[_0x2b5011(0x32f,'MVNb')](_0x1acdea[_0x2b5011(0x1d9,'MVNb')],'AeHxE'))console[_0x2b5011(0x266,'kRQA')](_0x2cbe5d);else return _0x2b6363[_0x2b5011(0x292,'([nR')](0x1);}finally{return Promise[_0x2b5011(0x293,'tkzw')](0x1);}}async[_0x5b3b17(0x217,'tuCT')](){const _0x1562e9=_0x5b3b17,_0x3b9a68={'lzcXl':function(_0x45a363,_0x360677,_0x42ff00,_0x3af932){return _0x45a363(_0x360677,_0x42ff00,_0x3af932);},'wdekE':function(_0x5bc0bf,_0x524fd3,_0x53bff8){return _0x5bc0bf(_0x524fd3,_0x53bff8);},'kPVcp':_0x1562e9(0x320,'R4fS'),'iSgxC':function(_0x5440ad,_0xd584c6){return _0x5440ad==_0xd584c6;},'geQey':'CeVYy','ZZiMm':function(_0x59ee84,_0x43261c){return _0x59ee84+_0x43261c;}};try{let _0x434ac8=_0x1562e9(0x34a,'yzT]'),_0x136beb='',_0x528ea0=_0x1562e9(0x193,'A2o2')+this['param'][_0x1562e9(0x1c9,'(T]1')],_0x15de13=_0x3b9a68[_0x1562e9(0x23c,'Z7(U')](populateUrlObject,_0x434ac8,_0x528ea0,_0x136beb);await _0x3b9a68[_0x1562e9(0x332,'9)K(')](httpRequest,_0x3b9a68['kPVcp'],_0x15de13);let _0x255b61=httpResult;if(!_0x255b61)return;if(_0x3b9a68[_0x1562e9(0x263,'Ej%%')](_0x255b61[_0x1562e9(0x322,'([nR')],0x0)){if(_0x3b9a68['geQey']!==_0x1562e9(0x2ec,'[J@c')){let _0x1a89a8=_0x3b9a68[_0x1562e9(0x1b2,'RqRP')](Math[_0x1562e9(0x22f,'A2o2')](Math[_0x1562e9(0x35a,'Iu$E')]()*0x4e20),0xbb8);$[_0x1562e9(0x30d,'7J1T')](_0x1562e9(0x34b,'tkzw')+this[_0x1562e9(0x1b3,'CN15')]+']刷广告:\x20获得'+_0x255b61[_0x1562e9(0x236,'yzT]')][_0x1562e9(0x36b,'zAoi')]+_0x1562e9(0x354,'Uh4u')+_0x1a89a8/0x3e8+_0x1562e9(0x234,'R4fS')),await $[_0x1562e9(0x1a1,'Uh4u')](_0x1a89a8),await this[_0x1562e9(0x252,'MVNb')]();}else return _0x5b95b5[_0x1562e9(0x307,'yzT]')](0x1);}else $['logAndNotify'](_0x1562e9(0x303,'H5)$')+this[_0x1562e9(0x35f,'lBZN')]+']请求过快奖励飞走了，请通知作者调整');}catch(_0x296d61){console['log'](_0x296d61);}finally{return Promise[_0x1562e9(0x282,'kRQA')](0x1);}}async['bubble'](){const _0x1979cf=_0x5b3b17,_0xd72644={'KEVMJ':function(_0x1f214d,_0xa8c9d0,_0x31517b,_0x409283){return _0x1f214d(_0xa8c9d0,_0x31517b,_0x409283);},'jeiOI':function(_0xc975b8,_0x2c35be,_0x6c1956){return _0xc975b8(_0x2c35be,_0x6c1956);},'odaaj':_0x1979cf(0x350,'[J@c'),'zmVGq':function(_0x18327d,_0x4b7ae2){return _0x18327d==_0x4b7ae2;}};try{let _0x37b5b9=_0x1979cf(0x1ad,'J1H%'),_0x32c292='',_0x3f42b8=_0x1979cf(0x349,'L%&4')+this[_0x1979cf(0x229,'9)K(')][_0x1979cf(0x304,'Uh4u')],_0x2872c4=_0xd72644['KEVMJ'](populateUrlObject,_0x37b5b9,_0x3f42b8,_0x32c292);await _0xd72644[_0x1979cf(0x345,'achh')](httpRequest,_0xd72644[_0x1979cf(0x279,'pI[x')],_0x2872c4);let _0x4b06e4=httpResult;if(!_0x4b06e4)return;_0xd72644[_0x1979cf(0x211,'A1K^')](_0x4b06e4[_0x1979cf(0x2c5,'NFPx')],0x0)?$['logAndNotify'](_0x1979cf(0x19e,'MG&Y')+this['name']+']刷广告:\x20获得'+_0x4b06e4['result']['coin']+'金币'+_0x4b06e4['result']['coupon']+'提现券'):$['logAndNotify'](_0x1979cf(0x1e9,'CN15')+this[_0x1979cf(0x2d0,'(T]1')]+']请求过快奖励飞走了，请通知作者调整');}catch(_0x5a79ac){console[_0x1979cf(0x2eb,'JvlN')](_0x5a79ac);}finally{return Promise[_0x1979cf(0x247,'JvlN')](0x1);}}async[_0x5b3b17(0x27b,'W!NX')](){const _0x129eda=_0x5b3b17,_0x4b0fb4={'pWKxi':'juliang','gHXYS':'content-type','XamZU':_0x129eda(0x200,'FY]z'),'ZKHYQ':_0x129eda(0x302,'Z7(U'),'UqnGS':'uKvVf','BIUdR':_0x129eda(0x28e,'yaPC'),'YCUsk':function(_0x424afe,_0x119b6c,_0x49f3fb,_0x2a068f){return _0x424afe(_0x119b6c,_0x49f3fb,_0x2a068f);},'SDPIm':_0x129eda(0x232,'#k^F'),'vuKDC':function(_0x4daaf6,_0x1a9322){return _0x4daaf6!==_0x1a9322;},'EUjqp':_0x129eda(0x30b,'9)K('),'dlXgR':function(_0x88528b,_0x1b2999){return _0x88528b!==_0x1b2999;},'aOVlc':'WvmNn'};try{if(_0x4b0fb4[_0x129eda(0x2cc,'Ej%%')]===_0x4b0fb4[_0x129eda(0x1f1,'lBZN')])return _0x37686b['resolve'](0x1);else{let _0x23a574=_0x129eda(0x32e,'A2o2'),_0x5f026e=_0x129eda(0x2bd,'5r0y')+model+_0x129eda(0x309,'tuCT'),_0x3fc4c4=_0x129eda(0x20e,'66#4')+this[_0x129eda(0x227,'A2o2')][_0x129eda(0x2a5,'tuCT')],_0x34aab9=_0x4b0fb4[_0x129eda(0x1ec,'yoIz')](populateUrlObject,_0x23a574,_0x3fc4c4,_0x5f026e);await httpRequest(_0x4b0fb4[_0x129eda(0x35e,'9)K(')],_0x34aab9);let _0x35bca9=httpResult;if(!_0x35bca9)return;if(_0x35bca9['code']==0x0){if(_0x4b0fb4['vuKDC'](_0x129eda(0x326,'pI[x'),_0x4b0fb4[_0x129eda(0x242,'oSlJ')]))$['logAndNotify']('账号['+this[_0x129eda(0x25c,'66#4')]+']提现:\x20'+_0x35bca9[_0x129eda(0x239,'H5)$')][_0x129eda(0x26f,'W(y&')]);else{let _0x51a890=_0x3de286[_0x129eda(0x18e,'([nR')]('//','/')[_0x129eda(0x219,'yoIz')]('/')[0x1],_0x121701={'url':_0x5fc965,'headers':{'Host':_0x51a890,'Authorization':_0x2377f7,'platform':'1','accept':_0x129eda(0x2a2,'zAoi'),'oaid':'','store':_0x4b0fb4[_0x129eda(0x221,'JvlN')],'version':_0x129eda(0x281,'zAoi'),'User-Agent':_0xc576e8},'timeout':0x1388};return _0x4ffa18&&(_0x121701['body']=_0x31c983,_0x121701[_0x129eda(0x249,'[J@c')][_0x4b0fb4['gHXYS']]=_0x4b0fb4[_0x129eda(0x357,'V1%j')],_0x121701['headers'][_0x4b0fb4[_0x129eda(0x1a6,'tsl)')]]=_0x121701['body']?_0x121701[_0x129eda(0x299,'R4fS')][_0x129eda(0x18c,'L%&4')]:0x0),_0x121701;}}else $['logAndNotify'](_0x129eda(0x32c,'FY]z')+this[_0x129eda(0x352,'tuCT')]+_0x129eda(0x218,'A1K^')+_0x35bca9[_0x129eda(0x277,'R4fS')]);}}catch(_0x18b869){_0x4b0fb4[_0x129eda(0x36e,'achh')](_0x129eda(0x1df,'5r0y'),_0x4b0fb4[_0x129eda(0x358,'J1H%')])?console['log'](_0x18b869):_0x55613f['log'](_0x49c550);}finally{return Promise['resolve'](0x1);}}}!(async()=>{const _0x4d13ad=_0x5b3b17,_0x277b94={'MWSPz':_0x4d13ad(0x1b0,'J1H%'),'QClEJ':_0x4d13ad(0x29b,'tuCT'),'BBBDU':function(_0x21b5dd,_0x3d0f42){return _0x21b5dd!==_0x3d0f42;},'fofpB':_0x4d13ad(0x367,'7J1T'),'iKkgi':function(_0x3d9b29){return _0x3d9b29();},'KySXY':function(_0x3cc9d4,_0x1ce23e){return _0x3cc9d4>_0x1ce23e;},'WftZN':'\x0a--------------\x20账号检测\x20--------------','igslF':'\x0a--------------\x20每日任务\x20--------------','tCanb':_0x4d13ad(0x1a4,'A2o2'),'VEBqX':function(_0x1c0457,_0xcfdbc8){return _0x1c0457>_0xcfdbc8;},'zlkUK':_0x4d13ad(0x373,'H5)$'),'KVZSP':function(_0x38879a,_0x346034){return _0x38879a===_0x346034;},'eZdRD':_0x4d13ad(0x2b4,']!a['),'PfKqx':_0x4d13ad(0x18f,'V1%j'),'YWqny':'\x0a--------------\x20每日拔毛\x20--------------','TaJkO':function(_0xfe74c4,_0x2d2745){return _0xfe74c4==_0x2d2745;},'Czlui':_0x4d13ad(0x300,'yoIz'),'cQoQD':_0x4d13ad(0x2ab,'V1%j')};if(_0x277b94['BBBDU'](typeof $request,_0x277b94[_0x4d13ad(0x35d,'#k^F')])){}else{if(!await checkEnv())return;await _0x277b94['iKkgi'](sc);let _0x5f4c16=[],_0xf24037=userList['filter'](_0x3be96b=>_0x3be96b[_0x4d13ad(0x240,'pI[x')]);if(_0x277b94[_0x4d13ad(0x2f2,'(T]1')](_0xf24037['length'],0x0)){$[_0x4d13ad(0x2bb,'H5)$')](_0x277b94[_0x4d13ad(0x243,'9)K(')]),_0x5f4c16=[];for(let _0x5e3695 of _0xf24037){_0x5f4c16[_0x4d13ad(0x27e,'yoIz')](_0x5e3695['my']()),await $['wait'](0xbb8);}await Promise[_0x4d13ad(0x30a,'!emd')](_0x5f4c16),_0xf24037=_0xf24037[_0x4d13ad(0x203,'5r0y')](_0x1b54b7=>_0x1b54b7[_0x4d13ad(0x19f,'66#4')]);if(_0x277b94[_0x4d13ad(0x1e6,'V1%j')](_0xf24037[_0x4d13ad(0x26a,'kRQA')],0x0)){$[_0x4d13ad(0x2fe,'zAoi')](_0x277b94[_0x4d13ad(0x2f5,'L%&4')]),_0x5f4c16=[];for(let _0x566aa7 of _0xf24037['filter'](_0x37bec3=>_0x37bec3[_0x4d13ad(0x347,'#k^F')])){_0x277b94[_0x4d13ad(0x28f,'oSlJ')]!==_0x4d13ad(0x22b,'66#4')?_0x11e93e[_0x4d13ad(0x2aa,'NFPx')](_0xd9bfd5):_0x5f4c16['push'](_0x566aa7[_0x4d13ad(0x330,'Yqsk')]());}await Promise[_0x4d13ad(0x1f9,'NFPx')](_0x5f4c16);if(_0x277b94[_0x4d13ad(0x222,'V1%j')](s,0x0)){if(_0x277b94[_0x4d13ad(0x2cf,'MG&Y')](_0xf24037[_0x4d13ad(0x237,'zAoi')],0x0)){if(_0x277b94[_0x4d13ad(0x375,'Uh4u')](_0x277b94[_0x4d13ad(0x22a,'#k^F')],_0x277b94[_0x4d13ad(0x271,'jsUL')]))_0x496d11[_0x4d13ad(0x2bb,'H5)$')]('账号['+this[_0x4d13ad(0x205,'#k^F')]+_0x4d13ad(0x23f,'W!NX'));else{$['logAndNotify']('\x0a--------------\x20首页广告\x20--------------'),_0x5f4c16=[];for(let _0x4e0dfa of _0xf24037[_0x4d13ad(0x20f,'(T]1')](_0x1b1876=>_0x1b1876[_0x4d13ad(0x24a,'R4fS')])){_0x277b94[_0x4d13ad(0x34c,'CN15')](_0x277b94[_0x4d13ad(0x246,'7J1T')],_0x4d13ad(0x341,'1uU@'))?_0x5f4c16['push'](_0x4e0dfa[_0x4d13ad(0x22c,'yaPC')]()):(this[_0x4d13ad(0x2a4,'H5)$')]=_0x295754['str2json'](_0x588799),this['ckValid']=!![]);}await Promise[_0x4d13ad(0x30f,'tsl)')](_0x5f4c16);}}}else'tlvXb'!==_0x277b94[_0x4d13ad(0x33d,'CN15')]?$[_0x4d13ad(0x208,'CN15')](_0x4d13ad(0x2c8,'NFPx')):_0x1b1b93[_0x4d13ad(0x18b,'yoIz')](_0x4d13ad(0x1d2,'tsl)'));$[_0x4d13ad(0x34e,'66#4')](_0x277b94[_0x4d13ad(0x27d,'zAoi')]),_0x5f4c16=[];for(let _0xd8cb1c of _0xf24037[_0x4d13ad(0x285,'A1K^')](_0xc756d2=>_0xc756d2[_0x4d13ad(0x301,'MG&Y')])){_0x277b94[_0x4d13ad(0x2bc,'!emd')](_0x4d13ad(0x1be,'RqRP'),'CmiZL')?_0x277b94[_0x4d13ad(0x311,'W(y&')](nowHour,withdrawTime)?'KiOxw'===_0x277b94['Czlui']?_0x5f4c16[_0x4d13ad(0x31e,'v@^^')](_0xd8cb1c[_0x4d13ad(0x260,'Uh4u')]()):_0x3e6d6a=_0x116d14[_0x4d13ad(0x370,'#k^F')](_0x55b7b5[_0x4d13ad(0x335,'#k^F')]):_0x277b94[_0x4d13ad(0x184,'Uh4u')]!==_0x4d13ad(0x2f6,'L%&4')?$[_0x4d13ad(0x30d,'7J1T')]('非提现时间，现在的设置为每天'+withdrawTime+_0x4d13ad(0x22e,'9)K(')):_0x26e59f[_0x4d13ad(0x19c,'7J1T')](_0x552f13):(_0x3d15a6['body']=_0x322ca2,_0x38fe0d[_0x4d13ad(0x1f2,'tuCT')][_0x4d13ad(0x2a8,'7J1T')]=_0x277b94[_0x4d13ad(0x1a7,'tkzw')],_0x1f16df[_0x4d13ad(0x268,'9)K(')][_0x277b94[_0x4d13ad(0x334,'66#4')]]=_0x335752['body']?_0x685979[_0x4d13ad(0x2f1,'!emd')][_0x4d13ad(0x1dc,'yzT]')]:0x0);}await Promise[_0x4d13ad(0x1f9,'NFPx')](_0x5f4c16);}}await Promise['all'](_0x5f4c16),await $[_0x4d13ad(0x19b,'W!NX')]();}})()[_0x5b3b17(0x21c,'NFPx')](_0xfd1c9a=>console[_0x5b3b17(0x2d4,'tsl)')](_0xfd1c9a))[_0x5b3b17(0x31c,'1uU@')](()=>$[_0x5b3b17(0x286,'R4fS')]());async function sc(){const _0x56fe7e=_0x5b3b17,_0x3669a7={'mIYKy':function(_0x41575e,_0x1e8656){return _0x41575e!==_0x1e8656;},'lWkrq':function(_0x23a1c2,_0x4ea30b,_0x57fb9a){return _0x23a1c2(_0x4ea30b,_0x57fb9a);},'WXLPb':_0x56fe7e(0x2ca,'tsl)'),'jLjVj':_0x56fe7e(0x226,'Uh4u')};try{if(_0x3669a7[_0x56fe7e(0x24b,'([nR')]('efQTb',_0x56fe7e(0x327,'pI[x'))){let _0x54a87f=_0x56fe7e(0x29f,'yaPC'),_0xab512e='',_0x5dd0ea=_0x3669a7[_0x56fe7e(0x26b,'W!NX')](populateUrlObject,_0x54a87f,_0xab512e);await httpRequest(_0x3669a7[_0x56fe7e(0x1b4,'J1H%')],_0x5dd0ea);let _0x572c47=httpResult;if(!_0x572c47)return;$[_0x56fe7e(0x310,'(T]1')]('\x0a'+_0x572c47[_0x56fe7e(0x295,'J1H%')]+'\x20\x20\x0a————《'+_0x572c47[_0x56fe7e(0x2f9,'Ej%%')]+'》'+_0x572c47[_0x56fe7e(0x314,'Yqsk')]);}else _0x15c486['log'](_0x5e920a);}catch(_0x42d5e4){}finally{if(_0x56fe7e(0x26c,'9)K(')!==_0x3669a7['jLjVj'])return Promise['resolve'](0x1);else _0x18a050[_0x56fe7e(0x2ee,'Iu$E')](_0x56fe7e(0x364,'lBZN')+_0x23f1a9+_0x56fe7e(0x2b7,'tsl)'));}}async function checkEnv(){const _0x807192=_0x5b3b17,_0x281bef={'xYkRi':function(_0x1668e1,_0x90de65){return _0x1668e1!==_0x90de65;},'PzLZY':_0x807192(0x1d6,'1uU@'),'dYvPi':function(_0x1710e4,_0x5d8fd7){return _0x1710e4>_0x5d8fd7;},'daAeY':function(_0x3f36b0,_0x54dc3c){return _0x3f36b0!==_0x54dc3c;},'MfuhQ':_0x807192(0x33a,'W!NX'),'qEMan':_0x807192(0x1d8,']!a['),'CqLBx':_0x807192(0x241,'W(y&')};if(userCookie){let _0x44af27=envSplitor[0x0];for(let _0x4bfddb of envSplitor){if(_0x281bef[_0x807192(0x2b0,'[J@c')](_0x807192(0x1fe,'tuCT'),_0x281bef['PzLZY'])){if(_0x281bef[_0x807192(0x225,'Z7(U')](userCookie['indexOf'](_0x4bfddb),-0x1)){_0x44af27=_0x4bfddb;break;}}else this[_0x807192(0x315,'Ej%%')]=![],_0x33f5f0['logAndNotify'](_0x807192(0x1e9,'CN15')+this[_0x807192(0x2b3,'1uU@')]+_0x807192(0x333,'W!NX'));}for(let _0x33b009 of userCookie[_0x807192(0x1c2,'L%&4')](_0x44af27)){if(_0x281bef['daAeY'](_0x807192(0x235,'J1H%'),_0x281bef[_0x807192(0x238,'j^6)')]))return _0x26a5ea['resolve'](0x1);else{if(_0x33b009)userList[_0x807192(0x1b7,'jsUL')](new UserInfo(_0x33b009));}}userCount=userList['length'];}else{if(_0x281bef['qEMan']===_0x807192(0x1bc,'W(y&'))return _0x173ebd[_0x807192(0x307,'yzT]')](0x1);else{console['log'](_0x281bef[_0x807192(0x305,'7J1T')]);return;}}return console[_0x807192(0x224,'W(y&')](_0x807192(0x2e9,'MVNb')+userCount+'个账号'),!![];}function populateUrlObject(_0x5ee12f,_0x28cb90,_0x1abb19=''){const _0x45827d=_0x5b3b17,_0x2ba630={'WQxtJ':_0x45827d(0x1e2,'CN15'),'gnsKI':_0x45827d(0x1e8,'v@^^'),'eNcFO':_0x45827d(0x371,'([nR'),'CPRUg':_0x45827d(0x1cc,'H5)$')};let _0x1dbb12=_0x5ee12f['replace']('//','/')[_0x45827d(0x2c3,'v@^^')]('/')[0x1],_0x56f1eb={'url':_0x5ee12f,'headers':{'Host':_0x1dbb12,'Authorization':_0x28cb90,'platform':'1','accept':_0x2ba630[_0x45827d(0x1dd,'Iu$E')],'oaid':'','store':_0x2ba630['gnsKI'],'version':_0x45827d(0x281,'zAoi'),'User-Agent':defaultUA},'timeout':0x1388};return _0x1abb19&&(_0x56f1eb['body']=_0x1abb19,_0x56f1eb[_0x45827d(0x244,'CN15')][_0x2ba630[_0x45827d(0x25f,'#k^F')]]=_0x2ba630[_0x45827d(0x2dd,'[J@c')],_0x56f1eb['headers'][_0x45827d(0x1ae,'R4fS')]=_0x56f1eb['body']?_0x56f1eb[_0x45827d(0x339,'%2BY')]['length']:0x0),_0x56f1eb;}async function httpRequest(_0x1f8e04,_0x1db2e4){const _0x46c035=_0x5b3b17,_0x27ccea={'VabQB':function(_0x3dca67,_0x563fc3){return _0x3dca67===_0x563fc3;},'ucDnv':_0x46c035(0x355,'7J1T'),'ivHKV':function(_0x16c2ab,_0x91eae8){return _0x16c2ab!==_0x91eae8;},'ZLALY':_0x46c035(0x1ef,'achh'),'yLbzu':function(_0x20ff90,_0x32fcc8){return _0x20ff90==_0x32fcc8;},'zjJxS':_0x46c035(0x24f,'A2o2'),'wngnW':_0x46c035(0x1e3,'Ej%%'),'GeVQe':function(_0x43986c,_0x35562b){return _0x43986c!==_0x35562b;},'FXFyc':'vYSvy','aMwDj':function(_0x3b1a0e){return _0x3b1a0e();}};return httpResult=null,httpReq=null,httpResp=null,new Promise(_0xa11908=>{$['send'](_0x1f8e04,_0x1db2e4,async(_0x5b86f6,_0x5bcca4,_0x2aca82)=>{const _0xb1364d=_0xd1bf;if(_0x27ccea[_0xb1364d(0x1ca,'[J@c')](_0x27ccea['ucDnv'],_0xb1364d(0x2ef,'W(y&')))try{httpReq=_0x5bcca4,httpResp=_0x2aca82;if(_0x5b86f6)_0x27ccea[_0xb1364d(0x288,'jsUL')](_0x27ccea['ZLALY'],_0xb1364d(0x2a9,'j^6)'))?_0x10fff8[_0xb1364d(0x1b8,'tuCT')](_0x755d60):httpResult=JSON[_0xb1364d(0x1f7,'W!NX')](_0x5bcca4[_0xb1364d(0x2bf,'[J@c')]);else{if(_0x2aca82['body']){if(_0x27ccea[_0xb1364d(0x2ae,'MVNb')](typeof _0x2aca82[_0xb1364d(0x23d,']C1I')],_0x27ccea[_0xb1364d(0x189,'1uU@')]))httpResult=_0x2aca82['body'];else try{httpResult=JSON[_0xb1364d(0x2e1,'([nR')](_0x2aca82[_0xb1364d(0x2db,'Yqsk')]);}catch(_0x5840bf){httpResult=_0x2aca82['body'];}}}}catch(_0x3f0ee3){_0x27ccea[_0xb1364d(0x1a5,']C1I')]!==_0xb1364d(0x1e3,'Ej%%')?_0x5bb350[_0xb1364d(0x21f,'!emd')](_0x281da2[_0xb1364d(0x257,'Iu$E')]()):console['log'](_0x3f0ee3);}finally{if(_0x27ccea[_0xb1364d(0x2f0,'zAoi')](_0xb1364d(0x28d,'j^6)'),_0x27ccea['FXFyc']))try{_0x516052=_0x19c697['parse'](_0x555852[_0xb1364d(0x2f1,'!emd')]);}catch(_0x568cb9){_0x2b53fc=_0x4d3cde[_0xb1364d(0x22d,'CN15')];}else _0x27ccea['aMwDj'](_0xa11908);}else _0x2971ba[_0xb1364d(0x34e,'66#4')](_0xb1364d(0x2e5,'%2BY')+this[_0xb1364d(0x33f,'yaPC')]+_0xb1364d(0x283,'1uU@'));});});}var version_ = 'jsjiami.com.v7';
////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}