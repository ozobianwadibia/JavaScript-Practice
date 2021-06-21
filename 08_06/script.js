/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const articleObject = {
  mainHeading: "New article heading",
  subHeading: "A long long time ago, in a far far away galaxy...",
};

const articleContent = `<header> 
<h1>${articleObject.mainHeading}</h1>
<p>${articleObject.subHeading}</p>
</header>`;

function makeArticle() {
  const article = document.createElement("article");
  const main = document.querySelector("main");
  article.innerHTML = articleContent;
  main.appendChild(article);
}

const changeHeading = function () {
  const heading = document.querySelector("h1");
  heading.innerText = "This is the new main Heading";
  heading.style.color = "red";
};

makeArticle();

setTimeout(changeHeading, 5000);
