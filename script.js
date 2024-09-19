const form = document.querySelector(".form");
const query = document.querySelector(".query");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.dir(form[0].value)
    const kekka = form[0];
    const a = await axios.get(`https://api.tvmaze.com/search/shows?q=${kekka.value}`);
    console.log(a.data[0].show.image.medium);
    
    forfor(a.data)
})

const forfor = (results) => {
    for(let result of results) {
        console.log(result)
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        document.body.append(img);
    }
}