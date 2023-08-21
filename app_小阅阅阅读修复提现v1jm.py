'''
活动入口,微信打开：https://wda.fuhaicong.top:10257/yunonline/v1/auth/693f35a37d8da489478562a1feab678f?codeurl=wda.fuhaicong.top:10257&codeuserid=2&time=1692431129
打开活动入口，抓包的任意接口cookies中的ysm_uid参数,填到脚本最下方的,脚本最下方的，脚本最下方的mycklist中，把xxxx替换成你的ysm_uid参数
填写格式
单账户mycklist=[{'ysm_uid': 'xxxx'}]
多账户mycklist=[{'ysm_uid': 'xxxx'},{'ysm_uid': 'xxxx'},{'ysm_uid': 'xxxx'},]
定时运行每两小时一次 0 0 1-23/2 * * *
达到标准，自动提现
'''
""#line:9
import time #line:11
import requests #line:13
import random #line:14
import re #line:15
from urllib .parse import urlparse ,parse_qs #line:16
def ts ():#line:17
    return str (int (time .time ()))+'000'#line:18
class HHYD ():#line:19
    def __init__ (O0000O0O00OO0OO00 ,OO0OO0000O0OO0O00 ):#line:20
        O0000O0O00OO0OO00 .ysm_uid =OO0OO0000O0OO0O00 ["ysm_uid"]#line:21
        O0000O0O00OO0OO00 .txbz =OO0OO0000O0OO0O00 ["txbz"]#line:22
        O0000O0O00OO0OO00 .headers ={'Host':'1692416143.3z2rpa.top','Connection':'keep-alive','Accept':'application/json, text/javascript, */*; q=0.01','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090621) XWEB/8351 Flue','X-Requested-With':'XMLHttpRequest','Referer':'http://1692416143.3z2rpa.top/','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh','Content-Type':'application/x-www-form-urlencoded; charset=UTF-8','Cookie':f'ysm_uid={O0000O0O00OO0OO00.ysm_uid};',}#line:34
        O0000O0O00OO0OO00 .sec =requests .session ()#line:35
        O0000O0O00OO0OO00 .sec .headers =O0000O0O00OO0OO00 .headers #line:36
    def init (OOO0O0000O0OO00O0 ):#line:37
        try :#line:38
            OO0O0OO00O0O0OO0O =OOO0O0000O0OO00O0 .sec .get ('http://1692416143.3z2rpa.top/')#line:39
            OOOO0OOO000OOOOO0 =OO0O0OO00O0O0OO0O .text #line:40
            O0OO0O00OO0OOO000 =re .sub ('\s','',OOOO0OOO000OOOOO0 )#line:41
            OOO00O0OO00O00000 =re .findall ('\)\|\|"(.*?)";',O0OO0O00OO0OOO000 )#line:42
            if OOO00O0OO00O00000 ==[]:#line:43
                print ('初始化失败,账号异常')#line:44
                return False #line:45
            else :#line:46
                OOO0O0000O0OO00O0 .signid =OOO00O0OO00O00000 [0 ]#line:47
            return True #line:48
        except :#line:49
            print ('初始化失败,请检查你的ck')#line:50
            return False #line:51
    def getmoney (O0O0OO00OO0OO0O0O ):#line:52
        try :#line:53
            OO00O0O0OOOO000OO =O0O0OO00OO0OO0O0O .sec .get (f'http://1692429080.3z2rpa.top/yunonline/v1/exchange?unionid={O0O0OO00OO0OO0O0O.ysm_uid}&request_id={O0O0OO00OO0OO0O0O.signid}&qrcode_number=&addtime=')#line:54
            O0OOOOO000OO00OO0 =OO00O0O0OOOO000OO .text #line:55
            OOO00000O0OO00O0O =re .sub ('\s','',O0OOOOO000OO00OO0 )#line:56
            O0O000OOO0O000OO0 =re .findall ('varmoney=(.*?);',OOO00000O0OO00O0O )#line:57
            if O0O000OOO0O000OO0 ==[]:#line:58
                print ('提现失败,账号异常')#line:59
                return False #line:60
            else :#line:61
                return int (float (O0O000OOO0O000OO0 [0 ])*1000 )#line:62
        except :#line:63
            print ('提现失败,请检查你的ck')#line:64
            return False #line:65
    def user_info (OOOOOO0OOOOO0OOOO ):#line:66
        OOOOO0000000000O0 =f'http://1692416143.3z2rpa.top/yunonline/v1/sign_info?time={ts()}000&unionid={OOOOOO0OOOOO0OOOO.ysm_uid}'#line:67
        O0O00O0OO0OO0OOO0 =''#line:68
        try :#line:69
            O0O00O0OO0OO0OOO0 =OOOOOO0OOOOO0OOOO .sec .get (OOOOO0000000000O0 )#line:70
            O0O0OO00OO00OOOOO =O0O00O0OO0OO0OOO0 .json ()#line:71
            if O0O0OO00OO00OOOOO .get ('errcode')==0 :#line:72
                print (O0O00O0OO0OO0OOO0 .json ())#line:73
                return True #line:74
            else :#line:75
                print (f'获取用户信息失败，账号异常')#line:76
                return False #line:77
        except :#line:78
            print (O0O00O0OO0OO0OOO0 .text )#line:79
            print (f'获取用户信息失败,gfsessionid无效，请检测gfsessionid是否正确')#line:80
            return False #line:81
    def hasWechat (O0O0O0O0000OOOOOO ):#line:82
        OOOOO0OOO000OOO00 =''#line:83
        try :#line:84
            OOO0OOO000000000O =f'http://1692416143.3z2rpa.top/yunonline/v1/hasWechat?unionid={O0O0O0O0000OOOOOO.ysm_uid}'#line:85
            OOOOO0OOO000OOO00 =O0O0O0O0000OOOOOO .sec .get (OOO0OOO000000000O )#line:86
            print (OOOOO0OOO000OOO00 .json ())#line:87
        except :#line:88
            print (OOOOO0OOO000OOO00 .text )#line:89
            return False #line:90
    def gold (O0O0O0O00O0O00000 ):#line:91
        O00OOO000O0O0O0OO =''#line:92
        try :#line:93
            OO0OO00OO00OOOOO0 =f'http://1692416143.3z2rpa.top/yunonline/v1/gold?unionid={O0O0O0O00O0O00000.ysm_uid}&time={ts()}000'#line:94
            O00OOO000O0O0O0OO =O0O0O0O00O0O00000 .sec .get (OO0OO00OO00OOOOO0 )#line:95
            print (O00OOO000O0O0O0OO .json ())#line:96
            OOOO0O0O0OOO00O0O =O00OOO000O0O0O0OO .json ()#line:97
            O0O0O0O00O0O00000 .remain =OOOO0O0O0OOO00O0O .get ("data").get ("last_gold")#line:98
            print (f'今日已经阅读了{OOOO0O0O0OOO00O0O.get("data").get("day_read")}篇文章,剩余{OOOO0O0O0OOO00O0O.get("data").get("remain_read")}未阅读，今日获取金币{OOOO0O0O0OOO00O0O.get("data").get("day_gold")}，剩余{O0O0O0O00O0O00000.remain}')#line:99
        except :#line:100
            print (O00OOO000O0O0O0OO .text )#line:101
            return False #line:102
    def getKey (OO00O0OO00OO0OOO0 ):#line:103
        OO0O00O000OOOO00O ='http://1692416143.3z2rpa.top/yunonline/v1/wtmpdomain'#line:104
        OO0O0OOO0O0OO000O =f'unionid={OO00O0OO00OO0OOO0.ysm_uid}'#line:105
        O00000O00000000O0 =requests .post (OO0O00O000OOOO00O ,headers =OO00O0OO00OO0OOO0 .headers ,data =OO0O0OOO0O0OO000O )#line:106
        print (O00000O00000000O0 .text )#line:107
        O000O0OOO0OO000OO =O00000O00000000O0 .json ()#line:108
        OO00OOOO00000OOO0 =O000O0OOO0OO000OO .get ('data').get ('domain')#line:109
        O0OOO0OOOOO00O0O0 =parse_qs (urlparse (OO00OOOO00000OOO0 ).query )#line:110
        O0OO0O0OOO00OO00O =urlparse (OO00OOOO00000OOO0 ).netloc #line:111
        O0OO00O0O0O000OO0 =O0OOO0OOOOO00O0O0 .get ('uk')[0 ]#line:112
        print ('get key is ',O0OO00O0O0O000OO0 )#line:113
        OO00O0O0O0O00O00O ={'Host':'nsr.zsf2023e458.cloud','Connection':'keep-alive','Accept':'application/json, text/javascript, */*; q=0.01','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090621) XWEB/8351 Flue','Origin':f'https://{O0OO0O0OOO00OO00O}','Sec-Fetch-Site':'cross-site','Sec-Fetch-Mode':'cors','Sec-Fetch-Dest':'empty','Accept-Encoding':'gzip, deflate, br','Accept-Language':'zh-CN,zh',}#line:125
        return O0OO00O0O0O000OO0 ,OO00O0O0O0O00O00O #line:126
    def read (OOO0OOO0O0OOO0O0O ):#line:127
        OO0OO0OOOOOO0OO00 =OOO0OOO0O0OOO0O0O .getKey ()#line:128
        time .sleep (3 )#line:129
        OOO0OOO0O0OOO0O0O .params ={'uk':OO0OO0OOOOOO0OO00 [0 ]}#line:130
        while True :#line:131
            OO0OOOO00OO00O0OO =f'https://nsr.zsf2023e458.cloud/yunonline/v1/do_read'#line:132
            O0OOOOO0OOO0O0OO0 =requests .get (OO0OOOO00OO00O0OO ,headers =OO0OO0OOOOOO0OO00 [1 ],params =OOO0OOO0O0OOO0O0O .params )#line:133
            print ('-'*50 )#line:134
            print (O0OOOOO0OOO0O0OO0 .json ())#line:135
            O00O0O0O0OO00OO00 =O0OOOOO0OOO0O0OO0 .json ()#line:136
            if O00O0O0O0OO00OO00 .get ('errcode')==0 :#line:137
                O00OO0O0O0O000OOO =O00O0O0O0OO00OO00 .get ('data').get ('link')#line:138
                OOO0OOO0O0OOO0O0O .jump (O00OO0O0O0O000OOO )#line:139
                O0OO00OO00OO000O0 =random .randint (7 ,15 )#line:140
                print (f'本次模拟读{O0OO00OO00OO000O0}秒')#line:141
                time .sleep (O0OO00OO00OO000O0 )#line:142
                OO0OO00OOOO0O0OOO =f'https://nsr.zsf2023e458.cloud/yunonline/v1/get_read_gold?uk={OO0OO0OOOOOO0OO00[0]}&time={O0OO00OO00OO000O0}&timestamp={ts()}'#line:143
                O0O0O0OO0OO00O0O0 =requests .get (OO0OO00OOOO0O0OOO ,headers =OO0OO0OOOOOO0OO00 [1 ])#line:144
                print (O0O0O0OO0OO00O0O0 .text )#line:145
            elif O00O0O0O0OO00OO00 .get ('errcode')==407 :#line:146
                print ('阅读正常结束')#line:147
                return True #line:148
            else :#line:149
                print ('未知情况，结束阅读')#line:150
                return False #line:151
    def jump (OOO0OO0O0O0OO000O ,OOO0O000OO00O0O0O ):#line:152
        print ('开始本次阅读')#line:153
        OO0O0OOOOO00OO00O =urlparse (OOO0O000OO00O0O0O ).netloc #line:154
        O0OOOOOO00OOO0OOO ={'Host':OO0O0OOOOO00OO00O ,'Connection':'keep-alive','Upgrade-Insecure-Requests':'1','User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x63090621) XWEB/8351 Flue','Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh','Cookie':f'ysm_uid={OOO0OO0O0O0OO000O.ysm_uid}',}#line:164
        O000OO0OO000OO0O0 =requests .get (OOO0O000OO00O0O0O ,headers =O0OOOOOO00OOO0OOO ,allow_redirects =False )#line:165
        print (O000OO0OO000OO0O0 .status_code )#line:166
    def withdraw (O0OO00O00OO0O000O ):#line:167
        if int (O0OO00O00OO0O000O .remain )<O0OO00O00OO0O000O .txbz :#line:168
            print ('没有达到提前标准')#line:169
            return False #line:170
        O0OOOO0000O0O0OO0 =O0OO00O00OO0O000O .getmoney ()#line:171
        print ('本次提现金币',O0OOOO0000O0O0OO0 )#line:172
        if O0OOOO0000O0O0OO0 :#line:173
            OOO0000O0000OOOOO ='http://1692429080.3z2rpa.top/yunonline/v1/user_gold'#line:174
            O00O00O0O0OO000O0 =f'unionid={O0OO00O00OO0O000O.ysm_uid}&request_id={O0OO00O00OO0O000O.signid}&gold={O0OOOO0000O0O0OO0}'#line:175
            OOO00OO00O000OO00 =O0OO00O00OO0O000O .sec .post (OOO0000O0000OOOOO ,data =O00O00O0O0OO000O0 )#line:176
            print (OOO00OO00O000OO00 .json ())#line:177
            OO000OO00OOO00O0O =f'http://1692422733.3z2rpa.top/yunonline/v1/withdraw'#line:178
            O00O0OOO000O0OOO0 =f'unionid={O0OO00O00OO0O000O.ysm_uid}&signid={O0OO00O00OO0O000O.signid}&ua=0&ptype=0&paccount=&pname='#line:179
            OOO00OO00O000OO00 =O0OO00O00OO0O000O .sec .post (OO000OO00OOO00O0O ,headers =O0OO00O00OO0O000O .headers ,data =O00O0OOO000O0OOO0 )#line:180
            print ('提现结果',OOO00OO00O000OO00 .json ())#line:181
    def run (O0OOO0OOOO00OOO00 ):#line:182
        if O0OOO0OOOO00OOO00 .init ():#line:183
            O0OOO0OOOO00OOO00 .user_info ()#line:184
            O0OOO0OOOO00OOO00 .hasWechat ()#line:185
            O0OOO0OOOO00OOO00 .gold ()#line:186
            time .sleep (3 )#line:187
            O0OOO0OOOO00OOO00 .read ()#line:188
            time .sleep (3 )#line:189
            O0OOO0OOOO00OOO00.gold()
            time.sleep(3)  # line:189
            O0OOO0OOOO00OOO00 .withdraw ()#line:190
if __name__ =='__main__':#line:191
    CKList =[{'name':'备注','ysm_uid':'xxxx','txbz':3000 }]#line:195
    for i in CKList :#line:196
        api =HHYD (i )#line:197
        api .run ()