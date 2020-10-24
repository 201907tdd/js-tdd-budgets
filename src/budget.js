import dayjs from "dayjs";
import {Period} from "./period";

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

    createPeriod() {
        return new Period(this.firstDay(), this.lastDay());
    }

    days() {
        return this.firstDay().daysInMonth();
    }

    dailyAmount() {
        return this.amount / this.days();
    }

    overlappingAmount(period) {
        return period.overlappingDays(this.createPeriod()) * this.dailyAmount();
    }
}