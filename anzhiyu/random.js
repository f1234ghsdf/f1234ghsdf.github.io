var posts=["2024/05/10/UE5仿鬼泣Demo/","2024/05/28/Unity微信小程序制作/","2024/05/05/Unity第一人称移动系统/","2024/05/05/Unity考试题/","2024/05/16/Unity脚本生命周期/","2024/05/05/江苏旅行/","2024/06/05/Unity技巧/","2024/06/15/UGUI/","2024/06/16/Unity类恶魔城Demo/","2024/05/28/Unity休闲游戏二/","2024/08/21/绝区零体验与拆分/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };