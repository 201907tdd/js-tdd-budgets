import {BudgetManager} from "../src/budget_manager";

describe('total amount between period', function () {
    it('no budgets', () => {
        let budgetManager = new BudgetManager();
        const start = new Date(2000, 3, 1);
        const end = new Date(2000, 3, 1);
        const totalAmount = budgetManager.totalAmount(start, end);
        expect(totalAmount).toBe(0);
    });
});