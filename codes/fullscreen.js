const fullscreen = (mode = true, el = 'body') =>
  mode
    ? document.querySelector(el).requestFullscreen()
    : document.exitFullscreen();

// 예시
fullscreen(); // Opens `body` in fullscreen mode
fullscreen(false); // Exits fullscreen mode
