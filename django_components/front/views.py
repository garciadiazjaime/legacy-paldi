from django.shortcuts import render, HttpResponse, render_to_response

def index(request, param=''):
	return render_to_response('layout/base.html')


#### LAYOUT VIEWS #### 

def header(request):
	return render_to_response('layout/header.html')

def main(request):
	return render_to_response('section/main.html')

def footer(request):
	return render_to_response('layout/footer.html')


#### SECTION VIEWS #### 

def home(request):
	return render_to_response('section/home.html')

def about_us(request):
	return render_to_response('section/about-us.html')

def portfolio(request):
	return render_to_response('section/portfolio/index.html')

def portfolio_project(request):
	return render_to_response('section/portfolio/project.html')

def services(request):
	return render_to_response('section/services/index.html')

def services_branding(request):
	return render_to_response('section/services/branding.html')

def services_production(request):
	return render_to_response('section/services/production.html')

def services_digital(request):
	return render_to_response('section/services/digital.html')

def contact(request):
	return render_to_response('section/contact.html')

def clients(request):
	return render_to_response('section/clients.html')


#### BLOCK VIEWS #### 

def portafolio_cover(request):
	return render_to_response('block/portafolio-cover.html')

def aboutus_modal(request):	
	return render_to_response('block/aboutus-modal.html')