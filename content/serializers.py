from rest_framework.serializers import ModelSerializer

from content.models import Banner, FAQItem


class BannerSerializer(ModelSerializer):
    class Meta:
        model = Banner
        fields = ['id','title','image','link']

class FAQItemSerializer(ModelSerializer):
    class Meta :
        model = FAQItem
        fields = ['id','question','answer']


