from django.core.mail import EmailMessage, get_connection
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.shortcuts import render
import json


@method_decorator(csrf_exempt, name='dispatch')
def SendEmail(request):  
	if request.method == "POST": 
		body_unicode = request.body.decode('utf-8')
		body = json.loads(body_unicode)
		with get_connection(  
			host=settings.EMAIL_HOST, 
			port=settings.EMAIL_PORT,  
			username=settings.EMAIL_HOST_USER, 
			password=settings.EMAIL_HOST_PASSWORD, 
			use_tls=settings.EMAIL_USE_TLS
			) as connection:  
				subject = body.get('subject') 
				email_from = settings.EMAIL_HOST_USER  
				recipient = [body.get('recipient'), ]
				message = body.get('message')
				EmailMessage(subject, message, email_from, recipient, connection=connection).send()  
	
	return render(request, 'email.html')

