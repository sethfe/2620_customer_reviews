import { myCustomerReviews } from '../data/myreiviews.mjs';
console.log(myCustomerReviews);

const htmlElement = document.getElementById('reviews-here');

myCustomerReviews.forEach(r => {
    console.log(r);

    //create section for each review
    const rSection = document.createElement('section')
    rSection.classList = "p-6 border-2 border-secondary rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"

    //create h2 for name
    const theName = document.createElement('h2')
    theName.className = "text-3xl text-primary font-bangers mb-3 tracking-wide"
    theName.textContent = r.name

    //create p for comments
    const theComment = document.createElement('p')
    theComment.textContent = r.comment
    theComment.className = "mb-4 text-gray-800 leading-relaxed italic"

    //building the rating stars
    const theStars = document.createElement('div')
    theStars.className = "flex items-center gap-1 mt-4 pt-3 border-t-2 border-accent"
    for (let i = 0; i < 5; i++) {
       // console.log(myCustomerReviews.stars)
       const starImage = document.createElement('img')
       console.log(r.rating)
       i < r.rating ? starImage.src = "./images/starColor.svg" : starImage.src = "./images/starGrey.svg"
       starImage.className = "w-7 h-7 drop-shadow-md hover:scale-125 transition-transform duration-200"
       starImage.alt = i < r.rating ? "Filled star" : "Empty star"
       theStars.appendChild(starImage)
    }

    // Append all the elements to the section
    rSection.appendChild(theName)
    rSection.appendChild(theComment)
    rSection.appendChild(theStars)

    // Append the section to the page
    htmlElement.appendChild(rSection)
})