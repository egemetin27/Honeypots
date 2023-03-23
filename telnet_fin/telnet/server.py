import logging
import sys
if sys.version_info.major == 3:
    import socketserver as SocketServer
else:
    import SocketServer
# from .telnetsrv import TelnetHandlerBase, command
from telnetsrv.threaded import TelnetHandler, command

import time
import csv_functions
import csv


def credential_grab_csv(csv_file):
    '''
    Returns default credentials of the device
    '''
    try:
        with open(csv_file, 'r') as csvfile:
            csv_reader = csv.reader(csvfile)
            rows = list(csv_reader)
            username_valid = rows[1][0]
            password_valid = rows[1][1]

            return username_valid, password_valid
    except Exception as e:
            print("error credential_grab_csv in server.py:", e)


def max_attempt_count_grab_csv(csv_file):
    '''
    Returns maximum allowed faulty login attempts and the error message it produces
    '''
    with open(csv_file, 'r') as csvfile:
        rows = csv.reader(csvfile)
        for row in rows:
            if row[2] == "-1":
                max_attempt_count = row[0]
                error_message = row[1]

                # EDIT - alttakileri try catche sokabilirsin

                # deleting b'' and \n\r from the message
                error_message = error_message[2:-5]

                # turning count into integer
                max_attempt_count = int(max_attempt_count)
                return max_attempt_count, error_message


def successful_message_csv(csv_file):
    '''
    Returns the mesage when a succesfull login happens
    '''
    try:
        with open(csv_file, 'r') as csvfile:
            csv_reader = csv.reader(csvfile)
            rows = list(csv_reader)
            login_message = rows[3][2]

            # croping b''
            login_message = login_message[2:-1]
            return login_message
    
    except Exception as e:
        print("error successful_message_csv in server.py:", e)


class MyServer(object):
    '''A simple server class that just keeps track of a connection count.'''

    def __init__(self):
        # Var to track the total connections.
        self.connection_count = 0

        # Dictionary to track individual connections.
        self.user_connect = {}

    def new_connection(self, username):
        '''Register a new connection by username, return the count of connections.'''
        self.connection_count += 1
        try:
            if username in self.user_connect:
                self.user_connect[username] += 1
            else:
                self.user_connect[username] = 1
        except Exception as e:
            print("error new_connection() in server.py", e)
        return self.connection_count, self.user_connect[username]


class MyTelnetHandler(TelnetHandler):
    # Create the instance of the server within the class for easy use

    csv_file = "deneme_1.csv"

    login_message = successful_message_csv(csv_file)
    WELCOME = login_message
    authNeedUser = True
    authNeedPass = True

    myserver = MyServer()

    def session_start(self):
        '''Called after the user successfully logs in.'''
        try:
            # self.writeline('This server is running %s.' % SERVERTYPE)

            # Tell myserver that we have a new connection, and provide the username.
            # We get back the login count information.
            globalcount, usercount = self.myserver.new_connection(self.username)

            # self.writeline('Hello %s!' % self.username)
            self.writeline('You are connection #%d, you have logged in %s time(s).' % (globalcount, usercount))

            # Track any asyncronous events registered with the timer command
            self.timer_events = []
        except Exception as e:
            print("error session_start in server.py:", e)

    # admin yerine csvden credential cek

    def authCallback(self, username, password):
        csv_file = "deneme_1.csv"
        print("csv file name:", csv_file)

        max_attempt, error_message = max_attempt_count_grab_csv(csv_file)
        # print('max_attempt:', max_attempt)
        # print('error_message:', {error_message})

        # csv_file'i bir yerde input olarak almak lazim (belki constructor??)
        username_valid, password_valid = credential_grab_csv(csv_file)
        print("tried username: " + username + ", correct username:", username_valid)
        print("tried password: " + password + ", correct password:", password_valid)

        if username == username_valid and password == password_valid:
            print("LOGIN IS SUCCESSFUL")
            return True

        # Wrong credentials
        print(error_message)
        print("Authentication failed, wrong username or password")
        raise Exception("Authentication failed!")
        # raise Exception(error_message)

    @command(['echo', 'copy', 'repeat'])
    def command_echo(self, params):
        '''
        Echo text back to the console.
        '''

        try:
            self.writeresponse(' '.join(params))
            print("++++++Current Command History+++++++")
            for index, line in enumerate(self.history):
                print(str(index+1) + "-) " + str(line))

        except Exception as e:
            print("error command_echo in server.py:", e)

    '''@command('timer')
                def command_timer(self, params):
                    <time> <message>
                    In <time> seconds, display <message>.
                    Send a message after a delay.
                    <time> is in seconds.
                    If <message> is more than one word, quotes are required.
                    example:
                    > TIMER 5 "hello world!"
               		
                    try:
                        timestr, message = params[:2]
                        #print(params)
                        timestr = params[0]
                        message = params[1]
                        time = int(timestr)
                    except ValueError:
                        self.writeerror( "Need both a time and a message" )
                        return
                    self.writeresponse("Waiting " + time + " seconds...")
                    event = threading.Timer(delay, self.writemessage, args=[message])
                    event.start()'''
'''server = gevent.server.StreamServer(("", 8023), MyTelnetHandler.streamserver_handle)
server.serve_forever()'''


class TelnetServer(SocketServer.TCPServer):
    allow_reuse_address = True


server = TelnetServer(("0.0.0.0", 23), MyTelnetHandler)
server.serve_forever()
