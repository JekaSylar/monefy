import dayjs from "dayjs";
import "dayjs/locale/ru.js";

function formateDate(date, format = "DD.MM.YYYY") {
    return dayjs(date).locale("ru").format(format);
}

export { formateDate };
