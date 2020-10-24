import dayjs from "dayjs";

export class BudgetManager {
    totalAmount(start, end) {
        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            const endDate = dayjs(end);
            const startDate = dayjs(start);
            return endDate.diff(startDate, 'day') + 1;
        }
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}