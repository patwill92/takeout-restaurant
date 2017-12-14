export function call(that, fn, ...remainingArguments) {
    return fn.bind(that)(...remainingArguments);
}