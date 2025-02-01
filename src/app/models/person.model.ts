export interface Person {
    readonly id: number;
    readonly name: string;
    readonly email:string;
    readonly birthdate: Date;
    readonly type: 'Employee' | 'Customer';
}
