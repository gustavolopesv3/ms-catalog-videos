import ValidationError from "../../../@seedwork/domain/errors/validation-error"
import { Category } from "./category"


describe('Category Integration Test', ()=>{

    describe('create method', ()=>{

        it('shoul a invalid category using name property', ()=>{

            expect(() => new Category({name: null})).toThrow(new ValidationError('The name is required'))
    
            expect(() => new Category({name: ""})).toThrow(new ValidationError('The name is required'))
    
            expect(()=> new Category({name: 5 as any})).toThrow(new ValidationError('The name must be a string'))
        })
    
        it('shoul a invalid category using description property', ()=>{
    
            expect(()=> new Category({name: 'name', description: 5 as any})).toThrow(new ValidationError('The description must be a string'))
        })
    
        it('shoul a invalid category using is_active property', ()=>{
    
            expect(()=> new Category({name: 'Movie', is_active: 'true' as any})).toThrow(new ValidationError('The is_active must be a boolean'))
        })

        it('shoul a valid category', ()=>{
            new Category({name: 'Movie', description: 'Loren ipsum'})
            new Category({name: 'Movie1', description: null})
            new Category({name: 'Movie2'})
            new Category({name: 'Movie3', description: 'Loren ipsum', is_active: false})
            expect.assertions(0)
        })
    })

    describe('Update method', ()=>{
        it('shoul a invalid category using name property', ()=>{
            const category = new Category({name: 'Movie'})

            expect(() => category.update(null, null)).toThrow(new ValidationError('The name is required'))
    
            expect(() => category.update("", null)).toThrow(new ValidationError('The name is required'))
    
            expect(()=> category.update(5 as any, null)).toThrow(new ValidationError('The name must be a string'))
        })
    
        it('shoul a invalid category using description property', ()=>{
            const category = new Category({name: 'Movie', description: 'Loren ipsum'})
    
            expect(()=> category.update('Movie', 5 as any)).toThrow(new ValidationError('The description must be a string'))
        })
        it('shoul a valid category', ()=>{
           const category = new Category({name: 'Movie', description: 'Loren ipsum'})
           category.update('new name', 'new description')
           category.update('Movie', null)

            expect.assertions(0)
        })

    })

    
})