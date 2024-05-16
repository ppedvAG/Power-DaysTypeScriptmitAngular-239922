export interface Todo {
    id: number;
    userId?: number;
    title: string;
    completed: boolean;

    description?: string;
    labels?: string[];
    dueDate?: Date;
}
