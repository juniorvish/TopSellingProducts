const axios = require('axios');
const config = require('../config/config');

const getTopSellingProducts = async (days) => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - days);
  const formattedDate = formatDate(fromDate);

  const apiUrl = `${config.magento.baseUrl}/rest/V1/orders?searchCriteria[filter_groups][0][filters][0][field]=created_at&searchCriteria[filter_groups][0][filters][0][value]=${formattedDate}&searchCriteria[filter_groups][0][filters][0][condition_type]=gteq`;

  const response = await axios.get(apiUrl, {
    headers: {
      'Authorization': `Bearer ${config.magento.apiKey}`,
      'Content-Type': 'application/json'
    }
  });

  const orders = response.data.items;
  const productStats = {};

  orders.forEach(order => {
    order.items.forEach(item => {
      if (!productStats[item.product_id]) {
        productStats[item.product_id] = {
          product_id: item.product_id,
          product_name: item.name,
          amount_sold: 0,
          order_count: 0,
          total_sales_value: 0
        };
      }

      productStats[item.product_id].amount_sold += item.qty_ordered;
      productStats[item.product_id].order_count += 1;
      productStats[item.product_id].total_sales_value += item.row_total;
    });
  });

  const topSellingProducts = Object.values(productStats).sort((a, b) => b.amount_sold - a.amount_sold);

  return topSellingProducts;
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

module.exports = {
  getTopSellingProducts
};