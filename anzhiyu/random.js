var posts=["2024/05/05/Unity第一人称移动系统/","2024/05/16/Unity脚本生命周期/","2024/05/10/UE5仿鬼泣Demo/","2024/05/28/Unity微信小程序制作/","2024/05/05/江苏旅行/","2024/05/05/Unity考试题/","2024/05/05/Unity 实用技巧 /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };