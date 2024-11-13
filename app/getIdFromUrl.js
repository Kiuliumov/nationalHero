function getIdFromUrl(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    return id
}


export default getIdFromUrl