var assert = chai.assert;

suite('operation-division', function() {
	setup(function() {
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__['tests/index.html'];
			original = document.getElementById('original');
			operated = document.getElementById('operated');
		}
	});
	
	test('2/2', function() {
		original.value = '2/2';
		main();
		assert.equal(operated, 1);
	});
});