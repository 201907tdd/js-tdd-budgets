export class Period {
    startDate;
    endDate;

    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    overlappingDays(budget, another) {
        let lastDay = another.endDate;
        let firstDay = another.startDate;
        if (this.startDate.isAfter(lastDay) || this.endDate.isBefore(firstDay)) {
            return 0;
        }
        let overlappingStart = this.startDate.isAfter(firstDay) ? this.startDate : firstDay;
        let overlappingEnd = this.endDate.isBefore(lastDay) ? this.endDate : lastDay;
        return overlappingEnd.diff(overlappingStart, 'day') + 1;
    }
}