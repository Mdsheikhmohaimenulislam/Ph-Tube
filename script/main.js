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


// button category video click section
const loadVideoCategory = async (id) => {
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}` 

    const response = await fetch(url)
    const data = await response.json()

   {const clickButton = document.getElementById(`btn-${id}`)
        clickButton.classList.add("active")

        displayVideo(data.category)}
       

    
};




// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//     {
//     "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//     "profile_name": "Olivia Mitchell",
//     "verified": ""
//     }
//     ],
//     "others": {
//     "views": "100K",
//     "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     }




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
            </div>

             `;
            return;
        }
  

        for(let video of videos){

            const videoContainer = document.createElement("div");
            videoContainer.innerHTML =`
                <div class="card bg-base-100 space-x-5 space-y-5 mb-5">
                    <figure class = "relative">
                      <img class ="w-full h-[150px] object-cover"
                        src="${video.thumbnail}"
                        alt="thumbnail" />
                        <span class = "absolute bottom-2 right-2 bg-black text-white p-1 rounded">3hrs 56 min ago</span>
                    </figure>
                    <div class="card-body flex-row gap-5 px-1 py-0">
                         <div class="avatar">
                           <div class="ring-primary ring-offset-base-100 w-9 h-9 rounded-full ring ring-offset-2">
                             <img src=${video.authors[0].profile_picture} />
                           </div>
                         </div>
                        <div>
                            <h1 class ="text-base font-bold">${video.title}</h1>
                            <p class ="flex gap-2 text-sm text-[#17171790]">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=eZo3c88c63il&format=png" /></p>
                            <p class ="text-sm text-[#17171790]">${video.others.views} views</p>
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


loadButton()
