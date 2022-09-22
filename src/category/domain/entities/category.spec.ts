import {Category} from './category'
import {omit} from 'lodash'
import {validate as uuidValidate} from 'uuid'
import UniqueEntityId from '../../../@seedwork/domain/values-objects/unique-entity-id.vo'
describe('category unit tests', ()=> {
    test('constructor of category', ()=>{

        let category = new Category({
            name: 'Movie'
        })
        let props = omit(category.props, 'created_at')
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

        expect(category.name).toBe('Movie')
    })

    test('getter and setter of description', ()=> {
        const category = new Category({
            name: 'Movie'
        })
        expect(category.description).toBeNull()

    })

    test('id prop', ()=>{
        let category = new Category({
            name: 'Movie0'})
        expect(category.id).not.toBeNull()
        expect(category.id).toBeInstanceOf(UniqueEntityId)

        category = new Category({
            name: 'Movie1'}, null)
        expect(category.id).not.toBeNull()
        expect(category.id).toBeInstanceOf(UniqueEntityId)

        category = new Category({
            name: 'Movie2'}, undefined)
        expect(category.id).not.toBeNull()
        expect(category.id).toBeInstanceOf(UniqueEntityId)

        const uuid = new UniqueEntityId('ed81b1e3-b85f-404b-8823-9e4dab9e3c51')

        category = new Category({
            name: 'Movie3'}, uuid)
        expect(category.id).not.toBeNull()
        expect(category.id).toBeInstanceOf(UniqueEntityId)
        
    })

})