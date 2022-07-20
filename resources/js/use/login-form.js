import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useLoginForm() {
    const store = useStore();
    const router = useRouter();
    const { handleSubmit, isSubmitting } = useForm();

    const {
        value: login,
        errorMessage: lError,
        handleBlur: lBlur,
    } = useField(
        "login",
        yup.string().trim().required("Пожалуйста введите Логин")
    );

    const MIN_LENGTH = 4;

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

    const onSubmit = handleSubmit(async (values) => {
        try {
            await store.dispatch("auth/login", values);
            router.push("/");
        } catch (e) {
            //console.log(e);
        }
    });

    return {
        login,
        lError,
        lBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
    };
}
