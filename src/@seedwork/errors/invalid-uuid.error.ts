export default class InvalidUuidError extends Error {
    constructor(messege?: string){
        super(messege || 'ID must be a valide UUID')
        this.name = 'InvalidUuidError'
    }

}   