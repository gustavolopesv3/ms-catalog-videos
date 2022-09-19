import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo'

type CategoryProps = {
    name: string,
    description?: string,
    is_active?: boolean,
    created_at?: Date
}
export class Category {
    public readonly id: UniqueEntityId
    constructor(public readonly props : CategoryProps, id?:UniqueEntityId){
        this.id = id || new UniqueEntityId()
        this.description = this.props.description ?? null
        this.is_active = this.props.is_active ?? true,
        this.props.created_at = this.props.created_at ?? new Date 
    }

    get name() : string {
        return this.props.name;
    }

    get description(){
        return this.props.description;
    }
    private set description(value: string){
        this.props.description = this.props.description ?? null
    }

    get is_active() {
        return this.props.is_active;
    }

    private set is_active(value: boolean) {
        this.props.is_active = this.props.is_active?? true;
    }

    get created_at() {
        return this.props.created_at;
    }
}
