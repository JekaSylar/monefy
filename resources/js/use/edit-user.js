import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useEditUser(func) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            is_admin: 0,
        },
    });

    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur,
    } = useField(
        "email",
        yup
            .string()
            .trim()
            .email("Email не корректный")
            .required("Пожалуйста введите email")
    );

    const {
        value: name,
        errorMessage: nError,
        handleBlur: nBlur,
    } = useField(
        "name",
        yup.string().trim().required("Пожалуйста введите Имя")
    );

    const {
        value: bill,
        errorMessage: bError,
        handleBlur: bBlur,
    } = useField(
        "bill",
        yup.string().trim().required("Пожалуйста введите сумму")
    );

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField(
        "password",
        yup.string().trim().min(6, "Минимальное значение пароля 6 симоволов")
    );

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        email,
        eError,
        eBlur,
        name,
        nError,
        nBlur,
        password,
        pError,
        pBlur,
        bill,
        bError,
        bBlur,
        onSubmit,
    };
}
