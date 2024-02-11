const locationElements = document.querySelectorAll('.delivery-locations .bottom .location');

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

