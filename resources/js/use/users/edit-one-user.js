import { computed } from "vue";
import { useStore } from "vuex";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useEditOneUser() {
    const store = useStore();
    const user = computed(() => store.getters["currentUser/getCurrentUser"]);

    const { handleSubmit, isSubmitting } = useForm();

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
        yup.string().trim().min(6, "Минимальное значение пароля 6 симоволов")
    );

    const onSubmit = handleSubmit(async (values) => {
        const updateUser = {
            id: user.value.id,
            login: user.value.login,
            name: values.name,
            bill: user.value.bill,
            is_admin: user.value.is_admin,
        };

        if (values.password != null && typeof values.password !== "undefined") {
            updateUser.password = values.password;
        }

        updateUser.password = values.password;

        await store.dispatch("currentUser/updateUser", updateUser);
    });

    return {
        isSubmitting,
        name,
        nError,
        nBlur,
        password,
        pError,
        pBlur,
        onSubmit,
    };
}
