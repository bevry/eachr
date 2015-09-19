# Import
typeChecker = require('typechecker')

# Define
eachr = (subject,callback,context) ->
	# Handle
	if typeChecker.isArray(subject)
		for value,key in subject
			if callback.apply(subject,[value,key,subject]) is false
				break
	else
		for own key,value of subject
			if callback.apply(subject,[value,key,subject]) is false
				break

	# Return
	subject

# Export
module.exports = eachr