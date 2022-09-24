import UniqueEntityId from "../value-objects/unique-entity-id.vo";
import Entity from "./entity";
import {validate as uuidValidate} from 'uuid'

class StubEntity extends Entity<{prop1: string; prop2: number}>{}
describe('Entity unit tests', ()=>{
    it('shold set props and id', ()=>{

        const arrange = {prop1: 'fake value', prop2: 123 }

        const  entity = new StubEntity(arrange)

        expect(entity.props).toStrictEqual({prop1: 'fake value', prop2: 123 })
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).not.toBeNull()
        expect(uuidValidate(entity.id)).toBeTruthy()
    })

    it('shold accpet a valid uuid', ()=>{
        const arrange = {prop1: 'fake value', prop2: 123 }
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)

        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).toBe(uniqueEntityId.value)

    })

    it('shold conver a entity to a JavaScript Object', ()=>{
        const arrange = {prop1: 'fake value', prop2: 123 }
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)

        expect(entity.toJSON()).toStrictEqual({
            id: entity.id,
            ...arrange
        })
    })
})