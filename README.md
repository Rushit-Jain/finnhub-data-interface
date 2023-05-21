# finnhub-data-interface
**This is a responsive (mobile-optimized) web application that allows you search for stock-related data for a company. All you need to know is the company's stock ticker symbol.**

## Technologies Used
**API**: Finnhub Stock API\
**Front-end**: HTML, CSS, Bootstrap, Highcharts, Vanilla JavaScript\
**Back-end**: Node.js, Express.js, EJS, Jest\
**Deployment Platform**: Google Cloud Platform (App Engine)

## Features
1. Mobile-optimized and responsive web application
2. Output includes company's general information, stock market-related information, stock price trend charts, and its mentions in recent news in a well-formatted manner
3. Up-to date information that corresponds to Finnhub's API and data update frequency
4. Deployed on a Google Cloud App Engine for high availability

## Demonstration & Usage
The application has been hosted on Google Cloud Platform and can be viewed here: ***[Finnhub Stock Interface](https://finnhub-stock-interface.wl.r.appspot.com)***\
Open the link mentioned above, type in the stock ticker symbol of a company you want information about and click the search button. It outputs a huge amount of information in a well-formatted manner for you to view and browse through. The website is responsive and has been built in a mobile-first fashion.

## Testing
The application has a test case written in Jest which is mentioned in the app.test.js file. To check the test case, clone the repository, navigate into it, and run the command `npm run test` on the terminal

## Extras
1. Sensitive information such as API key and other credentials are not present in the repository. Contact the author for information about that.
2. Although very complete with the limited features that the app possesses, I have made it open-source to invite suggestions on how it could be improved and prospects for collaboration.
