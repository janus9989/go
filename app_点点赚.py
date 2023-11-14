"""
入口；http://70988702075.read.shuxiangby.cn/index/mob/index.html?pid=2315
抓包 code,uid,PHPSESSID 
变量名dddtk，格式 code#uid#PHPSESSID，多账号用@
阅读第一篇自己阅读过检测，脚本没测试。。自测

"""
import requests
import json
import os
import time
accounts = os.getenv('dddtk')
accounts_list = os.environ.get('dddtk').split('@')
num_of_accounts = len(accounts_list)
print(f"获取到 {num_of_accounts} 个账号")
for i, account in enumerate(accounts_list, start=1):
    values = account.split('#')
    code, uid, cookie = values[0], values[1], values[2]
    print(f"\n=======开始执行账号{i}=======")
    for j in range(29):
        headers = {
            'Host': '4226542303.baifo.sbs',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 14; 2211133C Build/UKQ1.230705.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20230805 MMWEBID/1312 MicroMessenger/8.0.42.2460(0x28002A58) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Length': '23',
            'PHPSESSID': cookie,
        };
        data = {'code': code,'uid': uid};
        url = 'http://4226542303.baifo.sbs/index/index/get_article.html'
        response = requests.post(url, headers=headers, data=data).json()
        rid = response['data']['info']['rid']
        print(rid)
        time.sleep(1)
        url1 = 'http://4226542303.baifo.sbs/index/index/auth_record.html'
        data1 = {'rid': rid,'time_is_gou': '1'};
        response1 = requests.post(url1, headers=headers, data=data1).json()
        print(response1)
        txt_value = response1.get('txt', '')
        parts = txt_value.split('/')
        result = parts[0]
        print(f"第{result}篇阅读成功")
        if response1['code'] != 1:
            break;
        time.sleep(6)


