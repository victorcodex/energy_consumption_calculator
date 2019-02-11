const express = require("express");
const router = express.Router();

const consumptionModel = require("../../utils").calculationModel;

/**
 * @route GET api/products
 * @desc GET all products
 * @access Public
 */

router.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Basic Electricity Tariff",
    },
    {
      id: 2,
      name: "Package Tariff"
    }
  ]
  res.json({products});
});

/**
 * @route GET api/product/:consumption
 * @desc GET consumption cost
 * @access Public
 */
router.get("/:consumption", (req, res) => {
  const consumption = Number(req.params.consumption) || 0;

  console.log(consumption);

  const unsortedProducts = [
    {
      name: "Basic Electricity Tariff",
      annualCost: consumptionModel("basic", consumption)
    },
    {
      name: "Packaged Tariff",
      annualCost: consumptionModel("packaged", consumption)
    }
  ];

  const products = unsortedProducts.sort((a, b) => a.annualCost - b.annualCost);

  res.json({
    products
  });
});

module.exports = router;
