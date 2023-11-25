/* eslint no-cond-assign:0 */

// external
import { isArray, isPlainObject, isMap } from 'typechecker'

/**
 * Iterate through the subject with the callback.
 * If you ECMAScript version supports it, use `for ( const [key, value] of Object.entries(thing) )` instead.
 * @throws if subject is not an array, plain object, or map
 */
export default function eachr<T extends any>(
	subject: T,
	callback: (this: T, value: any, key: any, subject: T) => boolean | void
): T {
	if (isArray(subject)) {
		for (let key = 0; key < subject.length; ++key) {
			const value = subject[key]
			if (callback.call(subject, value, key, subject) === false) {
				break
			}
		}
	} else if (isPlainObject(subject)) {
		for (const key in subject) {
			if (subject.hasOwnProperty(key)) {
				const value = subject[key]
				if (callback.call(subject, value, key, subject) === false) {
					break
				}
			}
		}
	} else if (isMap(subject)) {
		const entries = subject.entries()
		let entry
		while ((entry = entries.next().value)) {
			const [key, value] = entry // destructuring
			if (callback.call(subject, value, key, subject) === false) {
				break
			}
		}
	} else {
		// Perhaps falling back to a `for of` loop here would be sensible
		throw new Error('eachr does not know how to iterate what was passed to it')
	}

	// return
	return subject
}
