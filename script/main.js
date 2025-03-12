// button section
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


// video section
const loadVideo = async () => {
    try {
        const fetchVideo = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        const dataVideo = await fetchVideo.json()
        displayVideo(dataVideo.videos)

    } 
    catch (error) {
        console.log("Code error loadVideo");
    }
};


// video section
const displayVideo = async (videos) => {
    try {
        for(let video of videos){

            const videoContainer = document.createElement("div")
            videoContainer.innerHTML =`
                <div class="card bg-base-100 space-x-5 space-y-5 shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Card Title</h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                </div>

            `
            document.getElementById("video-container").appendChild(videoContainer)
        }
        
    } catch (error) {
        console.log("Display video code error");
    }
};


// button section
const displayButton =  (categories) => {

    for(let cat of categories){
        const button = document.createElement("div")
        button.innerHTML = `
         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category }</button> 
        `

        document.getElementById("catagory-container").appendChild(button)

    }



};


loadButton()
loadVideo()