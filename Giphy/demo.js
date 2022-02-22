
search_img = () => {
  let str = document.getElementById("search-word").value;
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=${str}&api_key=8eBNn4EI6KXkjbP6xeLfJXHDn3aq7Foq`
    )
    .then(function (response) {
		let rd = Math.floor(Math.random() * 50);
		let div = document.getElementById("display");
		let img = document.createElement("img");
		img.src = `${response.data["data"][rd].images.downsized.url}`;
		img.height = 250;
		div.append(img);
    })
    .catch(function (error) {
      console.log(error);
    });
};


clear_img = () =>{
	document.getElementById("display").innerHTML = ""
}
