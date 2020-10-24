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
            let another = new Period(budget.firstDay(), budget.lastDay());
            return period.overlappingDays(budget, another);
        }
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}