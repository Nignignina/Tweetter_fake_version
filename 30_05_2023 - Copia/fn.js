export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

export const tweetGen = (tweetData) => {
  // img, name , username, bodyText, react Tweetdataci serve per ricavare post e user

  const wrapperPost = cE("div");
  const profilePost = cE("div");
  const imgPost = cE("img");
  const wrappertextPost = cE("div");
  const profileText = cE("div");
  const nameProfile = cE("span");
  const nicknameProfile = cE("span");
  const textPost = cE("p");
  const reactionPost = cE("div");
  const iconPost = cE("svg");
  
  
  const numberReaction = cE("span");
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  wrapperPost.className = "wrapperTweet";
  profilePost.className = "wrapperImg";
  imgPost.src = tweetData.user?.image || imagePlaceholder;
  wrappertextPost.className = "wrapperText";
  nameProfile.textContent = tweetData.user?.firstName + "" +tweetData.user?.lastName;
  nicknameProfile.textContent ="@"+ tweetData.user?.username;
  textPost.textContent =tweetData.body;
  numberReaction.textContent = tweetData.reactions;
  profileText.className ="userData";
  nicknameProfile.className="nickname";
  nameProfile.className="nameProfile";

  
  wrapperPost.append(profilePost, wrappertextPost);
  profilePost.append(imgPost);
  wrappertextPost.append(profileText, textPost, reactionPost);

  profileText.append(nameProfile, nicknameProfile);
  reactionPost.append(iconPost, numberReaction);

  return wrapperPost;

  //  questa struttura la creo per capire la funzione generatrice. quindi creo questo mock per aiutare a comprendere la funzione generatrice
};
