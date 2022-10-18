import moment from "moment";

function formateDate(date, format = "DD.MM.YYYY") {
    return moment(date).format(format);
}

export { formateDate };
