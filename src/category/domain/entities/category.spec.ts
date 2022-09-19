import {Category} from './category'
describe('category unit tests', ()=> {
    test('constructor of category', ()=>{
        const createdAt = new Date

        const props = {
            name: 'Movie',
            description: "Lorem ipsum",
            is_active: true,
            created_at: createdAt
        }

        const category = new Category(props)
        
        expect(category.props).toStrictEqual(props)
    })

})