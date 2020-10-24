import dayjs from "dayjs";

export class BudgetManager {
    totalAmount(start, end) {
        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            const endDate = dayjs(end);
            const startDate = dayjs(start);
            let budget = budgets[0];
            return this.overlappingDays(budget, startDate, endDate);
        }
        return 0;
    }

    overlappingDays(budget, startDate, endDate) {
        let lastDay = budget.lastDay();
        let firstDay = budget.firstDay();
        if (startDate.isAfter(lastDay)) {
            return 0;
        }
        if (endDate.isBefore(firstDay)) {
            return 0;
        }
        let overlappingStart = startDate.isAfter(firstDay) ? startDate : firstDay;
        let overlappingEnd = endDate.isBefore(lastDay) ? endDate : lastDay;
        return overlappingEnd.diff(overlappingStart, 'day') + 1;
    }

    getBudgets() {
        return undefined;
    }
}