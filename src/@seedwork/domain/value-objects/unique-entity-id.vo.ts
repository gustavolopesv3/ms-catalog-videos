import InvalidUuidError from '../../errors/invalid-uuid.error'
import {v4 as uuidv4, validate as uuidValidate} from 'uuid'
import ValuesObject from './value-object'

export default class UniqueEntityId extends ValuesObject<string>{
    
    constructor(private readonly id?: string){
        super(id || uuidv4())
        this.validate()
    }

    private validate(){
        const isValid = uuidValidate(this.value)
        if(!isValid){
            throw new InvalidUuidError()
        }
    }

}