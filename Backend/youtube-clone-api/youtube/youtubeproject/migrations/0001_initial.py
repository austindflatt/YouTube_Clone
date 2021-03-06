# Generated by Django 3.1.8 on 2021-06-24 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('save_comment', models.CharField(max_length=250)),
                ('like', models.IntegerField(default=0)),
                ('dislike', models.IntegerField(default=0)),
                ('video', models.CharField(max_length=50)),
                ('reply_comment', models.CharField(max_length=180)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('youtube_id', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('like_video', models.IntegerField(default=0)),
                ('dislike_video', models.IntegerField(default=0)),
            ],
        ),
    ]
