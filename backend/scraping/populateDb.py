import requests
import meropropertyscraper
import nppropertyscraper
meropropertyData = meropropertyscraper.scrapeData()
nppropertyData = nppropertyscraper.scrapeData()
combinedlistings = meropropertyData + nppropertyData

# Send data to Express API
for listing in combinedlistings:
    response = requests.post('http://localhost:5000/api/listings', json=listing)
    if response.status_code == 201:
        print(response.json())
    else:
        print(f"Failed to insert: {response.json()}")
    
    