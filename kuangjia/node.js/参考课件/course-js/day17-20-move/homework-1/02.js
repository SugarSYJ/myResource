window.onload = function () {
    var ball = document.getElementById('ball');
    var bar = document.getElementById('bar');

    var hspeed = 5;
    var vspeed = 10;
    var timer = window.setInterval(function () {
        var left = ball.offsetLeft;
        var top = ball.offsetTop;
        left += hspeed;
        top += vspeed;
        if (left >= window.innerWidth - ball.clientWidth) {
            hspeed *= -1;
            left = window.innerWidth - ball.clientWidth;
        } else if (left <= 0) {
            hspeed *= -1;
            left = 0;
        }
        if (top >= window.innerHeight - ball.clientHeight) {
            vspeed *= -1;
            top = window.innerHeight - ball.clientHeight;
        } else if (top <= 0) {
            vspeed *= -1;
            top = 0;
        }

        if (top >= bar.offsetTop - ball.clientHeight) {
            if (left >= bar.offsetLeft && left <= bar.offsetLeft + bar.clientWidth) {
                vspeed *= -1;
            }
        }

        ball.style.left = left + 'px';
        ball.style.top = top + 'px';
    }, 30)


    var barSpeed = 10;
    document.onkeydown = function (_event) {
        _event = _event || window.event;
        var keyCode = _event.keyCode || _event.which;
        barSpeed++;
        if (barSpeed >= 50) {
            barSpeed = 50;
        }
        //go right
        if (keyCode == 39) {
            var left = bar.offsetLeft;
            left += barSpeed;
            if (left >= window.innerWidth - bar.offsetWidth) {
                left = window.innerWidth - bar.offsetWidth;
            }
            bar.style.left = left + 'px';
        } else if (keyCode == 37) {//go left
            var left = bar.offsetLeft;
            left -= barSpeed;
            if (left <= 0) {
                left = 0;
            }
            bar.style.left = left + 'px';
        }
    }

    document.onkeyup = function () {
        barSpeed = 10;
    }
}