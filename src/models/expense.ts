export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: Date;
    categoryID: string;
    categoryName: string;
}