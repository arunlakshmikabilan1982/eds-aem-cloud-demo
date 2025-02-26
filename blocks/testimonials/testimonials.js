
export default function decorate(block) {
// Create the main row container
const row = document.createElement('div');
row.className = 'row';

// Create the carousel container
const carousel = document.createElement('div');
carousel.className = 'owl-carousel testimonial-carousel';

[...block.children].forEach((row) => {
    const col = document.createElement('div');
    col.className = 'col-sm-3 col-xs-12';

    const singleTestimonialBox = document.createElement('div');
    singleTestimonialBox.className = 'single-testimonial-box';

    const testimonialDescription = document.createElement('div');
    testimonialDescription.className = 'testimonial-description';

    const testimonialInfo = document.createElement('div');
    testimonialInfo.className = 'testimonial-info';

    const testimonialImg = document.createElement('div');
    testimonialImg.className = 'testimonial-img';
    const img = row.children[0].querySelector('img');
    testimonialImg.appendChild(img);

    testimonialInfo.appendChild(testimonialImg);

    const testimonialComment = document.createElement('div');
    testimonialComment.className = 'testimonial-comment';
    const commentParagraph = document.createElement('p');
    commentParagraph.innerText = row.children[1].textContent;
    testimonialComment.appendChild(commentParagraph);

    const testimonialPerson = document.createElement('div');
    testimonialPerson.className = 'testimonial-person';
    const personName = document.createElement('h2');
    const personLink = document.createElement('a');
    personLink.href = '#';
    personLink.innerText = row.children[2].textContent;
    personName.appendChild(personLink);
    const locationText = document.createElement('h4');
    locationText.innerText = row.children[3].textContent;


    testimonialPerson.appendChild(personName);
    testimonialPerson.appendChild(locationText);

    console.log((row.children[2].className = 'testimonial-person'))
    console.log()

     // Organize the structure
     testimonialDescription.appendChild(testimonialInfo);
     testimonialDescription.appendChild(testimonialComment);
     testimonialDescription.appendChild(testimonialPerson);
     singleTestimonialBox.appendChild(testimonialDescription);
     col.appendChild(singleTestimonialBox);
     carousel.appendChild(col);
});
row.appendChild(carousel);
block.textContent = '';
block.append(row);
}