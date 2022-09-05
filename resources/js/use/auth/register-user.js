import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRegisterUser(func) {
    const { handleSubmit, isSubmitting } = useForm({
        validationSchema: yup.object({
            user: yup.object({
                name: yup
                    .string()
                    .trim()
                    .required("Поле обезательно для заполнения"),
                email: yup
                    .string()
                    .trim()
                    .required("Поле обезательно для заполнения")
                    .email("Неверный формат email"),
                password: yup
                    .string()
                    .required("Поле обезательно для заполнения")
                    .min(6, "Минимальное значение пароля 6 симоволов"),
                password_confirmation: yup
                    .string()
                    .required("Поле обязательно для заполнения")
                    .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
            }),
        }),
    });

    const {
        value: name,
        errorMessage: nError,
        handleBlur: nBlur,
    } = useField("user.name");

    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur,
    } = useField("user.email");

    const {
        value: password_confirmation,
        errorMessage: pcError,
        handleBlur: pcBlur,
    } = useField("user.password_confirmation");

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField("user.password");

    const onSubmit = handleSubmit(func);

    return {
        handleSubmit,
        isSubmitting,
        name,
        nError,
        nBlur,
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        password_confirmation,
        pcError,
        pcBlur,
        onSubmit,
    };
}
