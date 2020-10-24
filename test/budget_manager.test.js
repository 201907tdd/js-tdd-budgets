import {BudgetManager} from "../src/budget_manager";

describe('total amount between period', function () {
    let budgetManager;
    beforeEach(() => {
        budgetManager = new BudgetManager();
    });

    it('no budgets', () => {
        totalAmountShouldBe(
            new Date(2000, 3, 1),
            new Date(2000, 3, 1),
            0);
    });

    function totalAmountShouldBe(start, end, expected) {
        const totalAmount = budgetManager.totalAmount(start, end);
        expect(totalAmount).toBe(expected);
    }
});