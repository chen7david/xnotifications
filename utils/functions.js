module.exports = {
    isObject: (object) => typeof object === 'object' && object !== null,
    isArray: (arr) => Array.isArray(arr),
}