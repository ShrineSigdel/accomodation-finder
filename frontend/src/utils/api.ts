//Adds a card to the selection by sending a POST request to the server.
export const addToSelection = async (cardId: string) => {
    try {
        const res = await fetch('http://localhost:5000/api/selections/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cardId })
        })
        if (!res.ok) {
            throw new Error('Failed to add selection')
        }

        const data = await res.json()
        return data;
    } catch (error) {
        console.error(`Error adding to selection: ${error}`)
        throw error;
    }
}

