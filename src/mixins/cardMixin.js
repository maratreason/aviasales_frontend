export default {
    methods: {
        getTime(time) {
            const options = {
                hour: "2-digit",
                minute: "2-digit",
            };
            return new Date(time).toLocaleString("ru-Ru", options);
        },
        parseTime(time) {
            let c = time.toString().split(":");
            return parseInt(c[0]) * 60 + parseInt(c[1]);
        },
        getTimeFromMins(mins) {
            let hours = Math.trunc(mins / 60);
            let minutes = mins % 60;
            return hours + ":" + minutes;
        },
        resultTime(startTime, duration) {
            let date = new Date(startTime);

            const options = {
                hour: "2-digit",
                minute: "2-digit",
            };

            return new Date(date.setMinutes(duration)).toLocaleTimeString("ru-Ru", options);
        },
        convertTime(time) {
            const cTime = this.getTimeFromMins(time).split(":");
            return `${cTime[0]}ч ${cTime[1]}м`;
        },
        getStops(stops) {
            return stops.join(", ");
        },
        insertSymbol(count, symb1, symb2) {
            return count === 1 ? symb1 : symb2;
        }
    }
}
