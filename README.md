# vmthread-sourcemap-repro
Reproduction case for vmthreads getting the wrong sourcemap location

# Steps
- Install deps `yarn install` or `npm install`
- Run tests `yarn test` or `npm test`

With `pool: 'threads'`, location works as expected
```
 FAIL  src/__tests__/sum.test.ts > sum
TypeError: Cannot set properties of undefined (setting 'name')
 ❯ Module.sum src/sum.ts:7:12
      5|
      6| export function sum(items: Item[]): number {
      7|   items[3].name = "break!";
       |            ^
      8|   return items.reduce((acc, item) => acc + item.count, 0);
      9| }
 ❯ src/__tests__/sum.test.ts:10:10
```

With `pool: 'vmThreads'`, location is wrong:
```
  FAIL  src/__tests__/sum.test.ts > sum
TypeError: Cannot set properties of undefined (setting 'name')
 ❯ Module.sum src/sum.ts:2:17
      1| interface Item {
      2|   name: string;
       |                 ^
      3|   count: number;
      4| }
 ❯ src/__tests__/sum.test.ts:10:54
```
