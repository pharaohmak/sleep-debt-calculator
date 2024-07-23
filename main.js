function main() {
    const getSleepHours = day => {
        switch (day) {
            case 'monday':
                return 8;
            case 'tuesday':
                return 6;
            case 'wednesday':
                return 5;
            case 'thursday':
                return 7;
            case 'friday':
                return 12;
            case 'saturday':
                return 5;
            case 'sunday':
                return 6;
            default:
                return 'Error!';
        }
    };
    console.log(getSleepHours('monday'));

    const getActualSleepHours = () => {
        let actualHours = document.getElementById('actual').value;
        return actualHours + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('friday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    }
    console.log(getActualSleepHours());
    

    const getIdealSleepHours = () => {
        let idealHours = document.getElementById('ideal').value;
        return idealHours * 7;
    };
    console.log(getIdealSleepHours());

    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
        if (actualSleepHours === idealSleepHours) {
            console.log('You got the ideal amount of sleep');
        } else if (actualSleepHours > idealSleepHours) {
            console.log("you got " + (actualSleepHours - idealSleepHours) + " extra hours of sleep!");
        } else if (idealSleepHours > actualSleepHours) {
            console.log('You should get some rest, you slept ' + (idealSleepHours - actualSleepHours) + ' under your ideal hours of sleep');
        } else {
            console.log('Something went wrong');
        }
    };

    calculateSleepDebt();
}