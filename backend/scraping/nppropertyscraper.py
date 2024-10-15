import requests
from bs4 import BeautifulSoup
import json 
import utils

# URL of the page to scrape
url = "https://nepalpropertybazaar.com/status/for-rent/"

# Function to extract data from each property div
def extractDataFromDiv(div):
    # Extract the first image from the image collection
    data_images = div['data-images']
    images_list = json.loads(data_images)
    img_src = images_list[0]['image']

    # Extract the title and href link from the <h2> tag
    title_tag = div.find('h2', class_='item-title')
    title = title_tag.text.strip()
    link = title_tag.find('a')['href']

    # Extract the price from the price wrap
    price_tag = div.find('li', class_='item-price')
    price = price_tag.text.strip()
    price_numeric = utils.price_parser(price)

    # Extract the address
    address_tag = div.find('address', class_='item-address')
    address = address_tag.text.strip()

    # Return the extracted data
    return {
        'title': title,
        'link': link,
        'img_src': img_src,
        'address': address, 
        'price': price_numeric
    }

# Function to scrape data from the live website
def scrapeData():
    response = requests.get(url)  # Fetch the webpage content
    soup = BeautifulSoup(response.content, "html.parser")  # Parse the webpage with BeautifulSoup

    dataObjectArray = []
    # Find all available-property divs
    item_listing_divs = soup.find_all('div', class_='item-listing-wrap')

    # Loop through each property div and extract data
    for div in item_listing_divs:
        data = extractDataFromDiv(div)
        dataObjectArray.append(data)

    return dataObjectArray

# Call the scraping function and store the result
scraped_data = scrapeData()

# Print or process the scraped data
for data in scraped_data:
    print(data)
