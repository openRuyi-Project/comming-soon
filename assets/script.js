// -----------------------
// 1. Logo 弹跳逻辑
// -----------------------
(function() {
    const logo = document.getElementById('bouncing-logo');
    
    let x = 0;
    let y = 0;
    let speed = 1.8; // 速度
    let dirX = (Math.random() > 0.5 ? 1 : -1) * speed;
    let dirY = (Math.random() > 0.5 ? 1 : -1) * speed;

    // 初始位置
    x = Math.random() * (window.innerWidth - 200);
    y = Math.random() * (window.innerHeight - 200);

    function updateLogo() {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const logoW = logo.offsetWidth || 100;
        const logoH = logo.offsetHeight || 75;

        x += dirX;
        y += dirY;

        if (x + logoW >= winW) {
            x = winW - logoW;
            dirX = -Math.abs(dirX);
        } else if (x <= 0) {
            x = 0;
            dirX = Math.abs(dirX);
        }

        if (y + logoH >= winH) {
            y = winH - logoH;
            dirY = -Math.abs(dirY);
        } else if (y <= 0) {
            y = 0;
            dirY = Math.abs(dirY);
        }

        logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        requestAnimationFrame(updateLogo);
    }
    requestAnimationFrame(updateLogo);
})();

// -----------------------
// 2. 星空背景逻辑
// -----------------------
(function() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }

    function initStars() {
        stars = [];
        // 星星数量
        const starCount = 100; 
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2, // 星星大小
                speed: Math.random() * 0.5 + 0.1 // 移动速度
            });
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#ffffff';

        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            // 让星星稍微移动（模拟太空漂浮感）
            star.x -= star.speed;

            // 如果移出左屏幕，重置到右边
            if (star.x < 0) {
                star.x = width;
                star.y = Math.random() * height;
            }
        });

        requestAnimationFrame(animateStars);
    }

    window.addEventListener('resize', resize);
    resize();
    animateStars();
})();