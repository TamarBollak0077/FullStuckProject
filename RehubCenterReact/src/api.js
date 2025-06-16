export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
        if (response.status === 204) {
        return null;
    }
    return await response.json();
};

export const fetchPatients = async () => {

    // return await fetchData('http://localhost:5253/api/Patient/signup'); // הוספת פונקציה זו

    return await fetchData('http://localhost:5253/api/Patient'); // הוספת פונקציה זו

};
