fetch('textFile.txt')
.then(response => response.json())
.then(json => {
    console.log(json)
    console.log(json[2].address)
    json[0].phone = 90202010
    console.log(json[0].phone)
    json.forEach(element => {
        if (element.email.includes ("Sherwood@rosamond.me")) {
            console.log(element.username)
            console.log(element.name)
        }
    });
    });

    fetch('fotograf.json')
     .then(response => response.json()) 
     .then(json => {
     console.log(json)
    console.log(json.length)
    //Oppgave 2

    
    let album = []
    json.forEach(element => { 
        let check = element.albumId
        if (album.includes(check) == false) {
            album.push (element.albumId)
        }
    })
    console.log(album)
    console.log(Math.max(...album))

    json.forEach(element => {
        if (element.id == 238) {
            console.log(element.title)
        }
    }) 

    json.forEach(element => {
        if  (element.id == 555) {
            var img = document.createElement("img");
            img.src = element.url;
            var src = document.getElementById("x");
            src.appendChild(img);
        }

    })
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(json =>{
    json.forEach(element => {
        if (element.id == 95) {
            console.log(element.title)
        }
    })
    json.forEach(element => {
        if(element.userId == 5) {
            element.body = "Hei Hei"
        }

    })
    console.log(json)
})