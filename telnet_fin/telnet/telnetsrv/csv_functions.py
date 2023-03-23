import csv
import time
import os

def credential_grab_csv(csv_file):
    '''
    Returns default credentials of the device
    '''
    with open(csv_file, 'r') as csvfile:
        csv_reader = csv.reader(csvfile)
        rows = list(csv_reader)
        username_valid = rows[1][0]
        password_valid = rows[1][1]

        return username_valid, password_valid
    
def command_grab_csv(input_command, csv_file):
    ''' 
    If command is in csv it returns the corresponding output
    otherwise it returns None
    '''
    with open(csv_file, 'r') as csvfile:
        rows = csv.reader(csvfile)

        for row in rows:
            if input_command == row[0]:
                # command is in csv file
                return row[1]
        return None

def max_attempt_count_grab_csv(csv_file):

    '''
    Returns maximum allowed faulty login attempts and the error message it produces
    '''
    with open(csv_file, 'r') as csvfile:
        csv_reader = csv.reader(csvfile)
        for row in csv_reader:
            if row[2] == -1:
                max_attempt_count = row[0]
                error_message = row[1]
                return max_attempt_count, error_message




def idle_time_grab_csv(csv_file):
    '''
    Returns maximum idle times allowed for the device
    and its error message 
    '''

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


    usr, psw = credential_grab_csv("deneme_1.csv")


'''
import csv

with open('source.csv') as csv_file:
    csv_reader = csv.reader(csv_file)
    rows = list(csv_reader)

    print(rows[8])
    print(rows[22])
'''

def mal_downloader(command):
	'''
	Takes command as input, downloads and zips each file from the links
	'''

	'''
	 **** Link Parsing Phase ****
	'''
	wget_links = []
	wget_count = command.count('wget')

	if wget_count > 0:
		wget_index = 0
		for i in range(wget_count):
			wget_index = command.find('wget', wget_index + i)
			http_index = command.find('http',wget_index)
			semi_colon_index = command.find(';',http_index)

			if semi_colon_index == -1:
				malware_link = command[wget_index:]
				wget_links.append(malware_link)
			else:
				malware_link = command[wget_index:semi_colon_index]
				wget_links.append(malware_link)
			print("hello by ege")
			#
			print("printing list")
			print(wget_links)

	#return wget_links

	'''
	 **** Download Phase ****
	'''
	for url in wget_links:
		cur_time = time.time()
		filename = str(int(cur_time))
		cmd = url + " -O ./malware_files/"
		print(cmd)
		os.system("echo Link: " + url)
		os.system(cmd)
		os.system('cd /home/nes/Desktop/HP2/HP/telnet_fin/telnet/malware_files; zip -P malware -r ../zip_malwares/' + filename + '.zip -i' + filename)
	'''
	for url in wget_links:
		req = requests.get(url)
		filename = req.url[url.rfind('/')+1:]

		with open(filename, 'wb') as f:
			for chunk in req.iter_content(chunk_size=8192):
				if chunk:
					f.write(chunk)

		#os.system('cd malware_files; zip -P malware -r ../zip_malwares/encrypted.zip ' + filename)
	'''
