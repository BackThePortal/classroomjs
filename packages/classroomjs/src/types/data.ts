import { Size } from './generics';

export interface Person {
	name: string;
	surname: string;
}

/**
 * Person object with key, only used in people array.
 */
export interface PersonKeyed extends Person {
	/**
	 * 0-indexed unique identifier. Not guaranteed to be smaller than the number of people.
	 */
	key: number;
}

/**
 * Values that could refer to a person. Used for functions arguments.
 *
 */
export type PersonRaw = string | [name: string, surname: string] | Person;
export type PersonTuple = [name: string, surname: string];

/**
 * Number values refer to a key.
 */
export type PersonQuery = PersonRaw | number;

export interface Config extends Size {
	groups?: Size;
}
