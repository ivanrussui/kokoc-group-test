export const fetchData = async () => {
    try {
        const response = await fetch('https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};
