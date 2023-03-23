from django.http import HttpResponse
from django.shortcuts import render, redirect
import random
import string
from django.conf import settings
import time

startTime = time.time()
ip = settings.ALLOWED_HOSTS[0]
loggedin = False
loginTime = 0
packetCount = 0
bytesCount = 0

def getTime():
    return(int(time.time() - startTime))
 
def MainView(request):
    return render(request,"login.html", {"ErrNum": 3, "host_ip": ip})

def login(request):
    #Authorization=Basic%20YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM%3D
    global loggedin
    if(request.COOKIES.get("Authorization") == "Basic%20YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM%3D" and loggedin == False):
        auth_id = ''.join(random.choices(string.ascii_uppercase, k = 16))
        loggedin = True   
        response = redirect('/userRpm/Index.htm')
        return response     
    elif loggedin == False:
        return render(request,"login.html", {"ErrNum": 2, "host_ip": ip})
    else:
        return render(request,"login.html", {"ErrNum": 0, "host_ip": ip})

def top(request):
    return render(request,"top.html", {"host_ip": ip})

def help(request, templateName):
    return render(request, templateName, {"host_ip": ip})

def userRpm(request, templateName):
    global loggedin
    global packetCount
    global bytesCount
    if(loggedin == True and (request.COOKIES.get("Authorization") == "Basic%20YWRtaW46MjEyMzJmMjk3YTU3YTVhNzQzODk0YTBlNGE4MDFmYzM%3D")):
        if templateName == "StatusRpm.htm":
            addedPacket = random.randint(0,325)
            packetCount += addedPacket
            bytesCount += addedPacket * random.randint(0,321)
            return render(request, templateName, {"host_ip": ip, "time" : getTime(),"packetCount": "{:,}".format(packetCount), "bytesCount": "{:,}".format(bytesCount)})
        else:
            return render(request, templateName, {"host_ip": ip})
    else:
        if templateName == "LogoutRpm.htm":
            loggedin = False
        response = redirect('/')
        return response

def charset(request):
    response = HttpResponse()
    response.status_code = 413
    response.reason_phrase = "N/A"
    return response