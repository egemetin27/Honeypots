import requests
import os
import time
import re

def maldownloader(command):
	'''
	Takes command as input, downloads and zips each file from the links
	'''

	'''
	 **** Link Parsing Phase ****
	'''
	try:
		wget_links = []
		wget_count = command.count("wget http")

		if wget_count > 0:
			wget_index = -1
			print("WGET_COUNT:", wget_count)
			for i in range(wget_count):
				wget_index = command.find('wget http', wget_index + 1)
				space_index = command.find(' ', wget_index + 5)
				semi_colon_index = command.find(';', wget_index + 5)

				if space_index == -1 and semi_colon_index == -1:
					malware_link = command[wget_index:]
					wget_links.append(malware_link)
				elif space_index == -1 and semi_colon_index != -1:
					malware_link = command[wget_index:semi_colon_index]
					wget_links.append(malware_link)			
				else:
					malware_link = command[wget_index:space_index]
					wget_links.append(malware_link)

				
		print("printing list")
		#return wget_links

		'''
		**** Download Phase ****
		'''
		print(wget_links)
		for url in wget_links:
			url = url.strip()
			cur_time = time.time()
			filename = url[url.rfind('/')+1:].strip()
			cmd = url + " -O ./malware_files/" + filename
			print(cmd)
			os.system(cmd)
			os.system('zip -r -P malware ./zip_malwares/' + filename + '.zip ./malware_files')
			os.system('rm ./malware_files/' + filename)
	except Exception as e:
		print(e)

#maldownloader('wget https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.17.2.tar.xz')
#maldownloader('wget https://cdn.kernel.org/pub/linux/kernel/v4.x/ChangeLog-4.0.1.sign')

filename = "/home/nes/Desktop/hp_new/HP/extract_file_all.txt"



# with open(filename, 'r', errors='ignore') as f:./zip_malwares/' + filename + '.zip'
# with open(filename, 'rb') as f:
# 	entire_text = f.read().decode("utf-8", "ignore")

# session_commands = entire_text.split("Telnet> ")
# index = 0
# for query in session_commands[1:]:
# 	index +=1
# 	query = query.strip()
# 	command = query.split(' ')[0].lower()
# 	if command == "wget":
# 		s = re.sub(r'[\^[[D\^[[P\^G]', '', query)
# 		maldownloader(s)
