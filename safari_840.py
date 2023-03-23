######@Ege########
import copy
import csv

pages = {
    "/help/StatusHelpRpm.htm": "Status",
    "/help/WzdStartHelpRpm.htm": "Quick Setup",
    "/help/WlanNetworkHelpRpm.htm": "Wireless",
    "/help/GuestNetWirelessCfgHelpRpm.htm": "Guest Network",
    "/help/LanDhcpServerHelpRpm.htm": "DHCP",
    "/help/VirtualServerHelpRpm.htm": "Forwarding",
    "/help/BasicSecurityHelpRpm.htm": "Security",
    "/help/ParentCtrlHelpRpm.htm": "Parental Controls",
    "/help/AccessCtrlAccessRulesHelpRpm.htm": "Access Control",
    "/help/StaticRouteTableHelpRpm.htm": "Advanced Routing",
    "/help/QoSCfgHelpRpm.htm": "Bandwidth Control",
    "/help/LanArpBindingHelpRpm.htm": "IP & MAC Binding",
    "/help/NoipDdnsHelpRpm.htm": "Dynamic DNS",
    "/help/IPv6StatusHelpRpm.htm": "IPv6",
    "/help/DateTimeCfgHelpRpm.htm": "System Tools"
}

numVisitsDefault = {
    "IP": "0.0.0.0",
    "Status": 0,
    "Quick Setup": 0,
    "Wireless": 0,
    "Guest Network": 0,
    "DHCP": 0,
    "Forwarding": 0,
    "Security": 0,
    "Parental Controls": 0,
    "Access Control": 0,
    "Advanced Routing": 0,
    "Bandwidth Control": 0,
    "IP & MAC Binding": 0,
    "Dynamic DNS": 0,
    "IPv6": 0,
    "System Tools": 0,
}

numVisits = {
    "IP": "0.0.0.0",
    "Status": 0,
    "Quick Setup": 0,
    "Wireless": 0,
    "Guest Network": 0,
    "DHCP": 0,
    "Forwarding": 0,
    "Security": 0,
    "Parental Controls": 0,
    "Access Control": 0,
    "Advanced Routing": 0,
    "Bandwidth Control": 0,
    "IP & MAC Binding": 0,
    "Dynamic DNS": 0,
    "IPv6": 0,
    "System Tools": 0,
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
            # print(numVisits)

            # Save the dict into the csv for saving visited pages based on IP
            UpdatePageEntries()

            # Reset the dict for each line 
            numVisits = copy.deepcopy(numVisitsDefault)

