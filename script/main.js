// active button class remove
const removeActive = () => {
    try {
        const removeButton = document.getElementsByClassName("active");
          for(let btn of removeButton){
            btn.classList.remove("active");
          }
        
    } catch (error) {
        console.log("removeActive code error");
    }
}

// button section
const loadButton = async () => {
    try {
        const fetchlink = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        const data = await fetchlink.json()
       displayButton(data.categories)
       

    } 
    catch (error) {
        console.log("Code Error");
    }

};


// video section
const loadVideo = async (inputText) => {
    try {
        const fetchVideo = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${inputText}`)
        const dataVideo = await fetchVideo.json()

//Example .then((dataVideo) => {  displayVideo(dataVideo.videos)   })  

// {} Curly brackets or braces duita paramiter nice 
        {
            // all button section
            removeActive();
            document.getElementById("all-btn").classList.add("active")

            displayVideo(dataVideo.videos)
        } 

    } 
    catch (error) {
        console.log("Code error loadVideo");
    }
};


// button category video click section
const loadVideoCategory = async (id) => {
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}` 

    const response = await fetch(url)
    const data = await response.json()

// {} Curly brackets or braces duita paramiter nice and butto ka class add korci 
      {
        // Dynamic butto remove call section and added button class
        removeActive();
        const clickButton = document.getElementById(`btn-${id}`)
        clickButton.classList.add("active")

        displayVideo(data.category)

    };
       

    
};

// showDetails button
const showDetails = async (videoId) => {

    const url =`
    https://openapi.programming-hero.com/api/phero-tube/video/${videoId}

    `

     const response = await fetch(url)
     const data = await response.json()
     displayDetailsVideo(data.video)

}



//? Dynamic Section 


// displayDetailsVideo
const displayDetailsVideo = (video) => {
    document.getElementById("show_details").showModal();

    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Thumbnail" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
  </div>
</div>
    `
}




//Dynamic video card section
const displayVideo = async (videos) => {
    try {

        const videoContainer = document.getElementById("video-container");

        // videoCheckingUrl
        videoContainer.innerHTML = "";

        // show sms 
        if(videos.length == 0){

            videoContainer.innerHTML = `
            <div class="col-span-full py-20 flex flex-col justify-center items-center text-center">
            <img class="ml-20 mb-3 w-30" src="./assets/Icon.png" alt="">
            <h1 class="font-bold text-2xl">Oops!! Sorry, There is no content here</h1>
         </div

         `
        }


        for(let video of videos){

            const videoContainer = document.createElement("div");
            
            videoContainer.innerHTML =`
                <div class="card bg-base-100 ">
                <div class="space-x-5 space-y-5 mb-5 mt-8">
                    <figure class = "relative">
                      <img class ="w-full h-[150px] object-cover rounded "
                        src="${video.thumbnail}"
                        alt="thumbnail" />
                        <span class = "absolute bottom-2 right-2 bg-black text-white p-1 rounded">3hrs 56 min ago</span>
                    </figure>
                    <div class="card-body  p-0">
                    <div class="card-body flex-row gap-5 px-1 py-0">
                        <div class="avatar">
                           <div class="ring-primary ring-offset-base-100 w-9 h-9 rounded-full ring ring-offset-2">
                             <img src=${video.authors[0].profile_picture} />
                           </div>
                         </div>
                        <div>
                            <h1 class ="text-base font-bold">${video.title}</h1>
                            <p class ="flex gap-2 text-sm text-[#17171790]">
                            ${video.authors[0].profile_name} 
                            ${video.authors[0].verified == true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png" alt="">` : ``}
                            </p>
                            <p class ="text-sm text-[#17171790]">${video.others.views} views</p>
                           
                        </div>
                    </div>
                        <div class="p-2 m-0"> 
                        <button onclick= showDetails('${video.video_id}')  id="show-details" class="btn btn-block">Show Details</button>
                        </div>
                    </div>
                    
                </div>
                    
                </div>

            `;
 
            document.getElementById("video-container").appendChild(videoContainer);

        }
        
    } catch (error) {
        console.log("Display video code error");
    }
};




// button section
const displayButton =  (categories) => {
    for(let cat of categories){
     
        const button = document.createElement("div");
        button.innerHTML = `
         <button id="btn-${cat.category_id}" onclick="loadVideoCategory(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category }</button> 

        `;

        document.getElementById("catagory-container").appendChild(button);

    }



};


// search-box
document.getElementById("search-box").addEventListener("keyup", (event) => {
    const input = event.target.value
    loadVideo(input);
})

loadButton()
