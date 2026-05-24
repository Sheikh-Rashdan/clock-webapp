function zfill(number, zeroes = 2) {
    number = String(number);
    while (number.length < zeroes) {
        number = "0" + number;
    }
    return number;
}

export default zfill;