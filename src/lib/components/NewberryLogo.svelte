<svg
  class="logo-horiz"
  width="263"
  height="56"
  viewBox="0 0 263.54107 55.578121"
preserveAspectRatio="xMinYMin meet"
>
  <a href="https://www.newberry.org/" target="_blank">
    <path
      id="n-logo"
      style="fill-opacity:1;stroke-width:0.444444; background-color: rgba(0,0,0,0);"  y="0"
      d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z"
    />
  </a>
  <a href="https://collections.newberry.org/" target="_blank" id="dn-text">
    <text id="dn-svg-text">
      <tspan x="67" y="41" id="tspan2">
        Digital Newberry
      </tspan>
    </text>
  </a>
</svg>
<!-- TODO: switch logo to stacked on narrower screens -->
<!-- <svg -->
<!--   class="logo-vert" -->
<!--   width="200" -->
<!--   height="100" -->
<!--   viewBox="0 0 200 77" -->
<!-- preserveAspectRatio="xMinYMin meet" -->
<!-- > -->
<!--   <a href="https://www.newberry.org/" target="_blank"> -->
<!--     <path -->
<!--       id="n-logo" -->
<!--       style="fill-opacity:1;stroke-width:0.444444; background-color: rgba(0,0,0,0);" -->
<!--       d="M 34.415451,0.28531669 27.454514,4.5060197 20.495529,8.7267227 20.272873,5.6681287 20.050217,2.6095357 10.161545,8.1896137 0.27287252,13.771645 V 34.81852 55.863437 h 10.00000048 10 V 34.197426 12.531411 l 2.111328,-1.216797 c 1.16086,-0.669449 2.640347,-1.5542383 3.28711,-1.9648443 1.155696,-0.733711 1.233214,-0.710808 4.554687,1.3593753 l 3.380859,2.107422 v 21.523438 21.523432 l 8.111328,-0.0195 8.109376,-0.0215 4.445312,-4.19142 4.445312,-4.19336 -2.550781,-0.008 -2.550781,-0.01 L 53.499435,29.999731 53.384201,12.579809 43.899826,6.4313707 Z" -->
<!--     /> -->
<!--   </a> -->
<!--   <a href="https://collections.newberry.org/" target="_blank" id="dn-text"> -->
<!--     <text -->
<!--       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:21.3333px;font-family:'styrene-bold';white-space:pre;inline-size:208.543;display:inline;fill-opacity:1" -->
<!--       id="dn-svg-text" -->
<!--     > -->
<!--       <tspan x="0" y="50" id="tspan2"> -->
<!--         Digital Newberry -->
<!--       </tspan> -->
<!--     </text> -->
<!--   </a> -->
<!-- </svg> -->
<style lang="scss">
text {
  font-style:normal;
  font-variant:normal;
  font-weight:bold;
  font-stretch:normal;
  font-size:20px;
  font-family:'styrene-bold';
  white-space:pre;
  inline-size:208;
  display:inline;
  fill-opacity:1;
  // transform: translate(-17px, px); 
  position: relative;
  
}
svg {
  display: flex;
  justify-content: center;
  align-items: start;
}

path, text {
  transition: 150ms;
  fill: rgba(var(--splash-color), 1);
  &:hover {
    fill: rgba(var(--splash-color), 0.77);
  }
}

[class^="logo"] {
  position: absolute;
  top: 10px;
  lefT: 10px;
  padding: 0;
}

@media screen and (max-width: 300px) {
  #dn-text {
    display: none;
  }
}
/* @media screen and (min-width: 778px) { */
/*   .logo-horiz { */
/*     display: none; */
/*   } */
/* .logo-vert { */
/*   display: block; */
/* } */
/* } */
/* @media screen and (max-width: 777px) { */
/*   .logo-horiz { */
/*     display: none; */
/*   } */
/* .logo-vert { */
/*   display: block; */
/* } */
/* } */
</style>
