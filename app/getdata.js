async function getData(id) {
  try {
    const response = await fetch('data.json');
    if (!response.ok) {
      throw new Error('There was an error in retrieving data.');
    }
    const data = await response.json();
    return data[id];
  } catch (error) {
    console.error('Error fetching or parsing JSON file:', error);
  }
}

export default getData;