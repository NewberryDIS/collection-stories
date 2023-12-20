
<div>
  <a href="#card-0">
    <svg fill="rgba(var(--splash-color))" viewBox="0 0 24 24">
      <g>
        <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
        <path d="M11 6h2v11h-2z" />
      </g>
    </svg>
  </a>
</div>
<style lang="scss">
div {
  padding-block: 0 16px;
  display: flex;
  justify-content: center;
  position: relative;
}
a {
  pointer-events: auto;
  width: 100px;
  animation: bounce 1s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  border: 0px solid rgb(var(--splash-color));
}
a:hover {
  border: 10px solid rgb(var(--splash-color));
}

@media screen and (max-width: 1023px){
  div {
    margin-block: 7vh 0;
  }
}

/* lg */
@media screen and (min-width: 1024px) and (min-height: 1000px) {
  div {
    margin-block: 57vh 0;
  }
}
@media screen and (min-width: 1024px) and (min-height: 778px) and (max-height: 999px) {
  div {
    margin-block: 50vh 0;
  }
}
@media screen and (min-width: 1024px) and (max-height: 777px) {
  div {
    margin-block: 33vh 0;
  }
}
</style>
