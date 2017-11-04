const chai = require('chai');
const assert = chai.assert;

const shouldBuyCar = require('../cars.js');

describe("#shouldBuyCar()", function() {

  it("should throw an error when there is no car", function() {
    assert.throws(shouldBuyCar);
  });
  
  it("should return false when there are no details about the car", function() {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car is pink", function() {
    const car = {
      color: "Pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false if it's a hatchback and pink", function() {
    const car = {
      color: "Pink",
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true if it's 6 litres/100km and under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if it's 11 litres/100km  and under or equal to $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true if it's 6 litres/100km and over $5,000", function() {
    const car = {
      litresPer100km: 6,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true if it's 11 litres/100km and over $5,000", function() {
    const car = {
      litresPer100km: 11,
      price: 5001
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });


  it("should return false if it's 5 litres/100km and under or equal to $5,000", function() {
    const car = {
      litresPer100km: 5,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
    
  it("should return true if it's 12 litres/100km and under or equal to $5,000", function() {
    const car = {
      litresPer100km: 12,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
    
});