from rest_framework import serializers
from .models import Comments
from .models import Video


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'save_comment', 'like', 'dislike', 'video', 'reply_comment']


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'youtube_id', 'title', 'like_video', 'dislike_video']
