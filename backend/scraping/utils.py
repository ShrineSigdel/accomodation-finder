import re


        
        
        

def price_parser(price):
    try:
        # Use regex to extract only the numeric part, ignoring any text like 'Rs' or '/Month'
        numeric_price = re.search(r'\d+[,\d]*', price).group(0)
        # Remove commas and convert to integer
        return int(numeric_price.replace(",", ""))
    except (AttributeError, ValueError):
        return None


