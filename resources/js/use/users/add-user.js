import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { generatorPassword } from "../../utils/generatorpassword";

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

    password.value = generatorPassword(14);

    const onSubmit = handleSubmit(func);

    return {
        isSubmitting,
        login,
        lError,
        lBlur,
        name,
        nError,
        nBlur,
        password,
        pError,
        pBlur,
        onSubmit,
    };
}
