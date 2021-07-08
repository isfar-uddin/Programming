function timeConversion(s) {
    // Write your code here
    if(!s) return;
    let format = s.slice(-2);
    let time = s.slice(0,-2).split(':');
    let hour = time[0];
    let second = time[2];
    let convertedHour = 0;
    if(format.toUpperCase() === 'AM' && hour === '12') {
        time[0] = '00';
        return time.join(':');
    }
    if(format.toUpperCase() === 'PM') {
        time[0] = hour % 12 + 12;
    }
    return time.join(':');
}
