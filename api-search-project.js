document.getElementById("button").addEventListener("click", function(){
    const count = document.getElementById("input").value;
    const countText = parseInt(count)
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            data= data.slice(0, countText)
            const name = document.getElementById("name");
            name.innerHTML= '';
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                const h = document.createElement("p")
                h.innerHTML = `<strong>Name :</strong> ${user.name} <button onclick="seeMore(${user.id})">see details ${user.id}</button>`
                name.appendChild(h)
            }
        })
})
    function seeMore(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            const info = document.getElementById("details-info");
           info.innerHTML = ` <h2> id : ${data.id}</h2> 
            <h1>name: ${data.name} </h1>
            <h3>email: ${data.email} </h3>
            <h3>phone: ${data.phone} </h3>
            <h3>website: ${data.website} </h3>
           `

            
        })
    }
