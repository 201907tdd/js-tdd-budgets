import dayjs from "dayjs";
import {Period} from "./period";

export class BudgetManager {
    totalAmount(start, end) {
        const endDate = dayjs(end);
        const startDate = dayjs(start);
        let period = new Period(startDate, endDate);

        let budgets = this.getBudgets();
        let totalAmount = 0;
        budgets.forEach((budget) => totalAmount += budget.overlappingAmount(period));
        return totalAmount;
        // if (budgets.length > 0) {
        //     let budget = budgets[0];
        //     return budget.overlappingAmount(period);
        // }
        // return 0;
    }

    getBudgets() {
        return undefined;
    }

}