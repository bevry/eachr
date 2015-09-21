// Import
const {equal, deepEqual} = require('assert-helpers')
const joe = require('joe')
const eachr = require('../..')

// Test
joe.suite('eachr', function (suite, test) {

	// Arrays
	test('should cycle arrays', function () {
		// Prepare
		const arr = ['first', 'second', 'third']
		const expected = [
			['first',  0, arr, arr],
			['second', 1, arr, arr],
			'break'
		]
		const actual = []

		// Cycle
		const result = eachr(arr, function (value, key, subject) {
			equal(subject, arr, 'subject is as expected')
			actual.push([value, key, subject, this])
			if ( value === 'second' ) {
				actual.push('break')
				return false
			}
		})

		// Check
		deepEqual(actual, expected)
		equal(result, arr, 'result is the same object reference')
	})

	// Objects
	test('should cycle objects', function () {
		// Prepare
		const obj = {a: 'first', b: 'second', c: 'third'}
		const expected = [
			['first',  'a', obj, obj],
			['second', 'b', obj, obj],
			'break'
		]
		const actual = []

		// Cycle
		const result = eachr(obj, function (value, key, subject) {
			equal(subject, obj, 'subject is as expected')
			actual.push([value, key, subject, this])
			if ( value === 'second' ) {
				actual.push('break')
				return false
			}
		})

		// Check
		deepEqual(actual, expected)
		equal(result, obj, 'result is the same object reference')
	})

	// Objects
	test('should cycle maps', function () {
		// Prepare
		const map = new Map([['a', 'first'], ['b', 'second'], ['c', 'third']])
		const expected = [
			['first',  'a', map, map],
			['second', 'b', map, map],
			'break'
		]
		const actual = []

		// Cycle
		const result = eachr(map, function (value, key, subject) {
			equal(subject, map, 'subject is as expected')
			actual.push([value, key, subject, this])
			if ( value === 'second' ) {
				actual.push('break')
				return false
			}
		})

		// Check
		deepEqual(actual, expected)
		equal(result, map, 'result is the same object reference')
	})
})
