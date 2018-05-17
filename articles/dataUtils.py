# Crawler
from bs4 import BeautifulSoup
import urllib.request
import ssl

from html.parser import HTMLParser


def crawl_wiki(url):

    context = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Referer': 'http://www.python.org/',
    }
    request = urllib.request.Request(url, headers=headers)
    html_doc = urllib.request.urlopen(request, context=context).read()

    soup = BeautifulSoup(html_doc, 'html.parser')
    title = soup.title.text

    # Text extraction
    paragraphs = soup.find_all('p')
    text = paragraphs[0].get_text()

    data = {
        'title': title,
        'text': text,
    }

    return data
