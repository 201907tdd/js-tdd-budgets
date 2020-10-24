import dayjs from "dayjs";

export class Budget {
    yearMonth;
    amount;

    constructor(yearMonth, amount) {
        this.yearMonth = yearMonth;
        this.amount = amount;
    }

    firstDay() {
        return dayjs(new Date(2000, 3, 1));
    }
}