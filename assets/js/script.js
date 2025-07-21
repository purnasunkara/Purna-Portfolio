function copyEmail() {
    var email = "purnasaisunkara@gmail.com";
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    // alert("Email copied to clipboard!");
}

document.addEventListener('DOMContentLoaded', () => {
    const calculateTotalExperience = () => {
        const currentDate = new Date().toISOString().split('T')[0];
        const projects = [
            { name: 'Project44', startDate: '2022-05-02', endDate: currentDate },
            { name: 'Redbox', startDate: '2016-09-01', endDate: '2022-05-01' },
            { name: 'Apps HR', startDate: '2014-05-01', endDate: '2015-11-01' },
            // Add more projects here
        ];

        const totalMonths = projects.reduce((months, project) => {
            const { startDate, endDate } = project;
            const [startYear, startMonth] = startDate.split('-');
            const [endYear, endMonth] = endDate.split('-');
            const monthsInYear = 12;

            if (startYear === endYear) {
                return months + Number(endMonth) - Number(startMonth);
            } else {
                return months + monthsInYear - Number(startMonth) + (endYear - startYear - 1) * monthsInYear + Number(endMonth) + 1;
            }
        }, 0);

        const totalYears = Math.floor(totalMonths / 12);

        let remainingMonths = totalMonths % 12;
        remainingMonths = remainingMonths > 0 ? '+' : '';
        return `${totalYears}${remainingMonths}`;
    };

    // Call the calculateTotalExperience function to get the total experience
    const totalExperience = calculateTotalExperience();

     // Select all elements with the ID "years-of-experience"
    const yearsOfExperienceElements = document.querySelectorAll('#years-of-experience');

    // Update the content of all elements with the total experience
    yearsOfExperienceElements.forEach(element => {
        element.innerHTML = totalExperience;
    });
});