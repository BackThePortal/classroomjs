import {
	Arrayable,
	Nullable,
	Person,
	PersonKeyed,
	PersonQuery,
	PersonRaw,
} from './types';
import { Utils } from './utils';

/**
 * ClassroomJS instance.
 *
 * @example
 * Access utility functions using the class' static methods.
 * ```ts
 * Classroom.normalizePerson('Charles')
 * ```
 */
export class Classroom extends Utils {
	people: PersonKeyed[];
	properties: Object;

	//registry: {};

	constructor(
		people: Arrayable<PersonRaw>,
		options?: Object,
		properties?: Object
	) {
		super();
		this.people = [people].flat().map((item, index) => ({
			...Utils.normalizePerson(item),
			key: index,
		}));
		this.properties = properties ?? {};
	}

	/**
	 * Get the. Returns
	 * @param query -
	 * @param key - Include the key in the returned object.
	 */
	public getPerson(
		query: PersonQuery,
		key?: boolean
	): Nullable<Person | PersonKeyed> {
		return this.people.length === 0
			? null
			: typeof query === 'string'
			? this.people.find((person) => person.surname === query) ??
			  this.people.find((person) => person.name === query)
			: this.people.find((student) =>
					typeof query === 'number'
						? student.key === query
						: typeof query === 'object'
						? student.name === (Array.isArray(query) ? query[0] : query.name) &&
						  student.surname ===
								(Array.isArray(query) ? query[1] : query.surname)
						: false
			  );
	}

	/**
	 * Gets the highest key in the people array. Returns null if the array is empty.
	 */
	public getHighestKey(): number | null {
		return this.people.length !== 0
			? this.people.reduce((prev, current) =>
					prev.key > current.key ? prev : current
			  ).key
			: null;
	}

	/**
	 * Resets keys in each person for them to be in ascending order, while also replacing the values in the registry.
	 *
	 * @see {@link PersonKeyed}
	 */
	public resetKeys(): void {
		//this.people.forEach(item);
	}

	/**
	 * Sorts people array based on the surname, placing empty values at the end.
	 */
	public sort(): void {
		this.people.sort((a, b) => {
			const comparison = a.surname
				.toLowerCase()
				.localeCompare(b.surname.toLowerCase());
			return comparison === 0
				? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
				: comparison;
		});

		this.people
			.filter((item) => item.surname === '')
			.map((item, array) => {
				console.log(array);
				this.people.push(this.people.splice(this.people.indexOf(item), 1)[0]);
			});
	}
}
