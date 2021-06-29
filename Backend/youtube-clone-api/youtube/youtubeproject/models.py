from django.db import models


class Comments(models.Model):
    save_comment = models.CharField(max_length=250)
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
    video = models.CharField(max_length=50)
    reply_comment = models.CharField(max_length=180)


class Video(models.Model):
    youtube_id = models.CharField(primary_key = True, max_length=50)
    title = models.CharField(max_length=100)
    like_video = models.IntegerField(default=0)
    dislike_video = models.IntegerField(default=0)
