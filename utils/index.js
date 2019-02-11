/**
 * @param modelType String
 * @param consumption NUmber
 * @return Number
 */
const calculationModel = (modelType, consumption = 0) => {
  // number of months in a year
  const oneYear = 12;

  // 22 cent
  const priceForOneKWH = 22;

  // 100 cent = 1Euro
  const oneEuro = 100;

  if (modelType && modelType === "basic") {
    // 5 Euro
    const basicCostPerMonth = 5;

    // calculate consumption cost
    const consumptionCost = priceForOneKWH * consumption;

    // calculate annual cost
    const annualCost = (
      basicCostPerMonth * oneYear +
      consumptionCost / oneEuro
    ).toFixed(2);

    return +annualCost;
  } else if (modelType && modelType === "packaged") {
    let annualCost = 0;

    // 800 Euro
    const basePrice = 800;
    const baseConsumption = 4000;

    // when the consumption is up to the base consumption
    if (consumption <= baseConsumption) {
      annualCost = basePrice.toFixed(2);
      return +annualCost;
    }


    // when the consumption is over the base consumption
    if (consumption > baseConsumption) {
      annualCost = (
        basePrice +
        ((consumption - baseConsumption) * 30) / oneEuro
      ).toFixed(2);
      return +annualCost;
    }
  }

  return 0;
};

module.exports = {
  calculationModel
};
