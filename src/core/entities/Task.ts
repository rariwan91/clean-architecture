export class Task {
    TaskId: number = 0;
    Text: string;
    IsComplete: boolean;
    Order: number = 0;

    constructor(text: string) {
        this.Text = text;
        this.IsComplete = false;

        let validationIssues = this.validate();

        if (validationIssues && validationIssues.length > 0) {
            throw new Error(validationIssues.join(','));
        }
    }

    private validate(): string[] {
        let validationIssues: string[] = [];

        if (!this.Text) {
            validationIssues.push('Text is required');
        }

        return validationIssues;
    }
}