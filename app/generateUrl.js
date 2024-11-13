function generateUrl(id){
    const url = new URL('http://127.0.0.1:5500/template.html');
    url.searchParams.append('id', id)
    return url.toString();
}

module.exports = generateUrl;