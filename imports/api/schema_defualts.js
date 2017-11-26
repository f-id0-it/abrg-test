import SimpleSchema from 'simpl-schema'

export const for_string = {
  type: String,
  max: 64
}

export const for_letter_numeric = {
  ...for_string,
  regEx: /^[a-zA-Z0-9]*$/
}

export const for_slug = {
  ...for_string,
  regEx: /^[a-z0-9]+(?:-[a-z0-9]+)*$/
}

export const for_name = {
  ...for_string,
  regEx: /^[a-zA-Z0-9]+(?:[-_][a-zA-Z0-9]+)*$/
}

export const for_password = {
  type: String,
  form: {
    type: 'password'
  }
}

export const for_numeric_boolean = {
  type: SimpleSchema.Integer,
  allowedValues: [0, 1],
  optional: true,
  form: {
    type: 'checkbox',
    value: 0
  }
}

export const for_email = {
  type: String,
  regEx: SimpleSchema.RegEx.Email
}

export const for_phone = {
  type: String,
  regEx: SimpleSchema.RegEx.Phone
}

export const for_country = {
  type: String,
  regEx: /^[a-zA-Z]{1,8}(?:-[a-zA-Z0-9]{1,8})*$/
}

// export const select_example = {
//   ...for_name,
//   form: {
//     element: 'select',
//     options: [
//       {
//         label: 'label 1',
//         value: 'value_1'
//       },
//       {
//         label: 'label 2',
//         value: 'value_2'
//       }
//     ]
//   }
// }