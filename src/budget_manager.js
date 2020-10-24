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
            return period.overlappingDays(budget);
        }
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}