import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { formateDate } from "../../utils/formateDate";

export function useAddRecord(func, category) {
    const { handleSubmit, isSubmitting } = useForm();

    const {
        value: description,
        errorMessage: dError,
        handleBlur: dBlur,
    } = useField("description", yup.string().trim());

    const {
        value: summa,
        errorMessage: sError,
        handleBlur: sBlur,
    } = useField("summa", yup.string().required("Введите сумму"));

    const {
        value: date,
        errorMessage: dateError,
        handleBlur: dateBlur,
    } = useField("date");

    const {
        value: type,
        errorMessage: tError,
        handleBlur: tBlur,
    } = useField("type", yup.string().required("Выбрите тип расходов"));
    const { value: incomeCategory } = useField("incomeCategory");
    const { value: expenseCategory } = useField("expenseCategory");

    date.value = formateDate(new Date(), "YYYY-MM-DD");
    incomeCategory.value = category.incomesCategories[0].id;
    expenseCategory.value = category.expensesCategories[0].id;

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        description,
        dError,
        dBlur,
        summa,
        sError,
        sBlur,
        date,
        dateError,
        dateBlur,
        type,
        tError,
        tBlur,
        onSubmit,
        incomeCategory,
        expenseCategory,
    };
}
