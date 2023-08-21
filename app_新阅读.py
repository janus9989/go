import requests
import time
import random
import os
#环境变量XSSYDCK  抓http://1692431521.3z2rpa.top/域名，ck里的两个值用#连起来（只要值），最后的for循环可以自己改次数，默认30次
CK = os.getenv('XSSYDCK')
ysm_uid = CK.split('#')[0]
ejectCode = CK.split('#')[1]
cookies = {
        "ysm_uid": ysm_uid,
        "ejectCode": ejectCode
    }

headers = {
    "Host": "1692400763.3z2rpa.top",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5223 MMWEBSDK/20230701 MMWEBID/4023 MicroMessenger/8.0.40.2420(0x28002851) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "http://1692400763.3z2rpa.top",
    "Referer": "http://1692400763.3z2rpa.top/?cate=0",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
}





#更新uk
def UK():
    data = {
        "unionid": ysm_uid
    }
    res = requests.post("http://1692400763.3z2rpa.top/yunonline/v1/wtmpdomain", headers=headers, cookies=cookies, data=data).json()
    domain = res['data']['domain']
    url_params = domain.split('?')[-1]
    global uk
    uk = url_params.split('&')[0].split('=')[-1]
    global UKT
    UKT = url_params.split('&')[1].split('=')[-1]
    #print(UKT)
    print(uk)
    
def JS():
    header = {
    'Host': 'c1692418996-1256911967.cos.ap-beijing.myqcloud.com',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5223 MMWEBSDK/20230701 MMWEBID/4023 MicroMessenger/8.0.40.2420(0x28002851) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'X-Requested-With': 'com.tencent.mm',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    # 'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }

    param = {
    'uk': uk,
    't': UKT,
    }
    requests.get('https://c1692418996-1256911967.cos.ap-beijing.myqcloud.com/yuedu.html', params=param, headers=header)

    DO()
    time.sleep(random.randint(5, 6))
    t2 = int(time.time())
    requests.get('https://c1692418996-1256911967.cos.ap-beijing.myqcloud.com/yuedu.html', params=param, headers=header)
    global t3
    t3 = t2 - t1




#获取金币
def GOLD():
    header = {
        "Host": "nsr.zsf2023e458.cloud",
        "Connection": "keep-alive",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "User-Agent": "Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5223 MMWEBSDK/20230701 MMWEBID/4023 MicroMessenger/8.0.40.2420(0x28002851) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
        "Origin": "https://c1692400388-1256911967.cos.ap-beijing.myqcloud.com",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
    timestamp = int(time.time())*1000
    param = {
        "uk": uk,
        "time": t3,
        "timestamp": timestamp
    }
    res = requests.get("https://nsr.zsf2023e458.cloud/yunonline/v1/get_read_gold", headers=header, params=param,timeout = 3500).json()
    if 'errcode' in res and res['errcode'] == 0:
        msg = res['msg']
        gold = res['data']['gold']
        dyr = res['data']['day_read']
        remain_read = res['data']['remain_read']
        print(f'【状态】:{msg} [获币]：{gold} [已读]：{dyr} [剩余可读]：{remain_read}')
    else:
        print('寄，不过打个脚先')
        print(res['msg'])

def DO():
    header = {
    "Host": "nsr.zsf2023e458.cloud",
    "Connection": "keep-alive",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5223 MMWEBSDK/20230701 MMWEBID/4023 MicroMessenger/8.0.40.2420(0x28002851) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
    "Origin": "https://c1692418996-1256911967.cos.ap-beijing.myqcloud.com",
    "X-Requested-With": "com.tencent.mm",
    "Sec-Fetch-Site": "cross-site",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
    param = {
    "uk": uk
    }
    global t1
    t1 = int(time.time())
    res = requests.get("https://nsr.zsf2023e458.cloud/yunonline/v1/do_read", headers=header, params=param).json()
    key = res['data']['link'].split('key=')[1].split('&')[0]
    #print(key)
    #print(key1)
    header0 = {
    "Host": "1692419377.3z2rpa.top",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; JEF-AN00 Build/HUAWEIJEF-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5223 MMWEBSDK/20230701 MMWEBID/4023 MicroMessenger/8.0.40.2420(0x28002851) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "X-Requested-With": "com.tencent.mm",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
    }
 
    url = "http://1692419377.3z2rpa.top/yunonline/v1/jump"
    unionid = ysm_uid + '?/'
    param0 = {
    "key": key,
    "state": "1",
    "unionid": unionid
    }
    response = requests.get(url, headers=header0, cookies=cookies, params=param0)


if __name__ == "__main__":
    UK()
    for i in range(30):
        JS()
        GOLD()

