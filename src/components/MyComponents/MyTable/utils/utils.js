import api from '../../../../lib/api';

// function to create clean data for Material UI table
export function createData(date, userID, oldValue, newValue) {
    return { date, userID, oldValue, newValue };
}

// function to sort an array of object by attribut, setOrder can reverse the sort
export function propertySort(property, sortOrder) {
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

// function to transform timestamp date into YYYY-MM-DD date
export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export function fetch() {
    const result = api.getUsersDiff().then(res => {
    }, err => {
        return err
    });
    return result
}