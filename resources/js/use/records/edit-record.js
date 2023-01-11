import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useEditRecord(func, record) {
    const { handleSubmit, isSubmitting } = useForm();

    const {
        value: description,
        errorMessage: dError,
        handleBlur: dBlur,
    } = useField("description", yup.string().trim().nullable());

    const {
        value: summa,
        errorMessage: sError,
        handleBlur: sBlur,
    } = useField(
        "summa",
        yup
            .number("Вы ввели не верный формат")
            .positive("Сумма не может быть отрицательной")
            .required("Пожалуйста введите сумму")
    );

    const {
        value: date,
        errorMessage: dateError,
        handleBlur: dateBlur,
    } = useField("date");

    const { value: type } = useField("type");
    const { value: incomeCategory } = useField("incomeCategory");
    const { value: expenseCategory } = useField("expenseCategory");

    description.value = record.description;
    summa.value = record.summa;
    date.value = record.date;
    type.value = record.type;
    if (record.incomeСategory !== null) {
        incomeCategory.value = record.incomeСategory.id;
    }

    if (record.expenseCategory !== null) {
        expenseCategory.value = record.expenseCategory.id;
    }

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
        expenseCategory,
        incomeCategory,
        onSubmit,
    };
}
