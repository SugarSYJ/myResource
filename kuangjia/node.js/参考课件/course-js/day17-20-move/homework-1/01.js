window.onload = function () {
    var container = document.getElementById('container');
    container.onmouseover = function (_event) {
        var self = _event.target;
        var tagname = self.tagName.toLowerCase();
        if (tagname == 'img' || tagname == 'a') {
            if (tagname == 'img') {
                self = self.nextSibling.nextSibling;
            }
            if (self.timer) {
                window.clearInterval(self.timer);
            }
            self.timer = window.setInterval(function () {
                var top = self.offsetTop;
                var speed = (top / 8);
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                top -= speed;
                if (top <= 0) {
                    top = 0;
                    window.clearInterval(self.timer);
                }
                self.style.top = top + 'px';
            }, 30)
        }
    }

    container.onmouseout = function (_event) {
        var self = _event.target;
        var tagname = self.tagName.toLowerCase();
        if (tagname == 'img' || tagname == 'a') {
            if (tagname == 'img') {
                self = self.nextSibling.nextSibling;
            }
            if (self.timer) {
                window.clearInterval(self.timer);
            }
            self.timer = window.setInterval(function () {
                var top = 140 - self.offsetTop;
                var speed = (top / 8);
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                top = self.offsetTop + speed;
                if (top >= 140) {
                    top = 140;
                    window.clearInterval(self.timer);
                }
                self.style.top = top + 'px';
            }, 30)
        }
    }
}