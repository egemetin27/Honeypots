#!/usr/bin/python
# Telnet handler concrete class using true threads.

import threading
import time
import select

from .telnetsrvlib import TelnetHandlerBase, command

class TelnetHandler(TelnetHandlerBase):
    "A telnet server handler using Threading"
    def __init__(self, request, client_address, server):
        try:
            # This is the cooked input stream (list of charcodes)
            self.cookedq = []   

            # Create the locks for handing the input/output queues
            self.IQUEUELOCK = threading.Lock()
            self.OQUEUELOCK = threading.Lock()

            # Call the base class init method
            TelnetHandlerBase.__init__(self, request, client_address, server)
        except Exception as e:
            print("error __init__ in thread.py:", e)
        
    def setup(self):
        '''Called after instantiation'''
        try:
            TelnetHandlerBase.setup(self)
            # Spawn a thread to handle socket input
            self.thread_ic = threading.Thread(target=self.inputcooker)
            self.thread_ic.setDaemon(True)
            self.thread_ic.start()
            # Note that inputcooker exits on EOF
            
            # Sleep for 0.5 second to allow options negotiation
            time.sleep(0.5)
        except Exception as e:
            print("error setup in thread.py:", e)
        

    def finish(self):
        '''Called as the session is ending'''
        TelnetHandlerBase.finish(self)
        # Might want to ensure the thread_ic is dead


    # -- Threaded input handling functions --

    def getc(self, block=True):
        """Return one character from the input queue"""
        try:
            if not block:
                if not len(self.cookedq):
                    return ''
            while not len(self.cookedq):
                time.sleep(0.05)
            self.IQUEUELOCK.acquire()
            ret = self.cookedq[0]
            self.cookedq = self.cookedq[1:]
            self.IQUEUELOCK.release()
            return ret
        except Exception as e:
            print("error getc in thread.py", e)

    def inputcooker_socket_ready(self):
        """Indicate that the socket is ready to be read"""
        return select.select([self.sock.fileno()], [], [], 0) != ([], [], [])

    def inputcooker_store_queue(self, char):
        """Put the cooked data in the input queue (with locking)"""
        try:
            self.IQUEUELOCK.acquire()
            if type(char) in [type(()), type([]), type("")]:
                for v in char:
                    self.cookedq.append(v)
            else:
                self.cookedq.append(char)
            self.IQUEUELOCK.release()
        except Exception as e:
            print("error inputcooker_store_queue in thread.py", e)


    # -- Threaded output handling functions --

    def writemessage(self, text):
        """Put data in output queue, rebuild the prompt and entered data"""
        # Need to grab the input queue lock to ensure the entered data doesn't change
        # before we're done rebuilding it.
        # Note that writemessage will eventually call writecooked
        try:
            self.IQUEUELOCK.acquire()
            TelnetHandlerBase.writemessage(self, text)
            self.IQUEUELOCK.release()
        except Exception as e:
            print("error writemessage in thread.py", e)
    
    def writecooked(self, text, encoding='latin-1'):
        """Put data directly into the output queue"""
        # Ensure this is the only thread writing
        try:
            self.OQUEUELOCK.acquire()
            TelnetHandlerBase.writecooked(self, text, encoding)
            self.OQUEUELOCK.release()
        except Exception as e:
            print("error writecooked in thread.py", e)
