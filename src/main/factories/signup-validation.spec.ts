import { ValidationComposite } from '../../presentation/helpers/validators/valitation-composite'
import { makeSignUpValidation } from './signup-validation'
import { RequiredFieldValidation } from '../../presentation/helpers/validators/required-field-valitation'
import { Validation } from '../../presentation/helpers/validators/validation'

jest.mock('../../presentation/helpers/validators/valitation-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})