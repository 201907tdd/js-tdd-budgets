import {BudgetManager} from "../src/budget_manager";
import dayjs from "dayjs";
import {Budget} from "../src/budget";

describe('total amount between period', function () {
    let budgetManager;
    let fake_get_budgets;
    beforeEach(() => {
        budgetManager = new BudgetManager();
        fake_get_budgets = jest.fn();
        budgetManager.getBudgets = fake_get_budgets;
    });

    it('no budgets', () => {
        givenBudgets([]);
        totalAmountShouldBe(
            new Date(2000, 3, 1),
            new Date(2000, 3, 1),
            0);
    });

    it('period inside budget month', () => {
        givenBudgets([
            new Budget('200004', 30),
        ]);
        totalAmountShouldBe(
            new Date(2000, 3, 1),
            new Date(2000, 3, 1),
            1);
    });

    it('period no overlapping before budget first day', () => {
        givenBudgets([
            new Budget('200004', 30),
        ]);
        totalAmountShouldBe(
            new Date(2000, 2, 31),
            new Date(2000, 2, 31),
            0);
    });

    it('period no overlapping after budget last day', () => {
        givenBudgets([
            new Budget('200004', 30),
        ]);
        totalAmountShouldBe(
            new Date(2000, 4, 1),
            new Date(2000, 4, 1),
            0);
    });

    it('period overlapping with budget first day', () => {
        givenBudgets([
            new Budget('200004', 30),
        ]);
        totalAmountShouldBe(
            new Date(2000, 2, 31),
            new Date(2000, 3, 2),
            2);
    });

    it('period overlapping with budget last day', () => {
        givenBudgets([
            new Budget('200004', 30),
        ]);
        totalAmountShouldBe(
            new Date(2000, 3, 30),
            new Date(2000, 4, 2),
            1);
    });

    function givenBudgets(budgets) {
        fake_get_budgets.mockReturnValueOnce(budgets);
    }

    function totalAmountShouldBe(start, end, expected) {
        const totalAmount = budgetManager.totalAmount(start, end);
        expect(totalAmount).toBe(expected);
    }
});