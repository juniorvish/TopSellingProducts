the app is: TopSellingProducts

the files we have decided to generate are: 
1. index.js (or main.go or Main.java)
2. magentoAPI.js (or magentoAPI.go or MagentoAPI.java)
3. productStats.js (or productStats.go or ProductStats.java)
4. server.js (or server.go or Server.java)
5. README.md
6. package.json (or go.mod or pom.xml)
7. index.html (if web-app)
8. styles.css (if web-app, using Tailwind CSS)

Shared dependencies:
1. API keys: MAGENTO_API_KEY, MAGENTO_API_SECRET
2. Data schemas: Product, Order
3. Exported variables: topSellingProducts, totalSalesValue, ordersCount
4. DOM element IDs (if web-app): productList, salesValue, ordersNumber
5. Message names: GET_TOP_SELLING_PRODUCTS, GET_PRODUCT_STATS
6. Function names: fetchTopSellingProducts, fetchProductStats, formatDate, displayResults
7. JSON parameter names: product_id, product_name, amount_sold, order_count, total_sales_value