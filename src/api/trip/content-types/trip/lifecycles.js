"use strict";

const calculateTotalCost = (data) => {
  const fuelCost = Number(data.fuelCost) || 0;
  const mealPrice = Number(data.mealPrice) || 0;
  const parkingCost = Number(data.parkingCost) || 0;
  const tollCost = Number(data.tollCost) || 0;
  const fineCost = Number(data.fineCost) || 0;
  const otherCosts = Number(data.otherCosts) || 0;

  return fuelCost + mealPrice + parkingCost + tollCost + fineCost + otherCosts;
};

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    data.totalCost = calculateTotalCost(data);
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (
      data.fuelCost !== undefined ||
      data.mealPrice !== undefined ||
      data.parkingCost !== undefined ||
      data.tollCost !== undefined ||
      data.fineCost !== undefined ||
      data.otherCosts !== undefined
    ) {
      data.totalCost = calculateTotalCost(data);
    }
  },
};
