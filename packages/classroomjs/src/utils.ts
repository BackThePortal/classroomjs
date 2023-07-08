import { Person, PersonRaw } from './types';

export class Utils {
	static normalizePerson(person: PersonRaw): Person {
		return typeof person === 'string'
			? { name: person, surname: '' }
			: Array.isArray(person)
			? { name: person[0], surname: person[1] }
			: person;
	}
}
