from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^', 'app.front.views.home', name='home'),
    url(r'^', include('django_components.front.urls')),
    url(r'^partial/', include('django_components.front.urls')),
    url(r'^block/', include('django_components.front.urls')),

    # url(r'^admin/', include(admin.site.urls)),
)
