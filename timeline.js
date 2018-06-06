; (function ($) {
    /**时间线柱状图生成器
 * Author: alan:http://langwenda.cn
 **/
    $.fn.timeLine = function (options) {
        let line = new  TiemLine(this,options);
        line.initBottom();
        line.bindLine();
        line.bindRemark();
    }
    const TiemLine = function (ele, opt) {
        this.element = ele,
        this.defaults = {
            'start': 8,
            'end':20,
            'color':[{'name':'停台','value':'#00000'}],
            'data':[]
        },
        this.options = $.extend({}, this.defaults, opt)
    }
    TiemLine.prototype = {
        initBottom: function () {
            const timeNum = this.options.end
            let htmlBottomLine = "<div class='bottom-group' >";
            let htmlBottomTime = "<div class='bottom-times' >"
            for (i = this.options.start; i < timeNum; i++) {
                const time = i+1+':00'
                htmlBottomLine += i == timeNum - 1 ? "<div class='bottom-line bottom-line-end'></div>": "<div class='bottom-line' ></div>"
                htmlBottomTime += "<div class='bottom-time'>"+time+"</div>"
            }  
            htmlBottomTime+="</div>"
            htmlBottomLine+=htmlBottomTime
            htmlBottomLine+="</div>"
            this.element.append(htmlBottomLine)
            logMsg('加载横坐标轴')
            return this;
        },
        bindLine:function(){
            let data = this.options.data
            if(data.length == 0){
                console.log("数据数组为空！无法生成！");
                return;
            }
            const timeWidth = $(".bottom-time").width()
            const lineWidth = timeWidth * (this.options.end - this.options.start)
            this.element.width(lineWidth+60)
            this.element.css("overflow","auto")
            const time1 = new Date('2012-12-23 '+this.options.start+':00:00');
            const time2 = new Date('2012-12-23 '+this.options.end+':00:00');
            const mints=Math.floor((time2-time1)/(1000)) 
            console.log(mints)
            console.log(data)
            for(j = 0;j < data.length; j++) {
                let htmlLine = "<div class='tiem-line'>"
                    htmlLine+="<div class='equ-name'>"+data[j].equ+"</div>"
                    for (let a = 0;a < data[j].data.length; a++) {
                        const typeName = data[j].data[a].name
                        const typeVal = data[j].data[a].value
                        const typeColor = this.getColor(typeName)
                        const typeWidth = lineWidth/mints*typeVal
                        htmlLine+="<div class='equ-line' style='width:"+typeWidth+"px;background-color: "+typeColor+";'> </div>"
                    }
                htmlLine += "</div>"
                this.element.prepend(htmlLine)
            }
        },
        bindRemark:function(){
            const color = this.options.color
            let htmlMark = "<div class='remark-div'>"
                for( i = 0;i < color.length;i++){
                    htmlMark +="<div class='remark-group'><div class='remark-color' style='background-color: "+color[i].value+"'></div>"
                    htmlMark +="<div class='remark-name'>"+color[i].title+"</div></div>"
                }
            htmlMark += "</div>"
            this.element.prepend(htmlMark)
        },
        getColor:function(name){
            const color = this.options.color
            for( i = 0;i < color.length;i++){
                if (color[i].name == name) {
                    return color[i].value
                }
            }
        }
    }
    const logMsg = function (msg){
        console.log(msg)
    }
})(jQuery);