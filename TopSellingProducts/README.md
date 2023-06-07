# TopSellingProducts

This project is a Node.js application that fetches the top-selling products from a Magento Community Edition store using the provided API keys. It returns the products that sold the most in the last X days, along with the amount sold, the orders in which they were sold, and the total value of sales for each product.

## Prerequisites

- Node.js installed on your system
- Magento Community Edition store with admin credentials and API keys

## Installation

1. Clone the repository:

```
git clone https://github.com/juniorvish/TopSellingProducts.git
```

2. Navigate to the project directory:

```
cd TopSellingProducts
```

3. Install the required dependencies:

```
npm install
```

4. Create a `config.js` file in the `config` folder and add your Magento API keys:

```javascript
module.exports = {
  MAGENTO_API_KEY: 'your_api_key',
  MAGENTO_API_SECRET: 'your_api_secret',
};
```

## Usage

1. Start the application:

```
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter the number of days (X) to fetch the top-selling products and click the "Submit" button.

4. The application will display the top-selling products, the amount sold, the orders in which they were sold, and the total value of sales for each product.

## License

This project is licensed under the MIT License.