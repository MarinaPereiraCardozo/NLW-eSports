
export function convertHoursToMinutes(hoursString: string) {

    const [hours, minutes] = hoursString.split(':').map(Number);

    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}