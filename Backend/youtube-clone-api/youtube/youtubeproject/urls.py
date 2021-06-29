#Need to create a url that will bring in comments with that specific video ID
#Ability to add a commment
#Ability to add a reply to that comment

from django.urls import path
from . import views

urlpatterns = [
    path('video/', views.VideoPage.as_view()),
    path('comments/', views.CommentsSection.as_view()),
]
