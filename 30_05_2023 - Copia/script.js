import { GET } from "./http.js";
import { qS, tweetGen } from "./fn.js";

// const navBaritem = qS(".navBarLink");
const contentPost = qS(".centralContent");
const tabs = document.querySelectorAll(".tab");
console.log(tabs);

GET("posts").then((posts) => {
  console.log(posts);
});

GET("users").then((users) => {
  console.log(users);
});

// creo degli array dove storare i get di user e di post

let usersList = [];
let postsList = [];

// visto che è promise rimarrà pending quindi ha bisogno di un then
const allData = Promise.all([GET("posts"), GET("users")]);

allData
  .then((data) => {
    postsList = data[0].posts;
    usersList = data[1].users;
  })
  .then(() =>
    postsList
      .map((post) => {
        post.user = usersList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => contentPost.append(tweetGen(post)))
  );

// events
if (tabs) {
  tabs.forEach((element) => {
    element.addEventListener("click", () => {
      let active = document.querySelector(".active.tab");
      active.classList.remove("active");
      element.classList.add("active");
    });
  });
}

// contentPost.append(tweetGen(tweetData));

// Events
// const navBar = qS(navBarItems)

// navBar.array.forEach((element) => {
//     element.addEventListener("click" ,() =>
//     {
//         navBar.forEach((item) => {
//             item.classList.remove("active")
//         })
//     })
//     element.classList.add("active")

// });
