import Entity from "../entity/entity";
import NotFroundError from "../errors/not-found.error";
import UniqueEntityId from "../value-objects/unique-entity-id.vo";
import {InMemoryRepository} from "./in-memory-repository";

type StubEntityProps = {
    name: string;
    price: number
}

class StubEntity extends Entity<StubEntityProps>{

}

class StubInMemoryRepository extends InMemoryRepository<StubEntity>{

}

describe('In-memory repository unit tests', ()=>{
    let repository: StubInMemoryRepository

    beforeEach(()=>{
        repository = new StubInMemoryRepository()
    })
    it('should inserts a new entity', async ()=>{
        const entity = new StubEntity({name: 'name value', price: 10})
        await repository.insert(entity)
        expect(entity.toJSON()).toStrictEqual(repository.items[0].toJSON())
    })

    it('should throws error when entity not found', async ()=>{
        expect(repository.findById('fakeId')).rejects.toThrow(new NotFroundError('Entity not Found using Id fakeId'))

        const uuid = new UniqueEntityId('ed81b1e3-b85f-404b-8823-9e4dab9e3c51')
        expect(repository.findById(uuid)).rejects.toThrow(new NotFroundError(`Entity not Found using Id ${uuid}`))

    })

    it('shoul finds a entity by id', async ()=>{
        const entity = new StubEntity({name: 'Movie', price: 11})
        await repository.insert(entity)
        
        let entityFound = await repository.findById(entity.id)
        expect(entity.toJSON()).toStrictEqual(entityFound.toJSON())

        entityFound = await repository.findById(entity.uniqueEntityId)
        expect(entity.toJSON()).toStrictEqual(entityFound.toJSON())
    })

    it('should return all entities', async ()=>{
        const entity = new StubEntity({name: 'Movie', price: 11})
        await repository.insert(entity)

        const entities = await repository.findAll()
        expect(entities).toStrictEqual([entity])

    })

    it('should throws error on update when entity not found', async ()=>{
        const entity = new StubEntity({name: 'value', price: 12 })
        expect(repository.update(entity)).rejects.toThrow(new NotFroundError(`Entity not Found using Id ${entity.id}`))
    })

    it('shoul update a entity', async ()=>{
        const entity = new StubEntity({name: 'some value', price: 13})
        await repository.insert(entity)
        const entityUpdated = new StubEntity({name: 'updated', price: 1 }, entity.uniqueEntityId)
        await repository.update(entityUpdated)
        expect(entityUpdated.toJSON()).toStrictEqual(repository.items[0].toJSON())

    })

    it('should throws error on delete when entity not found', async ()=>{
        const entity = new StubEntity({name: 'value', price: 12 })
        expect(repository.delete(entity.id)).rejects.toThrow(new NotFroundError(`Entity not Found using Id ${entity.id}`))
        expect(repository.delete(entity.uniqueEntityId)).rejects.toThrow(new NotFroundError(`Entity not Found using Id ${entity.id}`))
    })

    it('should delete a entity', async ()=>{
        const entity1 = new StubEntity({name: 'some value', price: 12})
        const entity2 = new StubEntity({name: 'some value', price: 12})

        await repository.insert(entity1)
        await repository.insert(entity2)

        expect(repository.items).toStrictEqual([entity1, entity2])
        
        await repository.delete(entity1.id)
        expect(repository.items).toStrictEqual([entity2])

        await repository.delete(entity2.uniqueEntityId)
        expect(repository.items).toHaveLength(0)
    })

})