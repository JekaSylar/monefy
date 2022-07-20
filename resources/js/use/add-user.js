import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useAddUser(func) {
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            is_admin: 0,
        },
    });

    const {
        value: login,
        errorMessage: lError,
        handleBlur: lBlur,
    } = useField(
        "login",
        yup.string().trim().required("Пожалуйста введите Логин")
    );

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
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField(
        "password",
        yup
            .string()
            .trim()
            .min(6, "Минимальное значение пароля 6 симоволов")
            .required("Пожалуйста введите Пароль")
    );

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        login,
        lError,
        lBlur,
        email,
        eError,
        eBlur,
        name,
        nError,
        nBlur,
        password,
        pError,
        pBlur,
        onSubmit,
    };
}
