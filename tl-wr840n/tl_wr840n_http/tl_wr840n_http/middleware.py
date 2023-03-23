class MyMiddleware:

    def process_response(self, request, response):
        del response['Date']
        return response

    def _init_(self, get_response):
        self.get_response = get_response

    def _call_(self, request):
        response = self.get_response(request)
        response['Server'] = "Router Webserver"
        response['WWW-Authenticate'] = 'Basic realm="TP-LINK Wireless N Router WR841N"'
        #response['Connection'] = "close"
        return response