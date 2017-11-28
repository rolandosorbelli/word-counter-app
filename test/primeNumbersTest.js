var chai = require("chai");
var expect = chai.expect;
var isPrime = require("../src/primeNumbers")

describe("primeNumbers", function() {
  it("tests if a number is prime", function() {
    expect(isPrime(2)).to.equal(true);
  });

  it("tests if a number is composite", function() {
    expect(isPrime(1)).to.equal(false);
  });
});