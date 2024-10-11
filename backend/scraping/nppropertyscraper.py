
from bs4 import BeautifulSoup
import json 
import utils

url = "https://nepalpropertybazaar.com/status/for-rent/"

with open("data/npproperty.html", "r") as file:
    response = file.read()
    soup = BeautifulSoup(response, "html.parser")
    


def extractDataFromDiv( div):
    #Extract the first image from image collection
    data_images = div['data-images']
    images_list = json.loads(data_images)
    img_src = images_list[0]['image']


    #Extract the title and href link from h2 tag
    title_tag = div.find('h2', class_='item-title')
    title = title_tag.text.strip()
    link = title_tag.find('a')['href']

    #Extract the price from the price wrap
    price_tag = div.find('li', class_ = 'item-price')
    price = price_tag.text.strip()
    price_numeric = utils.price_parser(price)

    #Extract the address
    address_tag = div.find('address', class_='item-address')
    address = address_tag.text.strip()
    
    return {
            'title': title,
            'link': link,
            'img_src': img_src,
            'address': address, 
            'price': price_numeric
            } 
    
dataObjectArray = []

#Find all available-property divs - for now only one div
item_listing_divs = soup.find_all('div', class_='item-listing-wrap')

#Loop through each property div and extract data
for div in item_listing_divs:
    data = extractDataFromDiv(div)
    dataObjectArray.append(data)

print(dataObjectArray)




        
        