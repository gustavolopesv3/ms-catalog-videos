import UniqueEntityId from "../unique-entity-id.vo";
import {validate as uuidValidate} from 'uuid'
import InvalidUuidError from "../../../errors/invalid-uuid.error";

describe('UniqueEntityId Unit tests', ()=>{
    it('should throw error when uuid is invalid', async ()=>{
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        expect(()=>{
            new UniqueEntityId('invalid-uuid');
        }).toThrow(new InvalidUuidError());

        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    it('should create an uuid valid', ()=>{
        const uuid = new UniqueEntityId()
        expect(uuidValidate(uuid.value)).toBeTruthy()
    })

    it('should accept a uuid passed in constructor', ()=>{
        const uuidMock = '9832909b-55ec-4a4f-a07c-6b56d622e0a8'
        const uuid = new UniqueEntityId(uuidMock)

        expect(uuid.value).toBe(uuidMock)
        expect(uuidValidate(uuid.value)).toBeTruthy()
    })
})