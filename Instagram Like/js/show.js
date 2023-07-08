import { isLiked, displayContent } from "./app.js";

export const createPost = (post) => {
  const image = post?.image;

  const div = document.createElement("article");

  div.classList.add("post");
  div.innerHTML = `
    <div class="post__header">
      <div class="post__profile">
        <a
          href="https://github.com/ProgrammingHero1"
          target="_blank"
          class="post__avatar"
        >
          <img src="${image}" alt="User Picture" />
        </a>
        <a href="#" class="post__user">phero</a>
      </div>

      <button class="post__more-options">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
    </div>

    <div class="post__content">
      <div class="post__medias">
        <img
          class="post__media"
          src="${image}"
          alt="Post Content"
        />
      </div>
    </div>

    <div class="post__footer">
      <div class="post__buttons">
        <button class="post__button" onclick="addToLiked(${post.id})">
        <i class="fa-solid fa-heart ${isLiked(post.id) && "text-danger"}"></i>
          
        </button>
        <button class="post__button">
          <i class="fa-solid fa-comment"></i>
        </button>
        

        <div class="post__indicators"></div>

        <button class="post__button post__button--align-right" onclick="reportPost(${
          post.id
        })">
          <i class="fa-solid fa-ban"></i>
        </button>
      </div>

      <div class="post__content">${displayContent(post?.description)}</div>

      <div class="post__infos">
        <div class="post__likes">
          <a href="#" class="post__likes-avatar">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="User Picture" />
          </a>

          <span>Liked by
            <a class="post__name--underline" href="#">user123</a> and
            <a href="#">73 others</a></span>
        </div>

        <hr/>

        <div class="post__description">
          <small>
            <a class="post__name--underline" href="#">
                ${post?.comments?.[0].user}
            </a>
            ${post.comments?.[0].text}
          </small>
        </div>
        <span class="post__date-time">30 minutes ago</span>
      </div>
    </div>
  `;

  return div;
};
