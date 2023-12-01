export const decimalSeparator = (value) => {
    if (value.toString().lenght <= 3) return value
    
    let buffer = value.toString().split('');
     buffer.splice(buffer.length-3, 0, ',');
     return buffer.join('');
}