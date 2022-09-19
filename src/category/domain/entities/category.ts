type CategoryProps = {
    name: string,
    description?: string,
    is_active?: boolean,
    created_at?: Date
}
export class Category {
    constructor(public readonly props : CategoryProps){}
    

    get name() : string {
        return this.props.name;
    }

    get description() : string | undefined {
        return this.props.description;
    }

    get is_active(): boolean | undefined {
        return this.props.is_active;
    }

    get created_at() : Date | undefined {
        return this.props.created_at;
    }


}

// create


// Category : uuid id
// Category : string name
// Category : string description
// Category : boolean is_active
// Category : date created_at