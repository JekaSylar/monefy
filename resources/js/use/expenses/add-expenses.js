import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useAddExpense(func) {
    const { handleSubmit, isSubmitting } = useForm();

    const {
        value: name,
        errorMessage: nError,
        handleBlur: nBlur,
    } = useField(
        "name",
        yup.string().trim().required("Пожалуйста введите название категории")
    );

    const onSubmit = handleSubmit(func);

    return {
        name,
        nError,
        nBlur,
        onSubmit,
        isSubmitting,
    };
}
