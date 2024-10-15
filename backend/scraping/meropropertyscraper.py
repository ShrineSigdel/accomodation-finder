import requests
from bs4 import BeautifulSoup
import utils

# Base URL (if needed to form complete URLs)
base_url = "https://meroproperty.com/"

# Function to extract data from each property div
def extractDataFromDiv(property_div):
    # Extract the image link
    img_div = property_div.find("div", class_="img-wrapper")
    img_tag = img_div.find("img")
    img_src = base_url + img_tag['src'] if img_tag else None

    # Extract the title and href from the <h3> tag
    h3_tag = property_div.find("h3")
    a_tag = h3_tag.find("a")
    title = a_tag.get_text(strip=True) if a_tag else None
    link = base_url + a_tag['href'] if a_tag else None

    # Extract the address
    address_div = property_div.find("div", class_="address")
    address = address_div.get_text(strip=True) if address_div else None

    # Extract the price
    price_div = property_div.find("div", class_="display-price")
    price_tag = price_div.find("a") if price_div else None
    price = price_tag.get_text(strip=True) if price_tag else None
    price_numeric = utils.price_parser(price) if price else None

    # Return the extracted data
    return {
        'title': title,
        'link': link,
        'img_src': img_src,
        'address': address, 
        'price': price_numeric
    }

# Function to scrape data from the website
def scrapeData():
    url = "https://meroproperty.com/flat-for-rent"  # The URL of the website to scrape
    response = requests.get(url)  # Fetch the webpage content
    soup = BeautifulSoup(response.content, "html.parser")  # Parse the webpage with BeautifulSoup

    dataObjectArray = []
    avail_property_divs = soup.find_all('div', class_='avail-property')

    # Loop through each property div and extract data
    for div in avail_property_divs:
        data = extractDataFromDiv(div)
        dataObjectArray.append(data)
        
    return dataObjectArray

# Call the scraping function and store the result
scraped_data = scrapeData()

# Print or process the scraped data
for data in scraped_data:
    print(data)
