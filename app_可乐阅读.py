oo0o ='''
cron: 30 */30 8-22 * * *
new Env('f可乐阅读');
活动入口：https://rk1115131229-1322350692.cos.ap-nanjing.myqcloud.com/index.html?upuid=123182
使用方法：
1.入口,WX打开：https://rk1115131229-1322350692.cos.ap-nanjing.myqcloud.com/index.html?upuid=123182
'''#line:7
'''
https://rk1116113427-1322351070.cos.ap-nanjing.myqcloud.com/index.html?upuid=123182
若链接微信无法打开，请复制到浏览器复制新链接打开
2.打开活动入口，抓包的任意接口cookie参数
3.青龙环境变量菜单或者配置文件，添加本脚本环境变量
填写变量参数时为方便填写可以随意换行
青龙添加环境变量名称 ：klydconfig
建议使用方式二
方式一：青龙添加环境变量参数 ：
单账户：[{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'}]
多账户：[{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'},{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'}]

方式二：配置文件添加
单账户：export klydconfig="[{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'}]"
多账户：export klydconfig="[
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'},
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'},
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'}
]"
参数说明：
name:备注名随意填写
cookie:打开活动入口，抓包的任意接口headers中的cookie参数
key：每个账号的推送标准，每个账号全阅读只需要一个key,多个账号需要多个key,key永不过期。
为了防止恶意调用key接口，限制每个ip每天只能获取一个key。手机开飞行模式10s左右可以变更ip重新获取key
通过浏览器打开链接获取:http://175.24.153.42:8882/getkey
uids:wxpusher的参数，当一个微信关注了一个wxpusher的推送应用后，会在推送管理后台(https://wxpusher.zjiecode.com/admin/main)的'用户管理-->用户列表'中显示
用户在推送页面点击’我的-->我的UID‘也可以获取
User-Agent:抓包任意接口在headers中看到
4.青龙环境变量菜单，添加本脚wxpusher环境变量(不需要重复添加)
建议使用方式二
方式一：青龙添加环境变量参数 ：
名称 ：push_config
参数 ：{"printf":0,"threadingf":1,"threadingt":3,"appToken":"xxxx"}
方式二：配置文件添加
export push_config="{'printf':0,'threadingf':1,'threadingt':3,'appToken':'xxxx'}"
参数说明：
printf:0是不打印调试日志，1是打印调试日志
threadingf:并行运行账号参数 1并行执行，0顺序执行，并行执行优点，能够并行跑所以账号，加快完成时间，缺点日志打印混乱。
threadingt:并行运行时每个账号的间隔时间默认3s
appToken 这个是填wxpusher的appToken,找不到自己百度

5.本地电脑python运行
在本脚本最下方代码if __name__ == '__main__':下填写
例如
loc_push_config={"printf":0,"threadingf":1,"threadingt":3,"appToken":"xxxx"}
loc_klydconfig=[
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'},
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'},
{'name':'备注名','cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx','key':'xxxxxxx','uids':'xxxxxxx','User_Agent':'xxxxx'}
]
6.在本脚本最下方代码if __name__ == '__main__':下配置UA变量
User-Agent参数可以抓包任意接口在headers中看到
定时运行每半个小时一次
'''#line:61
import requests #line:62
import re #line:63
import random #line:64
import os #line:65
import threading #line:66
import json #line:67
import hashlib #line:68
import time #line:69
from urllib .parse import urlparse ,parse_qs #line:70
checkDict ={'oneischeck':['第一篇文章','过检测'],}#line:73
def getmsg ():#line:74
    O00O0OOO0O000O000 ='v1.3f'#line:75
    O0OOOO0O0O0O0O00O =''#line:76
    try :#line:77
        O00OO0O0OOO0O0000 ='http://175.24.153.42:8881/getmsg'#line:78
        OOOOOOOOO0O00O0O0 ={'type':'zhyd'}#line:79
        O0OOOO0O0O0O0O00O =requests .get (O00OO0O0OOO0O0000 ,params =OOOOOOOOO0O00O0O0 )#line:80
        OOO0O000OOOOOOO00 =O0OOOO0O0O0O0O00O .json ()#line:81
        O0000O000000O0O0O =OOO0O000OOOOOOO00 .get ('version')#line:82
        OOOOO0OOOO000OO0O =OOO0O000OOOOOOO00 .get ('gdict')#line:83
        O00O0OOO0O000000O =OOO0O000OOOOOOO00 .get ('gmmsg')#line:84
        print ('系统公告:',O00O0OOO0O000000O )#line:85
        print (f'最新版本{O0000O000000O0O0O},当前版本{O00O0OOO0O000O000}')#line:86
        print (f'系统的公众号字典{len(OOOOO0OOOO000OO0O)}个:{OOOOO0OOOO000OO0O}')#line:87
        print (f'本脚本公众号字典{len(checkDict.values())}个:{list(checkDict.keys())}')#line:88
        print ('='*50 )#line:89
    except Exception as O00O0OO000O0OO000 :#line:90
        print (O0OOOO0O0O0O0O00O .text )#line:91
        print (O00O0OO000O0OO000 )#line:92
        print ('公告服务器异常')#line:93
def push (O000000OO0O00OO0O ,OO0000O0OOO0O0O0O ,O0OOO0000O00O0O0O ,OO00O00O00OOO0OOO ,O0000O000O0O0OOOO ,OO0O0OO000OOOOOOO ):#line:94
    O0O00000OO0OO0OOO ='''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>TITLE</title>
<style type=text/css>
   body {
   	background-image: linear-gradient(120deg, #fdfbfb 0%, #a5d0e5 100%);
    background-size: 300%;
    animation: bgAnimation 6s linear infinite;
}
@keyframes bgAnimation {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
}
</style>
</head>
<body>
<p>TEXT</p><br>
<p><a href="http://175.24.153.42:8882/lookstatus?key=KEY&type=TYPE">查看状态</a></p><br>
<p><a href="http://175.24.153.42:8882/lookwxarticle?key=KEY&type=TYPE&wxurl=LINK">点击阅读检测文章</a></p><br>
</body>
</html>
    '''#line:119
    OO0O000OO0OOO00O0 =O0O00000OO0OO0OOO .replace ('TITTLE',O000000OO0O00OO0O ).replace ('LINK',OO0000O0OOO0O0O0O ).replace ('TEXT',O0OOO0000O00O0O0O ).replace ('TYPE',OO00O00O00OOO0OOO ).replace ('KEY',OO0O0OO000OOOOOOO )#line:121
    OOOO00O00O00OO0O0 ={"appToken":appToken ,"content":OO0O000OO0OOO00O0 ,"summary":O000000OO0O00OO0O ,"contentType":2 ,"uids":[O0000O000O0O0OOOO ]}#line:128
    O0O00OO0OOOOOO000 ='http://wxpusher.zjiecode.com/api/send/message'#line:129
    try :#line:130
        OOO00OO000000O0OO =requests .post (url =O0O00OO0OOOOOO000 ,json =OOOO00O00O00OO0O0 ).text #line:131
        print (OOO00OO000000O0OO )#line:132
        return True #line:133
    except :#line:134
        print ('推送失败！')#line:135
        return False #line:136
def getinfo (OO000O00OOO000O00 ):#line:137
    try :#line:138
        OOOOO0O00000OO000 =requests .get (OO000O00OOO000O00 )#line:139
        O000O00000OO0O0O0 =re .sub ('\s','',OOOOO0O00000OO000 .text )#line:141
        O0O00OO0O0OO0000O =re .findall ('varbiz="(.*?)"\|\|',O000O00000OO0O0O0 )#line:142
        if O0O00OO0O0OO0000O !=[]:#line:143
            O0O00OO0O0OO0000O =O0O00OO0O0OO0000O [0 ]#line:144
        if O0O00OO0O0OO0000O ==''or O0O00OO0O0OO0000O ==[]:#line:145
            if '__biz'in OO000O00OOO000O00 :#line:146
                O0O00OO0O0OO0000O =re .findall ('__biz=(.*?)&',OO000O00OOO000O00 )#line:147
                if O0O00OO0O0OO0000O !=[]:#line:148
                    O0O00OO0O0OO0000O =O0O00OO0O0OO0000O [0 ]#line:149
        OO00OOO0OO0OOOOOO =re .findall ('varnickname=htmlDecode\("(.*?)"\);',O000O00000OO0O0O0 )#line:150
        if OO00OOO0OO0OOOOOO !=[]:#line:151
            OO00OOO0OO0OOOOOO =OO00OOO0OO0OOOOOO [0 ]#line:152
        O0OO00O00OO0OOO00 =re .findall ('varuser_name="(.*?)";',O000O00000OO0O0O0 )#line:153
        if O0OO00O00OO0OOO00 !=[]:#line:154
            O0OO00O00OO0OOO00 =O0OO00O00OO0OOO00 [0 ]#line:155
        OOOO0O0OOOOO0O000 =re .findall ("varmsg_title='(.*?)'\.html\(",O000O00000OO0O0O0 )#line:156
        if OOOO0O0OOOOO0O000 !=[]:#line:157
            OOOO0O0OOOOO0O000 =OOOO0O0OOOOO0O000 [0 ]#line:158
        O00OO0000OOOO0000 =f'公众号唯一标识：{O0O00OO0O0OO0000O}|文章:{OOOO0O0OOOOO0O000}|作者:{OO00OOO0OO0OOOOOO}|账号:{O0OO00O00OO0OOO00}'#line:159
        print (O00OO0000OOOO0000 )#line:160
        return OO00OOO0OO0OOOOOO ,O0OO00O00OO0OOO00 ,OOOO0O0OOOOO0O000 ,O00OO0000OOOO0000 ,O0O00OO0O0OO0000O #line:161
    except Exception as O0000O0OOO0OOO0OO :#line:162
        print (O0000O0OOO0OOO0OO )#line:163
        print ('异常')#line:164
        return False #line:165
class WXYD :#line:166
    def __init__ (O0OO0OO0OO00O0O00 ,O00000OO0O0OO0OO0 ):#line:167
        O0OO0OO0OO00O0O00 .name =O00000OO0O0OO0OO0 ['name']#line:168
        O0OO0OO0OO00O0O00 .key =O00000OO0O0OO0OO0 ['key']#line:169
        O0OO0OO0OO00O0O00 .uids =O00000OO0O0OO0OO0 ['uids']#line:170
        O0OO0OO0OO00O0O00 .User_Agent =O00000OO0O0OO0OO0 ['User_Agent']#line:171
        O0OO0OO0OO00O0O00 .headers ={'Accept':'application/json, text/plain, */*','User-Agent':O0OO0OO0OO00O0O00 .User_Agent ,'Referer':'http://ab1115072245.c0722451115.ww1112001.cn/new?upuid=','Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh;q=0.9','Cookie':O00000OO0O0OO0OO0 ['cookie'],}#line:179
    def printjson (OO00O0000O00O0OO0 ,OO000OOOO000O0OO0 ):#line:180
        if printf ==0 :#line:181
            return #line:182
        print (OO00O0000O00O0OO0 .name ,OO000OOOO000O0OO0 )#line:183
    def setstatus (OO00OOO0O0O0O0O0O ):#line:184
        try :#line:185
            O00000OO0OOO0O00O ='http://175.24.153.42:8882/setstatus'#line:186
            O00O000O000O0O000 ={'key':OO00OOO0O0O0O0O0O .key ,'type':'zhyd','val':'1','ven':oo0o }#line:187
            O0O0O0OOO00O000OO =requests .get (O00000OO0OOO0O00O ,params =O00O000O000O0O000 ,timeout =10 )#line:188
            print (OO00OOO0O0O0O0O0O .name ,O0O0O0OOO00O000OO .text )#line:189
            if '无效'in O0O0O0OOO00O000OO .text :#line:190
                exit (0 )#line:191
        except Exception as OOO0OOOOO000O00O0 :#line:192
            print (OO00OOO0O0O0O0O0O .name ,'设置状态异常')#line:193
            print (OO00OOO0O0O0O0O0O .name ,OOO0OOOOO000O00O0 )#line:194
    def getstatus (OO00OOOO0000OO0O0 ):#line:196
        try :#line:197
            O00O0O0O000O0OO0O ='http://175.24.153.42:8882/getstatus'#line:198
            O0OO0O0OOOO00O000 ={'key':OO00OOOO0000OO0O0 .key ,'type':'zhyd'}#line:199
            O0O00OOO0O000O0OO =requests .get (O00O0O0O000O0OO0O ,params =O0OO0O0OOOO00O000 ,timeout =3 )#line:200
            return O0O00OOO0O000O0OO .text #line:201
        except Exception as OOOO000O0O0O00000 :#line:202
            print (OO00OOOO0000OO0O0 .name ,'查询状态异常',OOOO000O0O0O00000 )#line:203
            return False #line:204
    def tuijian (OOO0O00O00OO0O0O0 ):#line:205
        O00OOOO000OO000OO ='http://ab1115131510.c1315101115.ww1112001.cn/tuijian'#line:206
        O00O0000O000O0O0O =requests .get (O00OOOO000OO000OO ,headers =OOO0O00O00OO0O0O0 .headers )#line:207
        try :#line:208
            OOO00OO0OO0OO00O0 =O00O0000O000O0O0O .json ()#line:209
            if OOO00OO0OO0OO00O0 .get ('code')==0 :#line:210
                OOOOO00O000O0OOOO =OOO00OO0OO0OO00O0 ['data']['user']['username']#line:211
                O0OOO0OOOO00O00OO =float (OOO00OO0OO0OO00O0 ['data']['user']['score'])/100 #line:212
                print (f'{OOOOO00O000O0OOOO}:当前剩余{O0OOO0OOOO00O00OO}元')#line:213
                return True #line:214
            else :#line:215
                print (OOO00OO0OO0OO00O0 )#line:216
                print ('账号异常0,ck可能失效')#line:217
                return False #line:218
        except Exception as O00OOOO000OO0OO00 :#line:219
            print (O00OOOO000OO0OO00 )#line:220
            print ('账号异常1，ck可能失效')#line:221
            return False #line:222
    def get_read_url (OO0OOO000O00O0OOO ):#line:223
        OO00OOOOOOO0O0OOO =f'http://ab1115072245.c0722451115.ww1112001.cn/new/get_read_url'#line:224
        O0OOO0OO000O0OO00 =requests .get (OO00OOOOOOO0O0OOO ,headers =OO0OOO000O00O0OOO .headers )#line:225
        OOOO0O0OOOO00OOO0 =O0OOO0OO000O0OO00 .json ()#line:226
        OOO000OOOOO0O00OO =OOOO0O0OOOO00OOO0 .get ('jump')#line:228
        O000O0OOOO000OO0O =parse_qs (urlparse (OOO000OOOOO0O00OO ).query )#line:229
        OO0OO00OOOOOOO000 =urlparse (OOO000OOOOO0O00OO ).netloc #line:230
        OOO0O0OOO0OOOO0OO =O000O0OOOO000OO0O .get ('iu')[0 ]#line:231
        O000000OO0O0OOOO0 ={'Host':OO0OO00OOOOOOO000 ,'User-Agent':OO0OOO000O00O0OOO .User_Agent ,'X-Requested-With':'XMLHttpRequest','Accept':'*/*','Referer':OOO000OOOOO0O00OO ,'Accept-Encoding':'gzip, deflate','Accept-Language':'zh-CN,zh;q=0.9',}#line:241
        O0OOO0OO000O0OO00 =requests .get (OOO000OOOOO0O00OO ,headers =O000000OO0O0OOOO0 )#line:242
        O000000OO0O0OOOO0 .update ({'Cookie':f'PHPSESSID={O0OOO0OO000O0OO00.cookies.get("PHPSESSID")}'})#line:243
        return OOO0O0OOO0OOOO0OO ,OO0OO00OOOOOOO000 ,O000000OO0O0OOOO0 #line:244
    def do_read (OOO0O0O0O00O0000O ):#line:246
        O0O0O0OOO0O000OO0 =OOO0O0O0O00O0000O .get_read_url ()#line:247
        OOO0O0O0O00O0000O .jkey =''#line:248
        O0OOOO0O0OOOOO000 =0 #line:249
        while True :#line:250
            OOO0O0O0O00O0000O .tuijian ()#line:251
            OOOO0O0O00OOOOO00 =f'?for=&zs=&pageshow&r={round(random.uniform(0, 1), 17)}&iu={O0O0O0OOO0O000OO0[0]}{OOO0O0O0O00O0000O.jkey}'#line:252
            OOO00OOOOOOO0OOOO =f'http://{O0O0O0OOO0O000OO0[1]}/tuijian/do_read{OOOO0O0O00OOOOO00}'#line:253
            print (OOO00OOOOOOO0OOOO )#line:254
            OO0OOO0000O00OOO0 =requests .get (OOO00OOOOOOO0OOOO ,headers =O0O0O0OOO0O000OO0 [2 ])#line:255
            print ('-'*50 )#line:257
            OO0O000OO0O00OOO0 =OO0OOO0000O00OOO0 .json ()#line:258
            if OO0O000OO0O00OOO0 .get ('msg'):#line:259
                print ('弹出msg',OO0O000OO0O00OOO0 .get ('msg'))#line:260
            OO0OOO0000000OOOO =OO0O000OO0O00OOO0 .get ('url')#line:261
            if OO0OOO0000000OOOO =='close':#line:262
                print (f'阅读结果：{OO0O000OO0O00OOO0.get("success_msg","开始阅读或者异常")}')#line:263
                return True #line:264
            if 'weixin'in OO0OOO0000000OOOO :#line:265
                print (f'上一篇阅读结果：{OO0O000OO0O00OOO0.get("success_msg","开始阅读或者异常")}')#line:266
                OO0O00OO0000O0000 =OO0O000OO0O00OOO0 .get ('jkey')#line:267
                OOO0O0O0O00O0000O .jkey =f'&jkey={OO0O00OO0000O0000}'#line:268
                OO00O0O0OO0000O0O =getinfo (OO0OOO0000000OOOO )#line:269
                if O0OOOO0O0OOOOO000 ==0 :#line:270
                    OO00OO00OO0000000 =list (OO00O0O0OO0000O0O )#line:271
                    OO00OO00OO0000000 [4 ]='oneischeck'#line:272
                    if OOO0O0O0O00O0000O .testCheck (OO00OO00OO0000000 ,OO0OOO0000000OOOO )==False :#line:273
                        return False #line:274
                    O0OOOO0O0OOOOO000 =1 #line:275
                if OOO0O0O0O00O0000O .testCheck (OO00O0O0OO0000O0O ,OO0OOO0000000OOOO )==False :#line:276
                    return False #line:277
                print ('开始本次阅读')#line:278
                OOO00O0OO0O000O0O =random .randint (6 ,9 )#line:279
                print (f'本次模拟读{OOO00O0OO0O000O0O}秒')#line:280
                time .sleep (OOO00O0OO0O000O0O )#line:281
            else :#line:282
                print ('未知结果')#line:283
                print (OO0O000OO0O00OOO0 )#line:284
                break #line:285
    def testCheck (O0O0OOOO00OO00O00 ,OOO000O0OO0O0000O ,O0OOOOOO0OOOO0O0O ):#line:286
        if OOO000O0OO0O0000O [4 ]==[]:#line:287
            print (O0O0OOOO00OO00O00 .name ,'这个链接没有获取到微信号id',O0OOOOOO0OOOO0O0O )#line:288
            return True #line:289
        if checkDict .get (OOO000O0OO0O0000O [4 ])!=None :#line:290
            O0O0OOOO00OO00O00 .setstatus ()#line:291
            for OO0000OO00OO0O0O0 in range (60 ):#line:292
                if OO0000OO00OO0O0O0 %30 ==0 :#line:293
                    push (f'可乐阅读过检测:{O0O0OOOO00OO00O00.name}',O0OOOOOO0OOOO0O0O ,OOO000O0OO0O0000O [3 ],'zhyd',O0O0OOOO00OO00O00 .uids ,O0O0OOOO00OO00O00 .key )#line:294
                OO000O00O000O0OOO =O0O0OOOO00OO00O00 .getstatus ()#line:295
                if OO000O00O000O0OOO =='0':#line:296
                    print (O0O0OOOO00OO00O00 .name ,'过检测文章已经阅读')#line:297
                    return True #line:298
                elif OO000O00O000O0OOO =='1':#line:299
                    print (O0O0OOOO00OO00O00 .name ,f'正在等待过检测文章阅读结果{OO0000OO00OO0O0O0}秒。。。')#line:300
                    time .sleep (1 )#line:301
                else :#line:302
                    print (O0O0OOOO00OO00O00 .name ,OO000O00O000O0OOO )#line:303
                    print (O0O0OOOO00OO00O00 .name ,'服务器异常')#line:304
                    return False #line:305
            print (O0O0OOOO00OO00O00 .name ,'过检测超时中止脚本防止黑号')#line:306
            return False #line:307
        else :#line:308
            return True #line:309
    def withdrawal (O0OOOO0OO00O0OO0O ):#line:310
        O0OOOOO00OOOO0OOO ='http://ab1115072245.c0722451115.ww1112001.cn/withdrawal'#line:311
        O000OO0O00OO0O000 =requests .get (O0OOOOO00OOOO0OOO ,headers =O0OOOO0OO00O0OO0O .headers )#line:312
        OO0O00OOOO0OO0O00 =O000OO0O00OO0O000 .json ()#line:313
        time .sleep (3 )#line:314
        if OO0O00OOOO0OO0O00 .get ('code')==0 :#line:315
            O0O000O00OO00000O =int (float (OO0O00OOOO0OO0O00 ['data']['user']['score']))#line:316
            if O0O000O00OO00000O >=2000 :#line:317
                O0O000O00OO00000O =2000 #line:318
            OO0O0O00OO0O0OOO0 =O0OOOO0OO00O0OO0O .headers .copy ()#line:319
            OO0O0O00OO0O0OOO0 .update ({'Content-Type':'application/x-www-form-urlencoded'})#line:320
            O0OOOOO00OOOO0OOO ='http://ab1116084433.c0844331116.ww1112004.cn/withdrawal/doWithdraw'#line:321
            O00OO0000OO0OO00O =f'amount={O0O000O00OO00000O}&type=wx'#line:322
            O000OO0O00OO0O000 =requests .post (O0OOOOO00OOOO0OOO ,headers =OO0O0O00OO0O0OOO0 ,data =O00OO0000OO0OO00O )#line:323
            print ('提现结果',O000OO0O00OO0O000 .text )#line:324
        else :#line:325
            print (OO0O00OOOO0OO0O00 )#line:326
    def run (OO0OO0O0000O000OO ):#line:327
        if hashlib .md5 (oo0o .encode ()).hexdigest ()!='e00d9b235da07e11c89608f0fc8c8e36':OO0OO0O0000O000OO .setstatus ()#line:328
        if OO0OO0O0000O000OO .tuijian ():#line:329
            OO0OO0O0000O000OO .do_read ()#line:330
            time .sleep (2 )#line:331
            OO0OO0O0000O000OO .withdrawal ()#line:332
def getEnv (O0OO000OOO0OO0O00 ):#line:333
    OOOOO0O000000OOOO =os .getenv (O0OO000OOO0OO0O00 )#line:334
    if OOOOO0O000000OOOO ==None :#line:335
        print (f'{O0OO000OOO0OO0O00}青龙变量里没有获取到，使用本地参数')#line:336
        return False #line:337
    try :#line:338
        OOOOO0O000000OOOO =json .loads (OOOOO0O000000OOOO .replace ("'",'"').replace ("\n","").replace (" ","").replace ("\t",""))#line:339
        return OOOOO0O000000OOOO #line:340
    except Exception as OO00OOO0OOO0OO0O0 :#line:341
        print ('错误:',OO00OOO0OOO0OO0O0 )#line:342
        print ('你填写的变量是:',OOOOO0O000000OOOO )#line:343
        print ('请检查变量参数是否填写正确')#line:344
        print (f'{O0OO000OOO0OO0O00}使用本地参数')#line:345
if __name__ =='__main__':#line:346
    loc_push_config = {"printf": 1, "threadingf": 0, "appToken": "AT_9Kxxxxu6JC"}
    loc_klydconfig = [
        {'name':'备注名','cookie':'PHPSESSID=hxxxxpud; udtauth3=c2b68exk%2F0','key':'4e9b9xxxx451f2a78a','uids':'UID_11ZH0Pxxxxq12lncQ','User_Agent':'xxxxx'},
        #{'name': '备注名', 'cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx'},
        #{'name': '备注名', 'cookie': 'PHPSESSID=xxxx; udtauth3=a267Rxxxxx'}
    ]
    #--------------------------------------------------------
    push_config = getEnv('push_config')
    if push_config == False: push_config = loc_push_config
    print(push_config)
    klydconfig = getEnv('klydconfig')
    if klydconfig==False:klydconfig=loc_klydconfig
    print(klydconfig)
    printf = push_config.get('printf',0)  # 打印调试日志0不打印，1打印，若运行异常请打开调试
    appToken = push_config['appToken']  # 这个是填wxpusher的appToken
    threadingf = push_config.get('threadingf',1)
    getmsg()
    if threadingf == 1:
        tl=[]
        for cg in klydconfig:
            print('*' * 50)
            print(f'开始执行{cg["name"]}')
            api = WXYD(cg)
            t = threading.Thread(target=api.run, args=())
            tl.append(t)
            t.start()
            threadingt=push_config.get('threadingt',3)
            time.sleep(threadingt)
        for t in tl:
            t.join()
    elif threadingf == 0:
        for cg in klydconfig:
            print('*' * 50)
            print(f'开始执行{cg["name"]}')
            api = WXYD(cg)
            api.run()
            print(f'{cg["name"]}执行完毕')
            time.sleep(3)
    else:
        print('请确定推送变量中threadingf参数是否正确')
    print('全部账号执行完成')
    time.sleep(15)
