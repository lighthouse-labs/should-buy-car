const chai = require('chai');
const assert = chai.assert;

const shouldBuyCar = require('../cars.js');

describe("#shouldBuyCar()", function() {
  
  it("should do something", function() {
    assert.isTrue(shouldBuyCar());
  });

});