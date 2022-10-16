const PostSummaryItem = (item) => {
    return (`
    <li class="list-group-item">
      <div class="d-flex flex-row p-2">
        <div class="flex-fill">
          <p class="text-muted">${item.topic}</p>
          <p><span class="fw-bold wd-top-margin-reduce">${item.userName}</span> <i class="fa fa-check-circle"></i><span class="wd-light-grey-text"> -
              ${item.time}</span></p>
          <p class="fw-bold wd-top-margin-reduce wd-reduce-margin-top">${item.title}</p>
          ${item.tweets ? `<p class="wd-light-grey-text  wd-reduce-margin-top">${item.tweets} tweets</p>` : ''}
        </div>
        <div class="ps-2">
          <img src="${item.image}" class="wd-img-icon" />
        </div>
      </div>
    </li>

  `);
}
export default PostSummaryItem;