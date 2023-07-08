---
title: Getting started
---

# Getting started

## Prerequisites

[TypeScript](https://typescriptlang.org/) is optional but strongly recommended. If using TypeScript, it is advised to use 4.9> and a good IDE.

## Installation

ClassroomJS is available as a package on the npm registry. Install the latest version using one of the following commands:

::: code-group

```sh [npm]
$ npm install -D classroomjs
```

```sh [pnpm]
$ pnpm add -D classroomjs
```

```sh [yarn]
$ yarn add -D classroomjs
```

:::

## Use It

Once ClassroomJS is installed, simply import the class `Classroom` and create your instance.

::: code-group

```js
import { Classroom } from 'classroomjs';

const myClassroom = new Classroom(['Charles', 'George', 'Lily'], {});

myClassroom.addPerson('Martha');
```
