import { PhoneNumberFormat, PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();

const formatNumber: (phone: string, countryIso: string) => string = (phone: string, countryIso: string) => {
  let phoneNumber: PhoneNumber;
  if (phone.length <= 1) {
    return phone;
  }
  if (phone.length >= 12 && !phone.includes('+')) {
    phone = `+${phone}`;
  }
  try {
    phoneNumber = phoneUtil.parseAndKeepRawInput(phone, countryIso);
    if (!phoneUtil.isPossibleNumber(phoneNumber)) {
      return undefined;
    }
    return phoneUtil.format(phoneNumber, PhoneNumberFormat.E164);
  } catch (error) {
    return undefined;
  }
};

export const util = {
  formatNumber
};