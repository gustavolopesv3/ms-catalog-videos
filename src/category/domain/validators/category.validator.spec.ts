import CategoryValidatorFactory, { CategoryRules, CategoryValidator } from "./category.validator"

describe('CategoryValidator tests', ()=>{
    let validator: CategoryValidator

    beforeEach(()=>(validator = CategoryValidatorFactory.create()))
    test('invalidation cases for name field', ()=>{
        let isValid = validator.validate(null)
        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name should not be empty',
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
          ])

        isValid = validator.validate({name: ''})
        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name should not be empty'
          ])

        isValid = validator.validate({name: 12 as any})
        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
          ])
        
        isValid = validator.validate({name: 't'.repeat(256)})
        expect(isValid).toBeFalsy()
        expect(validator.errors['name']).toStrictEqual([
            'name must be shorter than or equal to 255 characters'
        ])
    })

    test('Valid cases for fields', ()=>{
        let isValid = validator.validate({name: 'some value'})
        expect(isValid).toBeTruthy()
        expect(validator.validatedData).toStrictEqual(new CategoryRules({name: 'some value'}))

        isValid = validator.validate({name: 'some Value', description: null})
        expect(isValid).toBeTruthy()
        expect(validator.validatedData).toStrictEqual(new CategoryRules({name: 'some Value', description: null}))


        validator.validate({name: 'some Value', description: undefined})
        expect(isValid).toBeTruthy()
        expect(validator.validatedData).toStrictEqual(new CategoryRules({name: 'some Value', description: undefined}))
        
        validator.validate({name: 'some Value', is_active: false})
        expect(isValid).toBeTruthy()
        expect(validator.validatedData).toStrictEqual(new CategoryRules({name: 'some Value', is_active: false}))
        
        validator.validate({name: 'some Value', is_active: true})
        expect(isValid).toBeTruthy()
        expect(validator.validatedData).toStrictEqual(new CategoryRules({name: 'some Value', is_active: true}))
    })
})