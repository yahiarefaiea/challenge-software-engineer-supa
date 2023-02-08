import json
from seed import res

# output the result into the file system
content = json.dumps(res)
output = open('loginsRecords.json', 'w')
output.write(content)
output.close()

# print a message
print('\nThe output (./loginsRecords.json) has been generated into the file system.')
