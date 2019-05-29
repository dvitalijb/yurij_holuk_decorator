export const loggerDecorator = fn => (...args) => {
    const value = fn(...args);

    console.log('%c---------- Function log ----------', 'color: blue');
    console.log(`%cFunction name: %c${fn.name || 'Anonymous'}`, 'color: green', 'color: black');
    console.log(`%cArguments: %c${JSON.stringify(args, null, 4)}`, 'color: green', 'color: black');
    console.log(`%cResult: %c${JSON.stringify(value, null, 4)}`, 'color: green', 'color: black');
    console.log('%c----------------------------------', 'color: blue');

    return value;
};