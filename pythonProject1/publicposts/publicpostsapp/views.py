from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Post
from .serializers import PostSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    @action(detail=False, methods=['get'])
    def like_post(self, request, pk):

        post = Post.objects.get(id=pk)
        setattr(post, 'likesCount', post.likesCount + 1)
        post.save()
        print(post.likesCount)
        return Response(post.likesCount, status.HTTP_200_OK)
