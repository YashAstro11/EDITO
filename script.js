function changeColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
function bgbox1(){
    var box1 = document.getElementById('box1');
    // box1.style.backgroundColor = "rgb(255, 0, 0)";
    if(box1.style.backgroundColor == 'rgb(255, 0, 0)'){
        box1.style.backgroundColor = '#000';
    } else{
        box1.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}
function bgbox2(){
    var box2 = document.getElementById('box2');
    // box2.style.backgroundColor = "rgb(255, 0, 0)";
    if(box2.style.backgroundColor == 'rgb(255, 0, 0)'){
        box2.style.backgroundColor = '#000';
    } else{
        box2.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}
function bgbox3(){
    var box3 = document.getElementById('box3');
    // box3.style.backgroundColor = "rgb(255, 0, 0)";
    if(box3.style.backgroundColor == 'rgb(255, 0, 0)'){
        box3.style.backgroundColor = '#000';
    } else{
        box3.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}
function saveVideo2(){
    var video = document.getElementById('myVideo2');
    var url = video.src;
    var a = document.createElement('a');
    a.href = url;
    a.download = 'DARE_edit.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function saveVideo1(){
    var video = document.getElementById('myVideo1');
    var url = video.src;
    var a = document.createElement('a');
    a.href = url;
    a.download = 'chal.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function saveVideo3(){
    var video = document.getElementById('myVideo3');
    var url = video.src;
    var a = document.createElement('a');
    a.href = url;
    a.download = 'WHY_Trim.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// adding the event when clicked on the like button 

// Get references to the like button and liked list
const likeButton = document.getElementById("likeButton");
const likedList = document.getElementById("likedList");

// Initialize an empty array to store liked videos
let likedVideos = [];

// Function to handle click event on like button
function handleLikeButtonClick() {
  // Get reference to your video
  const video = {
    title: "Chal Ghar chale",
    url: "Fvideo/chal.mp4",
  };

  // Check if the video is already in the liked list
  if (
    !likedVideos.some(
      (v) => v.title === video.title && v.url === video.url
    )
  ) {
    // Add the video to the array of liked videos
    likedVideos.push(video);
    // Call a function to update the UI
    updateLikedListUI();
  } else {
    alert("You've already liked this video!");
  }
}

// Function to update the UI with the list of liked videos
function updateLikedListUI() {
  // Clear the existing list
  likedList.innerHTML = "";
  // Iterate over the liked videos array and create list items
  likedVideos.forEach((video) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = video.url;
    a.textContent = video.title;
    a.target = "_blank";
    li.appendChild(a);
    likedList.appendChild(li);
  });
}

likeButton.addEventListener("click", handleLikeButtonClick);