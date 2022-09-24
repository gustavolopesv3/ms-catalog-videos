import ClassValidatorFields from "../validators/class-validator-fields"
import { FieldsErrors } from "../validators/validator-fields-interface"

type Expected = {
    validator: ClassValidatorFields<any>, data: any
}


expect.extend({
    containsErrorMassages(expected: Expected, received: FieldsErrors){
        const isValid = expected.validator.validate(expected.data)
        
        if(isValid){
            return {
                pass: false,
                message: ()=> 'The data is valid'
            }
        }
        
        
    }
})