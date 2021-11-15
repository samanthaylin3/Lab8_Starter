// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Test for isPhoneNumber function
// Return true #1
test('valid phone number 1: ', () => {
    expect(functions.isPhoneNumber('858-588-2974')).toBe(true);
});
// Return true #2
test('valid phone number 2: ', () => {
    expect(functions.isPhoneNumber('(000)-111-2222')).toBe(true);
});
// Return false #1
test('invalid phone number 1: ', () => {
    expect(functions.isPhoneNumber('8585882974')).toBe(false);
});
// Return false #2
test('invalid phone number 2: ', () => {
    expect(functions.isPhoneNumber('01234567890')).toBe(false);
});

// Test for isEmail function
// Return true #1
test('valid email 1: ', () => {
    expect(functions.isEmail('hello@world.com')).toBe(true);
});
// Return true #2
test('valid email 2: ', () => {
    expect(functions.isEmail('hello_world@hw.com')).toBe(true);
});
// Return false #1
test('invalid email 1: ', () => {
    expect(functions.isEmail('hello.com')).toBe(false);
});
// Return false #2
test('invalid email 2: ', () => {
    expect(functions.isEmail('hello.world@hw.com')).toBe(false);
});

// Test for isStrongPassword function
// Return true #1
test('valid strong Password 1: ', () => {
    expect(functions.isStrongPassword('helloworld')).toBe(true);
});
// Return true #2
test('valid strong Password 2: ', () => {
    expect(functions.isStrongPassword('hello_world')).toBe(true);
});
// Return false #1
test('invalid strong Password 1: ', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
// Return false #2
test('invalid strong Password 2: ', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

// Test for isDate function
// Return true #1
test('valid date 1: ', () => {
    expect(functions.isDate('12/25/2021')).toBe(true);
});
// Return true #2
test('valid date 2: ', () => {
    expect(functions.isDate('1/01/2022')).toBe(true);
});
// Return false #1
test('invalid date 1: ', () => {
    expect(functions.isDate('12252021')).toBe(false);
});
// Return false #2
test('invalid date 2: ', () => {
    expect(functions.isDate('12/25/21')).toBe(false);
});

// Test for isHexColor function
// Return true #1
test('valid hex 1: ', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});
// Return true #2
test('valid hex 2: ', () => {
    expect(functions.isHexColor('000000')).toBe(true);
});
// Return false #1
test('invalid hex 1: ', () => {
    expect(functions.isHexColor('fffffff')).toBe(false);
});
// Return false #2
test('invalid hex 2: ', () => {
    expect(functions.isHexColor('00')).toBe(false);
});