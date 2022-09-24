import { ClassValidatorFields } from "../class-validator-fields"
import * as libClassValidator from 'class-validator'

class StubClassValidator extends ClassValidatorFields<{field: string}> {

}

describe('ClassValidatorFields unit tests', ()=>{
     
    it('should intialize erros and validatedDate variables with null', ()=>{
        const validator = new StubClassValidator()
        expect(validator.erros).toBeNull()
        expect(validator.validatedData).toBeNull()
    }) 

    it('shoul validate with errors', ()=>{
        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([
            {
                property: 'field',
                constraints: {isRequired: 'some error'}
            }
        ])
        const validator = new StubClassValidator()
        expect(validator.validate(null)).toBeFalsy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(validator.validatedData).toBeNull()
        expect(validator.erros).toStrictEqual({field: ["some error"]})
    })

    it('shoul validate without errors', ()=>{
        const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidateSync.mockReturnValue([])

        const validator = new StubClassValidator()
        expect(validator.validate({field: 'value'})).toBeTruthy()
        expect(spyValidateSync).toHaveBeenCalled()
        expect(validator.validatedData).toStrictEqual({field: 'value'})
        expect(validator.erros).toBeNull()
    })
})