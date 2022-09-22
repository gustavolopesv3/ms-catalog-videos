import ValuesObject from "../value-object";

class StubValueObject extends ValuesObject{

}

describe('ValueObject unit tests', ()=>{
    it('shoul set value', ()=>{
        const valueObject = new StubValueObject('string value')
        expect(valueObject.value).toBe('string value')

        const valueObject1 = new StubValueObject({
            prop: 'value string'
        })
        expect(valueObject1.value).toStrictEqual({
            prop: 'value string'
        })
    })

    // it('should convert to a string', ()=>{
    //     const date = new Date()
    //     let arrange = [
    //         {
    //             received: null,
    //             expected: 'null'
    //         },
    //         {
    //             received: undefined,
    //             expected: 'undefined'
    //         },
    //         {
    //             received: 'fake test',
    //             expected: 'fake test'
    //         },
    //         {
    //             received: '',
    //             expected: ''
    //         },
    //         {
    //             received: 0,
    //             expected: '0'
    //         },
    //         {
    //             received: true,
    //             expected: 'true',
    //         },
    //         {
    //             received: false,
    //             expected: 'false'
    //         },
    //         // {
    //         //     received: { prop: 'value' },
    //         //     expected: JSON.stringify( { prop: 'value' } )
    //         // },
    //         {
    //             received: date,
    //             expected: date.toString()
    //         }
    //     ]

    //     arrange.forEach((item)=>{
    //         let valueObject = new StubValueObject(item.received)
    //         expect(valueObject+'').toBe(item.expected)
    //     })
    // })

    
})