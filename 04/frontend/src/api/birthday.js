export async function getBirthdayDetails(bday) {
    const response = await fetch(`/api/birthdayDetails?bday=${bday}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch birthday details');
    }

    return data;
}