export class Period {
    startDate;
    endDate;

    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    overlappingDays(another) {
        if (this.endDate.isBefore(this.startDate)) {
            return 0;
        }
        if (this.startDate.isAfter(another.endDate) || this.endDate.isBefore(another.startDate)) {
            return 0;
        }
        let overlappingStart = this.startDate.isAfter(another.startDate) ? this.startDate : another.startDate;
        let overlappingEnd = this.endDate.isBefore(another.endDate) ? this.endDate : another.endDate;
        return overlappingEnd.diff(overlappingStart, 'day') + 1;
    }
}