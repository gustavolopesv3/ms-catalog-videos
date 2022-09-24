
export type FieldsErros = {
    [field: string]: string []
}

export default interface ValidatorFieldsInterface<PropsValidated>{
    erros: FieldsErros;
    validatedData: PropsValidated;
    validate(data: any): boolean;
}