import requests
import os
import time

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
		cmd = url + " -O ./malware_files/" + filename
		print(cmd)
		os.system(cmd)
		os.system('cd malware_files; zip -P malware -r ../zip_malwares/' + filename + '.zip ' + filename)
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