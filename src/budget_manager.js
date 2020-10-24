export class BudgetManager {
    totalAmount(start, end) {
        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            return 1;
        }
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}