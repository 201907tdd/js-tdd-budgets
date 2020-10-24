import dayjs from "dayjs";

export class Budget {
    yearMonth;
    amount;

    constructor(yearMonth, amount) {
        this.yearMonth = yearMonth;
        this.amount = amount;
    }

    firstDay() {
        return dayjs(this.yearMonth, 'YYYYMM');
    }

    lastDay() {
        return this.firstDay().endOf('month');
    }
}