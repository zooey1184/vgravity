<template>
<div class="full">
  <div class="garden">
    <div class="cur_pane">
      <img class="cur_img" src="//r.51gjj.com/act/release/20180205/page8_contain.png" alt="">
      <div class="girl">
        <img ref="page8_girl" v-gravity="{x: 50, y: 50, d: 1}" class="girl_img" src="//r.51gjj.com/act/release/20180205/page8_girl.png" alt="">
      </div>
      <div class="page8_c1">
        <img v-gravity="{x: 30, y: 20, d: -1}" src="//r.51gjj.com/act/release/20180205/page8_c1.png" alt="">
      </div>
      <div class="page8_c2">
        <img v-gravity="{x: 20, y: 30, d: -1}" src="//r.51gjj.com/act/release/20180205/page8_c2.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
.full {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgb(241, 233, 213)
}

.ball {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 100%;
}
.cur_pane {
  position: absolute;
  width: 70%;
  left: 40px;
  top: 80px;
}
.cur_img {
  width: 100%
}
.girl {
  position: absolute;
  top: 60px;
  left: 120px;
  width: 50px;
}
.girl_img {
  position: absolute;
  width: 100%
}
.page8_c1 {
  position: absolute;
  top: 140px;
  left: 10px;
  width: 80px
}
.page8_c1 img {
  width: 100%;
  position: absolute;
}
.page8_c2 {
  position: absolute;
  top: 80px;
  right: 30px;
  width: 80px
}
.page8_c2 img {
  width: 100%;
  position: absolute;
}
</style>
