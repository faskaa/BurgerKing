const locationElements = document.querySelectorAll('.location-locations .bottom .location');

locationElements.forEach(function(location) {
    location.addEventListener('click', function() {
        this.classList.toggle('active');

        locationElements.forEach(function(element) {
            if (element !== this && element.classList.contains('active')) {
                element.classList.remove('active');
            }
        }, this);
    });
});

locationElements.forEach(function(location) {
    const heartButton = location.querySelector('.location-top .right button');

    heartButton.addEventListener('click', function(e) {
        e.stopPropagation(); 

        this.classList.toggle('active');

        const heartImgs = this.querySelectorAll('img');
        heartImgs.forEach(function(img) {
            img.classList.toggle('active');
        });
    });
});



        function showNearby() {
            document.querySelector('.nearby-content').style.display = 'block';
            document.querySelector('.favorites-content').style.display = 'none';
            document.querySelector('.recents-content').style.display = 'none';
        }

        function showFavorites() {
            document.querySelector('.favorites-content').style.display = 'block';
            document.querySelector('.nearby-content').style.display = 'none';
            document.querySelector('.recents-content').style.display = 'none';
        }

        function showRecents() {
            document.querySelector('.recents-content').style.display = 'block';
            document.querySelector('.nearby-content').style.display = 'none';
            document.querySelector('.favorites-content').style.display = 'none';
        }




const menuBtns = document.querySelectorAll('.location-locations .locations-menu button');
menuBtns.forEach(function(button){
    button.addEventListener('click', e=>{
        menuBtns.forEach(function(btn){
            btn.classList.remove("active")
    
        })
        console.log("a");
        button.classList.toggle("active")
        
        
    })
})

// const a = document.querySelector('.nearby-content .location .location-top .right button');
// a.addEventListener('click' , e=>{
//     console.log("Ok");

//     const imgElemet = this.querySelectorAll('img');
//     imgElemet.forEach(function(imgs){
//         console.log("aa");
//     })
    
// })

const nearbyImg = document.querySelector('.nearby-content .location .location-top .right button');
nearbyImg.addEventListener('click' , function(){
    console.log("Ok");
    var imgElements = this.querySelectorAll("img");
    imgElements.forEach(function(imgs){

        imgs.classList.toggle("active")
    })
    
})


const favoriteImg = document.querySelector('.favorites-content .location .location-top .right button');
favoriteImg.addEventListener('click' , function(){
    console.log("Ok");
    var imgElements = this.querySelectorAll("img");
    imgElements.forEach(function(imgs){

        imgs.classList.toggle("active")
    })
    
})

const recentImg = document.querySelector('.recents-content .location .location-top .right button');
recentImg.addEventListener('click' , function(){
    console.log("Ok");
    var imgElements = this.querySelectorAll("img");
    imgElements.forEach(function(imgs){

        imgs.classList.toggle("active")
    })
    
})