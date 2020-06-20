# [[![npm version]](https://www.npmjs.com/package/component-will-mount-hook)

component-will-mount-hook is an isomorphic hook which for functional components, which behaves in similar fashion to componentWilllMount lifecycle Method.

## What is componentWillMount lifecycle method?

componentWillMount() is invoked just before mounting occurs. It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering. Generally, we recommend using the constructor() instead for initializing state.
Avoid introducing any side-effects or subscriptions in this method. For those use cases, use componentDidMount() instead.
This is the only lifecycle method called on server rendering.

## Why component-will-

* **componentWillMount for functional components:** This can be used in the similar fashion as we use componentWillMount in class based components.
* **Hook-Based:** This can be used like any other hook in React like useEffect(), useRef().
* **Isomorphic:** This can be used on Both server as well as client. useEffect doesn't work on server. So this hook can be a good option.

## Installation

`npm i component-will-mount-hook`

## Examples

Here is the first one to get you started:

```jsx
import useComponentWilllMount from 'component-will-mount-hook'
function HelloMessage({ name }) {
    useComponentWilllMount(()=> {
        console.log('component will mount')
    });
  return <div>Hello {name}</div>;
}
```