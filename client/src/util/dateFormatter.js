export default function dateFormatter(inputDate) {
    // Create a Date object from the MongoDB date string
    const dateObject = new Date(inputDate);

    // Extract year, month, and day from the Date object
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    // Concatenate the components to form the desired format
    const formattedDateString = `${year}-${month}-${day}`;

    return formattedDateString;
}
