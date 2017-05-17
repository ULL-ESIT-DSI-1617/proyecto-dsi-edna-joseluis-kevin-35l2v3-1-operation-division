"use strict";

var chai = require("chai");
var assert = chai.assert;
var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");
var Division = require("../index.js");

describe('operation', function() {
	it('2/2', function() {
		var result = Operation.operate("2/2");
		assert.equal(result, 1);
	});
});
