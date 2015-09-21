// Import
const typeChecker = require('typechecker')

// Define
export default function eachr (subject, callback) {
	// Handle
	if ( typeChecker.isArray(subject) ) {
		for ( let key = 0, n = subject.length; key < n; ++key ) {
			const value = subject[key]
			if ( callback.call(subject, value, key, subject) === false ) {
				break
			}
		}
	}
	else if ( typeChecker.isPlainObject(subject) ) {
		for ( const key in subject ) {
			if ( subject.hasOwnProperty(key) ) {
				const value = subject[key]
				if ( callback.call(subject, value, key, subject) === false ) {
					break
				}
			}
		}
	}
	else if ( typeChecker.isMap(subject) ) {
		const entries = subject.entries()
		/* eslint no-cond-assign:0 */
		let entry; while ( entry = entries.next().value ) {
			const [key, value] = entry
			if ( callback.call(subject, value, key, subject) === false ) {
				break
			}
		}
	}
	else {
		throw new Error('I don\'t know how to iterate this.')
	}

	// Return
	return subject
}
