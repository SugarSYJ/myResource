window.onload = function () {
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onmouseover = function (_event) {
            _event = _event || window.event;
            var self = _event.target;
            var content = self.nextSibling.nextSibling;
            var selfWidth = self.clientWidth;
            var contentWidth = content.clientWidth;
            content.style.left = (contentWidth - selfWidth) * -1 + 'px';
            if (self.timer) {
                window.clearInterval(self.timer);
            }
            self.timer = window.setInterval(function () {
                var left = content.offsetLeft;
                left += 2;
                if (left >= selfWidth) {
                    window.clearInterval(self.timer);
                    left = selfWidth;
                }
                content.style.left = left + 'px';
            })
        }

        tabs[i].onmouseout = function (_event) {
            _event = _event || window.event;
            var self = _event.target;
            var content = self.nextSibling.nextSibling;
            var selfWidth = self.clientWidth;
            var contentWidth = content.clientWidth;
            if (self.timer) {
                window.clearInterval(self.timer);
            }
            self.timer = window.setInterval(function () {
                var left = content.offsetLeft;
                left -= 2;
                if (left <= (contentWidth - selfWidth) * -1) {
                    window.clearInterval(self.timer);
                    left = (contentWidth - selfWidth) * -1;
                }
                content.style.left = left + 'px';
            })
        }
    }
}