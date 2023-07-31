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
}
