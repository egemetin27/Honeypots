class MyMiddleware:

    def process_response(self, request, response):
        del response['Date']
        return response

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Server'] = "Router Webserver"
        response['WWW-Authenticate'] = 'Basic realm="TP-LINK Wireless N Router WR841N"'
        #response['Connection'] = "close"
        return response