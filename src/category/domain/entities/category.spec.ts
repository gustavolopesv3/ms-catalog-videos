import {Category} from './category'
import {omit} from 'lodash'
import {validate as uuidValidate} from 'uuid'
import UniqueEntityId from '../../../@seedwork/domain/value-objects/unique-entity-id.vo'

describe('category unit tests', ()=> {
    beforeEach(()=>{
        Category.validate = jest.fn() //mock validate
    })
    test('constructor of category', ()=>{
    
        let category = new Category({
            name: 'Movie'
        })
        let props = omit(category.props, 'created_at')
        expect(Category.validate).toHaveBeenCalled()
        expect(props).toStrictEqual({
            name: 'Movie',
            description: null,
            is_active: true
        })
        expect(category.props.created_at).toBeInstanceOf(Date)

        
        let createdAt = new Date()
        category = new Category({
            name: 'Movie1',
            description: 'lorem ipsum',
            is_active: false,
            created_at: createdAt
        })
        expect(category.props).toStrictEqual({
            name: 'Movie1',
            description: 'lorem ipsum',
            is_active: false,
            created_at: createdAt
        })


        category = new Category({
            name: 'Movie2',
            description: 'other description',
        })
        expect(category.props).toMatchObject({
            name: 'Movie2',
            description: 'other description',
            is_active: true,
        })

    })

    test('getter of name field', ()=>{
        const category = new Category({
            name: 'Movie',
            description: 'lorem ipsum'
        })
        expect(Category.validate).toHaveBeenCalled()
        expect(category.name).toBe('Movie')
    })

    test('getter and setter of description', ()=> {
        const category = new Category({
            name: 'Movie'
        })
        expect(Category.validate).toHaveBeenCalled()
        expect(category.description).toBeNull()

    })

    test('id prop', ()=>{
        let category = new Category({
            name: 'Movie0'})
        expect(category.uniqueEntityId).not.toBeNull()
        expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)

        category = new Category({
            name: 'Movie1'}, null)
        expect(category.uniqueEntityId).not.toBeNull()
        expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)

        category = new Category({
            name: 'Movie2'}, undefined)
        expect(category.uniqueEntityId).not.toBeNull()
        expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)

        const uuid = new UniqueEntityId('ed81b1e3-b85f-404b-8823-9e4dab9e3c51')

        category = new Category({
            name: 'Movie3'}, uuid)
        expect(category.uniqueEntityId).not.toBeNull()
        expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        
    })

    it('shuld update a category', ()=>{
        const category = new Category({
            name: 'name 1',
        })

        
        expect(category.name).toBe('name 1')
        expect(category.description).toBeNull()

        category.update('name 2', 'lorem ipsum')
        expect(Category.validate).toHaveBeenCalledTimes(2)
        expect(category.name).toBe('name 2')
        expect(category.description).toBe('lorem ipsum')
    })

    it('shold change status category', ()=>{
        const category = new Category({name: 'abobrinha'})

        expect(category.is_active).toBeTruthy()

        category.deactivate()
        expect(category.is_active).toBeFalsy()

        category.activate()
        expect(category.is_active).toBeTruthy()
    })

})