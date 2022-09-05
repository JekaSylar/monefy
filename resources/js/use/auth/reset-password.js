import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useResetPassword(func) {
    const { handleSubmit, isSubmitting, resetForm } = useForm();

    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur,
    } = useField(
        "email",
        yup
            .string()
            .trim()
            .required("Пожалуйста введите Email")
            .email("Неверный формат email")
    );

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        email,
        eError,
        eBlur,
        onSubmit,
        resetForm,
    };
}
