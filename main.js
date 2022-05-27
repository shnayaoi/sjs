console.log('frog');
const video = document.querySelector('video');
const text = document.getElementById('current');
text.innerText = 'desck';
video.addEventListener('timeupdate', (event) => {
    console.log(video.currentTime);
    if(video.currentTime>3) {
        text.innerText = 'Bom';
    }
});
