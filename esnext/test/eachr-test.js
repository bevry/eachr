# Import
{expect} = require('chai')
joe = require('joe')
each = require('../..')

# Test
joe.describe 'eachr', (describe,it) ->

	# Arrays
	it 'should cycle arrays',->
		# Prepare
		arr = ["first", "second", "third"]
		expected = [
			["first",  0, arr, arr]
			["second", 1, arr, arr]
			"break"
		]
		actual = []

		# Cycle
		result = each arr, (value, key, subject) ->
			actual.push([value, key, subject, @])
			if value is "second"
				actual.push("break")
				return false

		# Check
		expect(actual).to.deep.equal(expected)
		expect(result).to.equal(arr)

	# Objects
	it 'should cycle objects',->
		# Prepare
		obj = {a:"first", b:"second", c:"third"}
		expected = [
			["first",  "a", obj, obj]
			["second", "b", obj, obj]
			"break"
		]
		actual = []

		# Cycle
		result = each obj, (value, key, subject) ->
			actual.push([value, key, subject, @])
			if value is "second"
				actual.push("break")
				return false

		# Check
		expect(actual).to.deep.equal(expected)
		expect(result).to.equal(obj)
