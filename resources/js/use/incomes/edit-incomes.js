import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useEditIncome(func) {
    const { handleSubmit, isSubmitting } = useForm();

    const {
        value: name,
        errorMessage: nError,
        handleBlur: nBlur,
    } = useField(
        "name",
        yup.string().trim().required("Пожалуйста введите Имя")
    );

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        name,
        nError,
        nBlur,
        onSubmit,
    };
}
