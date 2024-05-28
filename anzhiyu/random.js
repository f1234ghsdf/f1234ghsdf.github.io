var posts=["2024/05/05/Unity第一人称移动系统/","2024/05/16/Unity脚本生命周期/","2024/05/05/标题copy/","2024/05/10/UE5仿鬼泣Demo/","2024/05/28/Unity微信小程序制作/","2024/05/05/江苏旅行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };