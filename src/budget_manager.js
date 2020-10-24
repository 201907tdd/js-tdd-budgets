import dayjs from "dayjs";
import {Period} from "./period";

export class BudgetManager {
    totalAmount(start, end) {
        return this.getBudgets()
            .map((budget) => budget.overlappingAmount(new Period(dayjs(start), dayjs(end))))
            .reduce((x, y) => x + y, 0);
    }

    getBudgets() {
        return undefined;
    }
}