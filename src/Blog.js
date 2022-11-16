import React from "react";

function Blog() {
    return (
        <div className="blog">
            <p>Phase 2 of my software engineering course was learning how to use React. For our final projects we were required to:</p>
            <ul>
                <li>use Create React App to create a single page application and  </li>
                <li>using the starter code provided, deliver a functioning React Evernote-like app </li>
            </ul>
            <h4>Create React App</h4>
            <img className="blog-image" src="./images/brownie_1.png" alt="app home page"></img>
            <p>The Create React App deliverables included:</p>
            <ul>
                <li>Using React Router </li>
                <li>Making a GET request to a json-server RESTful API</li>
                <li>Creating a controlled form component that POSTS to the server</li>
            </ul>
            <img className="blog-image" src="./images/brownie_2.png" alt="app recipes"></img>
            <p>Seeing as we had to create our own RESTful API, I decided to create a brownie recipe app with recipes I found on the <a href="https://www.bbcgoodfood.com/recipes/collection/brownie-recipes">BBC goodfood</a> website. From my understanding recipes are not copyrighted so I didn’t have to worry that I was using data without permission. Just to be safe though, I credited the source on my app.</p>
            <p>Using React Router NavLinks I created a nav bar with three tabs, one for the home page, one for the brownie recipes and one for the photo gallery. I made a GET request to the RESTful API for the brownie recipes which I displayed on the brownie recipe tab. On the gallery tab there is a form that allows users to submit a picture of their baking for the photo gallery. The form, when submitted, POSTS the name of the entry, any comments made and an image. The app is simple, but it met all the deliverables and inspired me to actually bake some brownies, which were delicious!</p>
            <img className="blog-image" src="./images/brownie_3.png" alt="app gallery"></img>
            <h4>React Note App</h4>
            <p>The React Evernote-like app deliverables included updating the starter to code to:</p>
            <ul>
                <li>View notes in a sidebar and display them separately, when clicked</li>
                <li>Filter notes in the sidebar</li>
                <li>Create notes by clicking a ‘new’ button</li>
                <li>Edit notes by clicking an ‘edit’ button</li>
                <li>Stretch goal of our choice (I chose to add the ability to delete notes) </li>
            </ul>
            <p>The starter code included the component structure already set up and our goal was to make the components function as required. I found this challenging because you had to use the structure provided so you had to figure out how this was meant to work and then actually get it to work as intended. I spent a lot of time just playing around with different ideas and had many frustrating moments when nothing seemed to work. I also had to have a few sessions with my course mentor to talk through what the code was trying to do and he even found it challenging in some parts. When I felt I was going nowhere I stopped working on it and I found as I was going on with my day inspiration would strike me and I would try out something different. It didn’t always work out but when it did it was the best feeling ever. So satisfying making something come to “life”!</p>
            <img className="blog-image" src="./images/note.png" alt="note app"></img>
            <h4>Conclusion</h4>
            <p>Overall, the React phase was enjoyable, definitely frustrating at times but also very rewarding. I feel more confident now, compared to the JavaScript phase of the course, that I am starting to understand how to create front-end applications. Now it’s on to the back-end with phase 3, Ruby!</p>
        </div>
    )
}

export default Blog;