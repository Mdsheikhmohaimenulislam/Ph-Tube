const loadButton = async () => {
    try {
        const fetchlink = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        const data = await fetchlink.json()
       displayButton(data.categories);

    } 
    catch (error) {
        console.log("Code Error");
    }

};

const displayButton =  (categories) => {

    for(let cat of categories){
        const button = document.createElement("div")
        button.innerHTML = `
         <button class="btn btn-sm">${cat.category }</button> 
        `
    
        document.getElementById("catagory-container").appendChild(button)
        console.log(button);
    }



};

loadButton()