const mongoose = require("mongoose");

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
};

const isValidTitle = function (title) {
    return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

const isValidEmail = function (email) {
    const emailRegex = /^[a-z0-9_]{3,}@[a-z]{3,}.[a-z]{3,6}$/
    return emailRegex.test(email);
};

const isValidMobile = function (number) {
    const mobileRegex = /^[5-9]{1}[0-9]{9}$/
    return mobileRegex.test(number);
}

const isValidPassword = function (password) {
    const passwordRegex = /^[a-zA-Z0-9]{8,15}$/;
    return passwordRegex.test(password);
}

const isValidName = function (value) {
    const regex = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
    return regex.test(value)
}

const isValidStreet = function (street) {
    const regex = /\w*\s*|\w/
    return regex.test(street)
}

const isValidCity = function (value) {
    const regex = /^[a-zA-Z]{2,20}$/
    return regex.test(value)
}

const isValidPincode = function (value) {
    const regex = /^[1-9][0-9]{5}$/
    return regex.test(value)
}

// const isValidISBN = function (ISBN) {
//     const regex = /^(97(8|9))?\d{9}(\d|X)$/
//     return regex.test(ISBN)
// }
const isValidISBN = function (isbn) {
    if (/^(97(8|9))?\d{9}(\d|X)$/.test(isbn)) return true;
    return false;
   };

const isValidId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
};

const isValidReleasedAt = (releasedAt) => {
    return /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(releasedAt);
}



module.exports = { isValid, isValidEmail, isValidMobile, isValidName, isValidStreet, isValidTitle, isValidPassword, isValidCity, isValidPincode, isValidISBN, isValidId ,isValidReleasedAt}; 
