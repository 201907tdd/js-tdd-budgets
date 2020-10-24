import dayjs from "dayjs";

export class BudgetManager {
    totalAmount(start, end) {
        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            const endDate = dayjs(end);
            const startDate = dayjs(start);
            let lastDay = budgets[0].lastDay();
            let firstDay = budgets[0].firstDay();
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
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}