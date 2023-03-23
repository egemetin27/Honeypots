from django.urls import path
from .views import login, MainView, top, charset, help, userRpm

app_name = "router"
urlpatterns = [
    path('',MainView, name='MainView'),
    path('userRpm/LoginRpm.htm', login, name='login'),
    path('frames/top.htm', top, name="top"), 
    path('localiztion/char_set.js', charset, name="charset"),
    path('help/<str:templateName>', help, name = "help"),
    path('userRpm/<str:templateName>', userRpm, name = "userRpm")
]
