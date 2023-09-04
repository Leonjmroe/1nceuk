# from django.http import HttpResponsePermanentRedirect


# class RedirectMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         host = request.get_host()
#         path = request.path
#         protocol = request.scheme

#         # Check if the host starts with "www."
#         if host.startswith("www."):
#             # Redirect to the same URL with "www." removed
#             new_url = f"{protocol}://{host[4:]}{path}"
#             return HttpResponsePermanentRedirect(new_url)

#         # Check if the request is not using HTTPS
#         if not request.is_secure():
#             # Redirect to the same URL with HTTPS protocol
#             new_url = f"https://{host}{path}"
#             return HttpResponsePermanentRedirect(new_url)

#         return self.get_response(request)




# class CustomHeaderMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         response = self.get_response(request)
#         csp = "default-src 'self'; img-src 'self' data: https://d3plr6xnj3tfvw.cloudfront.net; frame-src 'self' https://www.youtube.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
#         response["Content-Security-Policy"] = csp
#         return response


