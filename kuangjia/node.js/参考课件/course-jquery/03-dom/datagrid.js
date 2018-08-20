    //用面向对象和 jQuery 实现一个可编辑和可克隆的 datagrid
    //面向对象 => 利用对象设计模式去实现想要的功能
    //对象的设计模式 => 工厂模式，构造函数模式，原型模式
    var DataGrid = function () {
        var $this = this;
        //如果 readonly = true 则表示 datagrid 不能编辑，反之则可以编辑
        this.readonly = true;
        this.container = 'body';
        this.mutiple = false;
        this.id = parseInt(Math.random() * 10000);
        this.url = null;

        this.init = function () {
            if (!$this.url) {
                return;
            }
            $.ajax({
                url: $this.url,
                success: function (_response) {
                    var _data = typeof _response == 'string' ? JSON.parse(_response) : _response;
                    $(generateHtml(_data)).appendTo($this.container);
                    if (!$this.readonly) {
                        //dkClick();
                    }
                    datagridClick();
                }
            })
        }

        var datagridClick = function () {
            $('table', $this.container).on('click.select', 'td', function () {
                //if ($(this).closest('tr').is('tr.selected')) {
                //    $(this).closest('tr').removeClass('selected');
                //} else {
                //    $(this).closest('tr').addClass('selected');
                //}

                $('tr', $this.container).removeClass('selected');
                $(':radio:checked', $this.container).prop('checked', false);
                $(this).closest('tr').toggleClass('selected').find(':radio').prop('checked', true);
                //prop
            })
            return;
            //命名空间 => 标志
            //行为操作
            $('table', $this.container).on('click.dkClick', function () {
                console.log(1);
                //此处省略 1000 行
            }).on('click.akClick', function () {
                console.log(2);
                //此处省略 1000 行
            }).on('click.ckClick', function () {
                console.log(3);
                //此处省略 1000 行
            }).on('abc', function () {//自定义事件不能通过行为操作触发
                console.log('dk click');
            }).bind('cba', function () {
                console.log('cba click')
            })

            $('table', $this.container).trigger('cba');

        }

        var dkClick = function () {
            $('table').on('click', 'td', function (evt) {
                $('<input type="text">').val($(evt.target).text()).appendTo($(evt.target).text('')).focus().blur(function () {
                    $(evt.target).text($(this).val());
                })
            }).on('click', 'div', function () {

            }).on('click', 'span', function () {

            })
        }

        var generateHtml = function (_data) {
            var _html = '<table class="table" id="' + $this.id + '">';
            _html += "<thead>";
            _html += '<tr>';
            _html += '<th>行号</th>';
            if (_data && _data.data && _data.data.length > 0) {
                if ($this.mutiple) {
                    _html += "<th><input type='checkbox' /></th>"
                } else {
                    _html += "<th><input type='radio' name='radio" + $this.id + "' /></th>"
                }
                for (var key in _data.data[0]) {
                    _html += '<th>' + key + '</th>';
                }
                _html += '</tr></thead>';
                _html += '<tbody>';
                for (var i = 0; i < _data.data.length; i++) {
                    _html += '<tr>';
                    _html += '<td></td>';
                    if ($this.mutiple) {
                        _html += "<td><input type='checkbox' /></td>"
                    } else {
                        _html += "<td><input type='radio' name='radio" + $this.id + "' /></td>"
                    }
                    for (var key in _data.data[0]) {
                        _html += '<td>' + _data.data[i][key] + '</td>';
                    }
                    _html += '</tr>';
                }
                _html += '</tbody></table>';
            }
            return _html;
        }
    }
    //旧版本-暂时不用
    DataGrid.prototype.editOldVersion = function () {
        $('table').click(function (evt) {
            if ($(evt.target).is('td')) {
                $('<input type="text">').val($(evt.target).text()).appendTo($(evt.target).text('')).focus().blur(function () {
                    $(evt.target).text($(this).val());
                })

                //$('<input type="text">').blur(function () {
                //    $(evt.target).text($(this).val());
                //}).val($(evt.target).text()).appendTo($(evt.target).text('')).focus();


                //var input = $('<input type="text">');
                //input.blur(function () {
                //    $(evt.target).text($(this).val());
                //})
                //input.val($(evt.target).text());
                //input.appendTo($(evt.target));
                //$(evt.target).text('');
                //input.focus();
            }
        })
    }