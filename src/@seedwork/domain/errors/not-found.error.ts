export default class NotFroundError extends Error {
    constructor(messege: string){
        super(messege)
        this.name = 'NotFoundError'
    }
}   