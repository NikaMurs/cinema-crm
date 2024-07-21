import moment from "moment";

export default function convertDate(dateString) {
    const currentYear = moment().year();
    const [day, month] = dateString.split('.');
    const formattedDate = `${currentYear}-${month}-${day}`;
    const validDate = moment(formattedDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    return validDate;
}