const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default compose;
