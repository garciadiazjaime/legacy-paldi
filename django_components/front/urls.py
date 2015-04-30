from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    # Request views
    url(r'^$', 'django_components.front.views.index', name='index'),
    url(r'^nosotros$', 'django_components.front.views.index', name='index'),
    url(r'^portafolio$', 'django_components.front.views.index', name='index'),
    url(r'^portafolio/proyecto/(\w+)$', 'django_components.front.views.index', name='index'),
    url(r'^servicios$', 'django_components.front.views.index', name='index'),
    url(r'^servicios/branding$', 'django_components.front.views.index', name='index'),
    url(r'^servicios/digital$', 'django_components.front.views.index', name='index'),
    url(r'^servicios/produccion$', 'django_components.front.views.index', name='index'),
    url(r'^clientes$', 'django_components.front.views.index', name='index'),
    url(r'^contacto$', 'django_components.front.views.index', name='index'),

    # Partial views

    url(r'^header$', 'django_components.front.views.header', name='header'),
    url(r'^main$', 'django_components.front.views.main', name='main'),
    url(r'^footer$', 'django_components.front.views.footer', name='footer'),
    
    # Partial views    
    url(r'^home$', 'django_components.front.views.home', name='home'),
    url(r'^aboutus$', 'django_components.front.views.about_us', name='about_us'),
    url(r'^portfolio$', 'django_components.front.views.portfolio', name='portfolio'),
    # url(r'^portfolio/(\w)$', 'django_components.front.views.portfolio', name='portfolio_project'),
    url(r'^portfolio/project$', 'django_components.front.views.portfolio_project', name='portfolio_project'),
    url(r'^services$', 'django_components.front.views.services', name='services'),
    url(r'^services/branding$', 'django_components.front.views.services_branding', name='branding'),
    url(r'^services/digital$', 'django_components.front.views.services_digital', name='digital'),
    url(r'^services/production$', 'django_components.front.views.services_production', name='production'),
    url(r'^contact$', 'django_components.front.views.contact', name='contact'),
    url(r'^clients$', 'django_components.front.views.clients', name='clients'),

    # block views
    url(r'^portafolio-cover$', 'django_components.front.views.portafolio_cover', name='portafolio_cover'),
    url(r'^aboutus-modal$', 'django_components.front.views.aboutus_modal', name='aboutus_modal'),
)
