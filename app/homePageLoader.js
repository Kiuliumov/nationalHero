window.onload = function() {
    fetch('data.json')
        .then(response => response.json()) 
        .then(data => {
            const list = document.getElementById('heroesList');

            if (list) {
                Object.keys(data).forEach(key => {
                    const hero = data[key];
                    
                    const link = document.createElement('a');
                    link.href = `https://kiuliumov.github.io/nationalHero/?id=${key}`;

                    const listItem = document.createElement('li');
                    listItem.textContent = hero.title;
                    
                    listItem.addEventListener('click', (e) => {
                        e.preventDefault();
                        setTimeout(() => {
                            window.location.href = link.href;
                        }, 150);
                    });

                    link.appendChild(listItem);
                    list.appendChild(link);
                });
            }
        })
        .catch(error => console.error('Error loading the JSON data:', error));

    document.body.style.opacity = '1';
};