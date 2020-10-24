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
            return period.overlappingDays(budget);
        }
        return 0;
    }

    getBudgets() {
        return undefined;
    }
}