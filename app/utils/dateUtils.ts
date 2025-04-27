const months: string[] = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec"
];

const getDate = (): string => {
    const date: Date = new Date()
    const monthIndex: number = date.getMonth()
    const day: number = date.getDate()
    const year: number = date.getFullYear()


    return `${months[monthIndex]} ${day}, ${year}`
}

const getTime = (): string => {
    const date: Date = new Date()
    let hour: number = date.getHours()
    const minutes: number = date.getMinutes()
    let prefix: string = "";
    let affix: string;

    if (hour < 12) {
        affix = "am"
    } else if (hour == 12) {
        affix = "pm"
    } else {
        hour -= 12
        affix = "pm"
    }

    if (minutes < 10) prefix = "0"

    return `${hour}:${prefix}${minutes} ${affix}`
}

export { getDate, getTime }
