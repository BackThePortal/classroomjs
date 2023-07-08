export type Arrayable<T> = T | T[];

export type Nullable<T> = T | undefined | null;

/**
 * @author Aleksey L. from {@link https://stackoverflow.com/questions/52489261/typescript-can-i-define-an-n-length-tuple-type this StackOverflow question}
 */
export type Tuple<T, N extends number> = N extends N
	? number extends N
		? T[]
		: _TupleOf<T, N, []>
	: never;

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
	? R
	: _TupleOf<T, N, [T, ...R]>;

export interface Size {
	width: number;
	height: number;
}
