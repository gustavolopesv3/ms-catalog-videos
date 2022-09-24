import ValidatorRules from '../../../@seedwork/domain/validators/validator-rules'
import Entity from '../../../@seedwork/domain/entity/entity'
import UniqueEntityId from '../../../@seedwork/domain/value-objects/unique-entity-id.vo'
import CategoryValidatorFactory from '../validators/category.validator'

export type CategoryProps = {
    name: string,
    description?: string,
    is_active?: boolean,
    created_at?: Date
}
export class Category extends Entity<CategoryProps> {
    constructor(public readonly props : CategoryProps, id?:UniqueEntityId){
        Category.validate({
            name: props.name,
            description: props.description,
            is_active: props.is_active
        })
        super(props, id)
        this.description = this.props.description ?? null
        this.is_active = this.props.is_active ?? true,
        this.props.created_at = this.props.created_at ?? new Date 
    }

    // static validate(props: Omit<CategoryProps, 'id' | 'created_at' >){
    //     ValidatorRules.values(props.name, 'name').required().string()
    //     ValidatorRules.values(props.description, 'description').string()
    //     ValidatorRules.values(props.is_active, 'is_active').boolean()
    // }

    static validate(props: CategoryProps){
        const validator = CategoryValidatorFactory.create()
        validator.validate(props)
    }

    update(name: string, description: string){
        Category.validate({
            name,
            description
        })
        this.name = name
        this.description = description
    }

    activate(){
        this.is_active = true
    }

    deactivate(){
        this.is_active = false
    }

    get name() : string {
        return this.props.name;
    }

    private set name(value) {
        this.props.name = value
    }

    get description(){
        return this.props.description;
    }
    private set description(value: string){
        this.props.description = value ?? null
    }

    get is_active() {
        return this.props.is_active;
    }

    private set is_active(value: boolean) {
        this.props.is_active = value ?? true;
    }

    get created_at() {
        return this.props.created_at;
    }

}