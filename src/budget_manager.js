import dayjs from "dayjs";
import {Period} from "./period";

export class BudgetManager {
    totalAmount(start, end) {
        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            const endDate = dayjs(end);
            const startDate = dayjs(start);
            let budget = budgets[0];
            let period = new Period(startDate, endDate);
            return this.overlappingDays(budget, period);
        }
        return 0;
    }

    overlappingDays(budget, period) {
        let lastDay = budget.lastDay();
        let firstDay = budget.firstDay();
        if (period.startDate.isAfter(lastDay)) {
            return 0;
        }
        if (period.endDate.isBefore(firstDay)) {
            return 0;
        }
        let overlappingStart = period.startDate.isAfter(firstDay) ? period.startDate : firstDay;
        let overlappingEnd = period.endDate.isBefore(lastDay) ? period.endDate : lastDay;
        return overlappingEnd.diff(overlappingStart, 'day') + 1;
    }

    getBudgets() {
        return undefined;
    }
}