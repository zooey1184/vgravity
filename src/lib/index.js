/**
  design by zhangyingying at 2018-02-28
  重力感应 el元素需要定位 消耗性能，建议页面使用效果不超过5个
  参数 x, y => x, y轴的相对位移 d=> 位移方向
  使用 v-gravity="{x: 20, y: 20, d: 1}"
**/
export default (Vue) => {
  Vue.directive('gravity', {
    bind: function(el, binding, vNode) {
      let objM = binding.modifiers
      let objV = binding.value
      let objA = binding.arg
      let conf = {
        gx: 0,
        gy: 0
      }
      let direction = 1
      if(!!objV.x) {
        conf.gx = objV.x
      }
      if(!!objV.y) {
        conf.gy = objV.y
      }
      if(!!objV.d) {
        direction = objV.d
      }
      let target = el
      function handleOrientation(event) {
        var x = event.beta;  //  [-180, 180]
        var y = event.gamma; //  [-90, 90]
        if (x > 90) {
          x = 90
        };
        if (x < -90) {
          x = -90
        };
        if(x>80 && x<150) {
          // 粘度系数0.2
          // 当beta>80时，gamma转动速度变大，并且当gamma大于80时容易正负突变
          y = Math.abs(y)*0.2
        }
        x += 90;
        y += 90;
        if(!!objM.rotateX) {
          target.style['-webkit-transform-style'] = `preserve-3d`
          target.style['transform-style'] = `preserve-3d`
          target.style['-webkit-transform'] = `rotateX(${x*conf.gx}deg)`
          target.style['transform'] = `rotateX(${x*conf.gx}deg)`
        }else if(!!objM.rotateY){
          target.style['-webkit-transform-style'] = `preserve-3d`
          target.style['transform-style'] = `preserve-3d`
          target.style['-webkit-transform'] = `rotateY(${y*conf.gy}deg)`
          target.style['transform'] = `rotateY(${y*conf.gy}deg)`
        }else if(!!objM.rotate){
          target.style['-webkit-transform-style'] = `preserve-3d`
          target.style['transform-style'] = `preserve-3d`
          target.style['-webkit-transform'] = `rotateX(${x*conf.gy}deg rotateY(${y*conf.gy}deg)`
          target.style['transform'] = `rotateX(${x*conf.gy}deg) rotateY(${y*conf.gy}deg)`
        }else {
          target.style.top = direction*(conf.gy * x / 180 - conf.gy/2) + "px";
          target.style.left = direction*(conf.gx * y / 180 - conf.gx/2) + "px";
        }
      }
      window.addEventListener('deviceorientation', handleOrientation);
    },
  })
}
