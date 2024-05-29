function calculateAge() {
    var dob = new Date(document.getElementById("dob").value);
    var birthMonth = parseInt(document.getElementById("month").value);
    var birthYear = parseInt(document.getElementById("year").value);

    // Getting current date
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Month is zero-indexed

    // Calculating age
    var age = currentYear - birthYear;
    if (currentMonth < birthMonth) {
        age--; // If current month is before birth month, decrement age
    } else if (currentMonth === birthMonth) {
        var currentDay = currentDate.getDate();
        var birthDay = dob.getDate();
        if (currentDay < birthDay) {
            age--; // If current day is before birth day, decrement age
        }
    }

    document.getElementById("result").innerHTML = "Your age is: " + age;
}
