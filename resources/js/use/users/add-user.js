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

    const { value: is_admin } = useField("is_admin");

    password.value = generatorPassword(14);

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
        is_admin,
        onSubmit,
    };
}
