import csv
import time


def successful_message_csv(csv_file):
    '''
    Returns the mesage when a succesfull login happens
    '''
    with open(csv_file,'r') as csvfile:
        csv_reader = csv.reader(csvfile)
        rows = list(csv_reader)
        login_message = rows[3][2]

        # croping b'' 
        login_message = login_message[2:-1]
        return login_message


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
        print(e)
        return "admin", "1234"
    
    

def command_grab_csv(input_command, csv_file):
    ''' 
    If command is in csv it returns the corresponding output
    otherwise it returns None
    '''
    try:
        with open(csv_file, 'r') as csvfile:
            rows = csv.reader(csvfile)

            for row in rows:
                if input_command == row[0]:
                    # command is in csv file
                    return row[1]
            return None
    except Exception as e:
        print(e)
        return "echo"


def max_attempt_count_grab_csv(csv_file):

    '''
    Returns maximum allowed faulty login attempts and the error message it produces
    '''
    try:
        with open(csv_file, 'r') as csvfile:
            rows = csv.reader(csvfile)
            for row in rows:
                if row[2] == "-1":
                    max_attempt_count = row[0]
                    error_message = row[1]



                    #EDIT - buralari try catche sokabilirsin

                    # deleting b'' and \n\r from the message
                    error_message = error_message[2:-5]

                    #turning count into integer
                    max_attempt_count = int(max_attempt_count)
                    return max_attempt_count, error_message
    except Exception as e:
        print("error in csv_functions.py", e)
        return 3, "You tried so many times! "


def idle_time_grab_csv(csv_file):
    '''
    Returns maximum idle times allowed for the device
    and its error message 
    '''

    try:
         with open(csv_file, 'r') as csvfile:
            rows = csv.reader(csvfile)

            flag = False
            for row in rows:
                if flag:
                    exit_message = row[0]
                    max_idle_time = row[1]
                    return exit_message,max_idle_time
                if row[0] == "Exit Message" and row[1] == "Time":
                    flag = True

    except Exception as e:
        print("error in csv_functions.py", e)
        return None


#usr, psw = credential_grab_csv("deneme_1.csv")


'''
import csv

with open('source.csv') as csv_file:
    csv_reader = csv.reader(csv_file)
    rows = list(csv_reader)

    print(rows[8])
    print(rows[22])
'''

print(successful_message_csv("deneme_1.csv"))
