async function fetchData() {
    const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '40ae3c5a1amshea99ee6148bd266p1155b6jsn1bdaf209cf3d',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    const list = result.d;
    console.log(list)

    const movies = document.getElementById("results");

    const list1 = list.slice(1);
    //using map 
    const movie = list1.map((item)=>{
            const movieTitle = item.l;
        const poster = item.i.imageUrl;
        const movieYear = item.y;
        const layout = `<h1>${movieTitle}</h1>
        <img src="${poster}">
        <h2> ${movieYear}</h2>
        
        `
        movies.innerHTML += layout;
            
        

})

    

} catch (error) {
	console.error(error);
}
}

fetchData();
