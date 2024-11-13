function getData(id){
  const fs = require('fs');

  try {
    const jsonString = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonString);
    return data[id]
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
  }

}


module.exports = getData