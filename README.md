# KCL Javascript/Typescript SDK

Synchronized from the repo: https://github.com/kcl-lang/lib/tree/main/nodejs

## Installation

```shell
npm install kcl-lib
```

## Quick Start

```typescript
import { execProgram, ExecProgramArgs } from "kcl-lib";

function main() {
  const result = execProgram(new ExecProgramArgs(["schema.k"]));
  console.log(result.yamlResult);
}

main();
```

## Developing

- Install `node.js` and `pnpm`
- Install `cargo` (for Rust code)
- Install dependencies

```shell
pnpm install
```

### Building

```shell
pnpm build
```

### Testing

```shell
pnpm test
```

### Format

```shell
pnpm format
```
