from bs4 import BeautifulSoup
import utils

with open("data/meroProperty.html", "r") as file:
    response = file.read()
    soup = BeautifulSoup(response, "html.parser")

# Base URL (if needed to form complete URLs)
base_url = "https://meroproperty.com/"


    
def extractDataFromDiv (property_div):
    # Extract the image link
    img_div = property_div.find("div", class_="img-wrapper")
    img_tag = img_div.find("img")
    img_src = base_url + img_tag['src'] if img_tag else None

    # Extract the title and href from the <h3> tag
    h3_tag = property_div.find("h3")
    a_tag = h3_tag.find("a")
    title = a_tag.get_text(strip=True)
    link = base_url + a_tag['href'] if a_tag else None

    # Extract the address
    address_div = property_div.find("div", class_="address")
    address = address_div.get_text(strip=True)

    # Extract the price
    price_div = property_div.find("div", class_="display-price")
    price_tag = price_div.find("a")
    price = price_tag.get_text(strip=True)
    price_numeric = utils.price_parser(price) if price else None

    # Print the extracted data
    return {
            'title': title,
            'link': link,
            'img_src': img_src,
            'address': address, 
            'price': price_numeric
            } 

dataObjectArray = []

#Find all available-property divs - for now only one div
avail_property_divs = soup.find_all('div', class_='avail-property')

#Loop through each property div and extract data
for div in avail_property_divs:
    data = extractDataFromDiv(div)
    dataObjectArray.append(data)

print(dataObjectArray)