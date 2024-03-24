function changeColor() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
function changeh1color(){
    const h1 = document.getElementById('hchar');
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    h1.style.backgroundColor = randomColor;
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

const likeButton = document.getElementById("likeButton");
const likedList = document.getElementById("likedList");

let likedVideos = [];

function handleLikeButtonClick() {

  const video = {
    title: "Chal Ghar chale",
    url: "Fvideo/chal.mp4",
  };

  if (
    !likedVideos.some(
      (v) => v.title === video.title && v.url === video.url
    )
  ) {
    likedVideos.push(video);
    updateLikedListUI();
  } else {
    alert("You've already liked this video!");
  }
}

function updateLikedListUI() {
  likedList.innerHTML = "";
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