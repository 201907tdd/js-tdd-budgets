import dayjs from "dayjs";
import {Period} from "./period";

export class BudgetManager {
    totalAmount(start, end) {
        const endDate = dayjs(end);
        const startDate = dayjs(start);
        let period = new Period(startDate, endDate);

        let budgets = this.getBudgets();
        if (budgets.length > 0) {
            let budget = budgets[0];
            let another = this.createPeriod(budget);
            return period.overlappingDays(another);
        }
        return 0;
    }

    createPeriod(budget) {
        return new Period(budget.firstDay(), budget.lastDay());
    }

    getBudgets() {
        return undefined;
    }
}