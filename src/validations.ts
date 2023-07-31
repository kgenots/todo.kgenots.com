import { FieldValues } from 'react-hook-form'

export class Validation {
  static TodoFormTitleValidate(value: string, _fields: FieldValues) {
    if (value.length > 20) {
      return '제목은 20자 이하이어야 합니다.'
    }
  }

  static TodoFormDescriptionValidate(value: string, _fields: FieldValues) {
    if (value.length === 0) {
      return '내용을 입력해주세요.'
    }
  }

  // static phoneNumberValidation(value: string, _fields: FieldValues) {
  //   if (!/^[0-9]{9,10}$/.test(value)) {
  //     return `phone_number_validation`
  //   }
  // }

  // static emailValidation(value: string, _fields: FieldValues) {
  //   if (!/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value)) {
  //     return `email_validation`
  //   }
  // }

  // static numbersOnlyValidation(value: string, _fields: FieldValues) {
  //   if (!/^[0-9]+$/.test(value)) {
  //     return `numbers_only_validation`
  //   }
  // }

  // static passwordValidation(value: string) {
  //   if (!/[a-zA-Z]+/.test(value)) {
  //     return `password_validation`
  //   }
  // }

  // static confirmPasswordValidation(_value: string, fields: FieldValues) {
  //   if (fields.password !== fields.confirm_password) {
  //     return `passwords_not_match`
  //   }
  // }
}
