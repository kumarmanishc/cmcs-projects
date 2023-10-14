document.addEventListener('DOMContentLoaded', function() {
    const imageUrlInput = document.getElementById('imageUrl');
    const addImageButton = document.getElementById('addImage');
    const imageGallery = document.getElementById('imageGallery');

    addImageButton.addEventListener('click', function() {
        const imageUrl = imageUrlInput.value.trim();
        if (imageUrl === '') return;

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = imageUrl;

        imgContainer.appendChild(img);
        imageGallery.appendChild(imgContainer);

        imageUrlInput.value = '';
    });
});
