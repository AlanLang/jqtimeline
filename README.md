## 时间线柱状图生成器
### 效果
![](http://oqdzx28cd.bkt.clouddn.com/18-6-6/22795243.jpg)
### 使用
#### 引用样式
```
<link href="timeline.css" rel="stylesheet" />
```
#### 引用js
```
<script type="text/javascript" src="jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="timeline.js"></script>
```
#### 使用 `test为一个div的id`
```
let opt = {
    'start': 8,
    'end':20,
    'color':[{'title':'停台','value':'gray','name':'1'},{'title':'运行','value':'green','name':'5'},{'title':'缺料','value':'yellow','name':'3'},{'title':'换模','value':'LightBlue','name':'2'},{'title':'故障','value':'red','name':'2'}],
    'data':[
    	{'equ':'设备1','data':[{'name':'1','value':'3600'},{'name':'3','value':'3600'},{'name':'5','value':'3600'}]},
    	{'equ':'设备2','data':[{'name':'1','value':'3600'},{'name':'5','value':'6000'},{'name':'2','value':'3000'},{'name':'2','value':'1000'}]}
    ]
}
$("#test").timeLine(opt);
```