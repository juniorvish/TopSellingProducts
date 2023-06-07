const magentoService = require('../services/magentoService');

async function getTopSellingProducts(req, res) {
  try {
    const days = parseInt(req.query.days);
    if (isNaN(days) || days <= 0) {
      return res.status(400).json({ error: 'Invalid days parameter' });
    }

    const topSellingProducts = await magentoService.fetchTopSellingProducts(days);
    res.status(200).json(topSellingProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching top selling products' });
  }
}

module.exports = {
  getTopSellingProducts,
};