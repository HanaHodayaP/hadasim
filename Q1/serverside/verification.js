export function isAlpha(str) 
{
    return /^[a-zA-Z\s]+$/.test(str);
}

export function isValidPhoneNumber10(phoneNumber) 
{
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export function isValidPhoneNumber9(phoneNumber) 
{
    const phoneNumberRegex = /^[0-9]{9}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export function isValidId(phoneNumber) 
{
    const phoneNumberRegex = /^[0-9]{9}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export function isDateBefore(date1, date2) 
{
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return date1 < date2;

}

