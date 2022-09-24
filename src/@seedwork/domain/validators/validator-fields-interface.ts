
export type FieldsErrors = {
    [field: string]: string []
}

export default interface ValidatorFieldsInterface<PropsValidated>{
    erros: FieldsErrors;
    validatedData: PropsValidated;
    validate(data: any): boolean;
}