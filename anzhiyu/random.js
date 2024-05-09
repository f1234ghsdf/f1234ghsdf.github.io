var posts=["2024/05/05/Unity第一人称移动系统/","2024/05/05/hello-world/","2024/05/05/标题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };