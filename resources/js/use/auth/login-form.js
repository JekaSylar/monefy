import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useLoginForm(func) {
    const { handleSubmit, isSubmitting } = useForm();

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
            .email("Не верный формат email")
    );

    const MIN_LENGTH = 6;

    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField(
        "password",
        yup
            .string()
            .trim()
            .required("Пожалуйста введите пароль")
            .min(
                MIN_LENGTH,
                `Пароль не может быть меньше ${MIN_LENGTH} символов`
            )
    );

    const onSubmit = handleSubmit(func);

    return {
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
    };
}
