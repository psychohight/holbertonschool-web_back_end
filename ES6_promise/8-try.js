export default function divideFunction(numerator, denominator) {
    console.log(`Received numerator: ${numerator}, denominator: ${denominator}`);
    if (denominator === 0) {
        throw new Error('cannot divide by 0');
    }
    return numerator / denominator;
}
