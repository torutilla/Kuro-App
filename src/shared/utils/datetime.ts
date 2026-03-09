export function normalizeDatetime(d: string) {
    const instance = new Date(d);
    const datetimeLocale = instance.toLocaleString();
    const date = d.split("T")[0];
    const time = d.split("T")[1];

    return { datetimeLocale, date, time };
}