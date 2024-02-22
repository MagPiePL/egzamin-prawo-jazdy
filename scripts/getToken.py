# getToken.py
import os
from selenium.webdriver.common.by import By
from dotenv import load_dotenv
from selenium.webdriver import ChromeService
from seleniumwire import webdriver

load_dotenv()

def login(driver):
    email = os.getenv("EMAIL")
    password = os.getenv("PASSWORD")

    driver.find_element(By.ID, "username").send_keys(email)
    driver.find_element(By.ID, "password").send_keys(password)
    driver.find_element(By.ID, "register-button").click()

def main():
    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    chromedriver_path = os.path.join(project_dir, "utils", "chromedriver.exe")

    url = "https://info-car.pl/oauth2/login"
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--log-level=3')
    options.page_load_strategy = 'normal'

    service = ChromeService(executable_path=chromedriver_path)
    driver = webdriver.Chrome(service=service, options=options)


    driver.get(url)
    login(driver)

    searchUrl = "https://info-car.pl/oauth2/userinfo"
    for request in driver.requests:
        if request.url == searchUrl:
            print(request.headers['Authorization'])

    # driver.quit()

main()