import Entity from "../entity/entity"
import UniqueEntityId from "../value-objects/unique-entity-id.vo"


export interface RepositoryInterface<E extends Entity> {
    insert(entity: E): Promise<void>
    findById(id: UniqueEntityId | string): Promise<E>
    findAll(): Promise<E[]>
    update(entity: E): Promise<void>
    delete(id: UniqueEntityId | string): Promise<void>
}

export interface SearchableRepositoryInterface<E extends Entity, SearchParams, SearchResult> extends RepositoryInterface<E>{
    search(props:SearchParams): Promise<SearchResult>
}