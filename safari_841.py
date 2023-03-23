######@Ege########
import copy
import csv

pages = {
    "/userRpm/StatusRpm.htm": "Status",
    "/userRpm/WzdStartRpm.htm": "Quick Setup",
    "/userRpm/WpsCfgRpm.htm": "WPS",
    "/userRpm/WanDynamicIpCfgRpm.htm": "WAN",
    "/userRpm/MacCloneCfgRpm.htm": "MAC Clone",
    "/userRpm/NetworkCfgRpm.htm": "LAN",
    "/userRpm/WlanNetworkRpm.htm": "Wireless Settings",
    "/userRpm/WlanSecurityRpm.htm": "Wireless Security",
    "/userRpm/WlanMacFilterRpm.htm": "Wireless MAC Filtering",
    "/userRpm/WlanAdvRpm.htm": "Wireless Advanced",
    "/userRpm/WlanStationRpm.htm": "Wireless Statistics",
    "/userRpm/LanDhcpServerRpm.htm": "DHCP-DHCP Settings",
    "/userRpm/VirtualServerRpm.htm": "Forwarding-Virtual Servers",
    "/userRpm/BasicSecurityRpm.htm": "Security-Basic Security",
    "/userRpm/ParentCtrlRpm.htm": "Parent Control",
    "/userRpm/AccessCtrlAccessRulesRpm.htm": "Access Control-Rule",
    "/userRpm/StaticRouteTableRpm.htm": "Advanced Routing-Static Routing List",
    "/userRpm/QoSCfgRpm.htm": "Bandwidth Control-Control Settings",
    "/userRpm/LanArpBindingRpm.htm": "IP & MAC Binding-Binding Settings",
    "/userRpm/DdnsAddRpm.htm": "Dynamic DNS",
    "/userRpm/DateTimeCfgRpm.htm": "System Tools-Time Settings"
}

numVisitsDefault = {
    "IP": 0,
    "Status": 0,
    "Quick Setup": 0,
    "WPS": 0,
    "WAN": 0,
    "MAC Clone": 0,
    "LAN": 0,
    "Wireless Settings": 0,
    "Wireless Security": 0,
    "Wireless MAC Filtering": 0,
    "Wireless Advanced": 0,
    "Wireless Statistics": 0,
    "DHCP-DHCP Settings": 0,
    "Forwarding-Virtual Servers": 0,
    "Security-Basic Security": 0,
    "Parent Control": 0,
    "Access Control-Rule": 0,
    "Advanced Routing-Static Routing List": 0,
    "Bandwidth Control-Control Settings": 0,
    "IP & MAC Binding-Binding Settings": 0,
    "Dynamic DNS": 0,
    "System Tools-Time Settings": 0
}

numVisits = {
    "IP": 0,
    "Status": 0,
    "Quick Setup": 0,
    "WPS": 0,
    "WAN": 0,
    "MAC Clone": 0,
    "LAN": 0,
    "Wireless Settings": 0,
    "Wireless Security": 0,
    "Wireless MAC Filtering": 0,
    "Wireless Advanced": 0,
    "Wireless Statistics": 0,
    "DHCP-DHCP Settings": 0,
    "Forwarding-Virtual Servers": 0,
    "Security-Basic Security": 0,
    "Parent Control": 0,
    "Access Control-Rule": 0,
    "Advanced Routing-Static Routing List": 0,
    "Bandwidth Control-Control Settings": 0,
    "IP & MAC Binding-Binding Settings": 0,
    "Dynamic DNS": 0,
    "System Tools-Time Settings": 0
}

#Create the csv file - only for INITIALIZATION if fields do not exist in csv
def InitializeCSVForPages():
    with open("./a.csv", "w", newline='') as f:
        writer = csv.DictWriter(f, fieldnames=numVisits.keys())
        writer.writeheader()
        writer.writerow(numVisits)

def UpdatePageEntries():
    with open('a.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        rows = list(reader)

    # Find the dictionary in the list with the matching "IP" field if the IP is saved before
    matching_row = None
    for row in rows:
        if row['IP'] == numVisits['IP']:
            matching_row = row
            break

    newLineWillBeAdded = False 

    # If a matching row was found, update the values
    if matching_row is not None:
        for key in numVisits:
            # Update the value in the matching row with the sum of the current value and the new value
            if key != "IP": 
                matching_row[key] = int(matching_row[key]) + int(numVisits[key])
    else: 
        matching_row = numVisits
        newLineWillBeAdded = True

    # Write the updated list back to the CSV file
    with open('a.csv', 'w', newline='') as csvfile:
        # Create a CSV writer object
        writer = csv.DictWriter(csvfile, fieldnames=numVisits.keys())

        # Write the header row
        writer.writeheader()
        # Write the updated rows
        writer.writerows(rows)

        if newLineWillBeAdded == True:
            writer.writerow(matching_row)
        # writer.writerow(matching_row) # We need to use "a" mode instead of "w" to add this row to end


with open("extract_file_HTTP.txt", "r") as f:
    #entire_text = f.read().decode("latin-1")
    for line in f:
        if "/help/" in line:
            line = line.split("\t")
            ip = line[0]
            method = line[1]
            url = line[2]
            # print(url, ip)

            # Update visited pages based on IP
            if url in pages:
                numVisits[pages[url]] += 1  
            numVisits["IP"] = ip
            # print(numVisits)

            # Save the dict into the csv for saving visited pages based on IP
            UpdatePageEntries()

            # Reset the dict for each line 
            numVisits = copy.deepcopy(numVisitsDefault)

