// يمكنك إضافة أي scripts إضافية تحتاجها لموقعك
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gothic Vibe Shop loaded successfully!');
    
    // إضافة تأثيرات للصور عند التمرير
    const productImages = document.querySelectorAll('.product-img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    productImages.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(img);
    });
});
