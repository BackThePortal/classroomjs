---
editLink: false
---

[API Documentation](../index.md) / Classroom

# Class: Classroom

ClassroomJS instance.

**`Example`**

Access utility functions using the class' static methods.
```ts
Classroom.normalizePerson('Charles')
```

## Hierarchy {#Hierarchy}

- `Utils`

  ↳ **`Classroom`**

## Constructors {#Constructors}

### constructor {#Constructors-constructor}

• **new Classroom**(`people`, `options?`, `properties?`)

#### Parameters {#Constructors-constructor-Parameters}

| Name | Type |
| :------ | :------ |
| `people` | `Arrayable`<[`PersonRaw`](../index.md#personraw)\> |
| `options?` | `Object` |
| `properties?` | `Object` |

#### Overrides {#Constructors-constructor-Overrides}

Utils.constructor

## Properties {#Properties}

### people {#Properties-people}

• **people**: [`PersonKeyed`](../interfaces/PersonKeyed.md)[]

___

### properties {#Properties-properties}

• **properties**: `Object`

## Methods {#Methods}

### normalisePerson {#Methods-normalisePerson}

▸ `Static` `Protected` **normalisePerson**(`person`): [`Person`](../interfaces/Person.md)

#### Parameters {#Methods-normalisePerson-Parameters}

| Name | Type |
| :------ | :------ |
| `person` | [`PersonRaw`](../index.md#personraw) |

#### Returns {#Methods-normalisePerson-Returns}

[`Person`](../interfaces/Person.md)

#### Inherited from {#Methods-normalisePerson-Inherited-from}

Utils.normalisePerson

___

### getPerson {#Methods-getPerson}

▸ **getPerson**(`query`, `key?`): `Nullable`<[`Person`](../interfaces/Person.md) \| [`PersonKeyed`](../interfaces/PersonKeyed.md)\>

Get the. Returns

#### Parameters {#Methods-getPerson-Parameters}

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`PersonQuery`](../index.md#personquery) |  |
| `key?` | `boolean` | Include the key in the returned object. |

#### Returns {#Methods-getPerson-Returns}

`Nullable`<[`Person`](../interfaces/Person.md) \| [`PersonKeyed`](../interfaces/PersonKeyed.md)\>

___

### getHighestKey {#Methods-getHighestKey}

▸ **getHighestKey**(): ``null`` \| `number`

Gets the highest key in the people array. Returns null if the array is empty.

#### Returns {#Methods-getHighestKey-Returns}

``null`` \| `number`

___

### resetKeys {#Methods-resetKeys}

▸ **resetKeys**(): `void`

Resets keys in each person for them to be in ascending order, replacing the values in the locations.

**`See`**

[PersonKeyed](../interfaces/PersonKeyed.md)

#### Returns {#Methods-resetKeys-Returns}

`void`

___

### sort {#Methods-sort}

▸ **sort**(): `void`

Sorts people array based on the surname, placing empty values at the end.

#### Returns {#Methods-sort-Returns}

`void`
