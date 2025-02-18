<script>
function showImage(imageId) {
    const images = document.querySelectorAll('.hover-images img');
    images.forEach(img => img.setAttribute('data-active', 'false'));
    const activeImage = document.getElementById(imageId);
    activeImage.setAttribute('data-active', 'true');
}
</script>