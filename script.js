function toggleAnswer(element) {
    const answer = element.querySelector('.answer');
    const icon = element.querySelector('.icon');
    
    // Toggle the answer's visibility
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    } else {
        answer.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    }
}