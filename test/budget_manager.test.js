import {BudgetManager} from "../src/budget_manager";
import dayjs from "dayjs";
import {Budget} from "../src/budget";

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

    it('period inside budget month', () => {
        const fake_get_budgets = jest.fn();
        fake_get_budgets.mockReturnValueOnce([
            new Budget('200004', 30),
        ])
        budgetManager.getBudgets = fake_get_budgets;
        totalAmountShouldBe(
            new Date(2000, 3, 1),
            new Date(2000, 3, 1),
            1);
    });

    function totalAmountShouldBe(start, end, expected) {
        const totalAmount = budgetManager.totalAmount(start, end);
        expect(totalAmount).toBe(expected);
    }
});