type CategoryProps = {
    name: string,
    description?: string,
    is_active?: boolean,
    created_at?: Date
}
export class Category {
    constructor(public readonly props : CategoryProps){
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
        this.props.is_active = this.props.is_active?? false;
    }

    get created_at() {
        return this.props.created_at;
    }
}

// create


// Category : uuid id
// Category : string name
// Category : string description
// Category : boolean is_active
// Category : date created_at