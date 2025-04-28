export async function getBirthdayDetails(bday) {
    const response = await fetch(`http://localhost:8080/birthdayDetails?bday=${bday}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch birthday details');
    }

    return data;
}