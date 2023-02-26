### cloneDeep

cloneDeep 은 만들면서 하나의 유틸에서 얼마나 많은 파생유틸이 나올 수 있는지, 단일기능이 무엇인지 간접적으로 보여주기 좋은 유틸입니다. 멘티분들은 메인함수에 모든 기능을 모두 짜거나 굉장히 복잡한 조건문을 통해 코드를 짜곤합니다. 복잡한 코드를 아래와 유사한 형태로 리팩토링 하는 과정을 포함시켜 함수 기능을 어떻게 최소화 하는지 배웁니다.

**cloneDeep.ts**

```jsx
// 여기에 작성
```
<br />


### memoize

함수에 대한 이해 및 구현 난이도가 높은 함수입니다. 최대한 작성해주시고, 자바스크립트로 작성해주셔도 무관합니다.

**memoize.js**

```tsx
/**
 * 인자로 주어진 함수를 메모아이징합니다. resolver 함수를 인자를 넘겨 메모아이징을 수행할 기준을 정할 수 있습니다.
 *
 * @example
 * ```ts
 * const foo = { a: 1, b: 2 };
 * const func = memoize((value) => Object.values(value));
 *
 * cosnole.log(func(foo)); // [1, 2]
 * foo.a = 2;
 * console.log(func(foo)); // [1, 2]
 *
 * func.cache.delete(foo);
 * console.log(func(foo)); // [2, 2]
**/
```
<br />

### 오브젝트를 만드는 3가지 방법

```jsx
// 여기에 작성
```
