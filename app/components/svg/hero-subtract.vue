<template>
  <svg
    v-if="$route.name.includes('index')"
    class="subtract subtract--desktop"
    viewBox="0 0 1440 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="-32" y="-32" width="1504" height="864"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(16px);
          clip-path: url(#bgblur_0_114_812_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <path
      data-figma-bg-blur-radius="32"
      d="M1440 788C1440 794.627 1434.63 800 1428 800H12C5.37257 800 0 794.627 0 788V12C0 5.37257 5.37258 0 12 0H426C432.627 0 438 5.37258 438 12V52C438 58.6274 443.373 64 450 64H991C997.627 64 1003 58.6274 1003 52V12C1003 5.37258 1008.37 0 1015 0H1428C1434.63 0 1440 5.37258 1440 12V788Z"
      fill="url(#paint0_linear_114_812)"
      fill-opacity="0.55"
    />
    <defs>
      <clipPath id="bgblur_0_114_812_clip_path" transform="translate(32 32)">
        <path
          d="M1440 788C1440 794.627 1434.63 800 1428 800H12C5.37257 800 0 794.627 0 788V12C0 5.37257 5.37258 0 12 0H426C432.627 0 438 5.37258 438 12V52C438 58.6274 443.373 64 450 64H991C997.627 64 1003 58.6274 1003 52V12C1003 5.37258 1008.37 0 1015 0H1428C1434.63 0 1440 5.37258 1440 12V788Z"
        />
      </clipPath>
      <linearGradient
        id="paint0_linear_114_812"
        x1="74"
        y1="429.5"
        x2="1431"
        y2="429.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#034C8C" />
        <stop offset="0.436755" stop-color="#1275CC" />
        <stop offset="1" stop-color="#034C8C" />
      </linearGradient>
    </defs>
  </svg>
  <svg
    v-if="$route.name.includes('index')"
    class="subtract subtract--mobile"
    viewBox="0 0 375 780"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="-33" y="-32" width="439.5" height="844"
      ><div
        xmlns="http://www.w3.org/1999/xhtml"
        style="
          backdrop-filter: blur(16px);
          clip-path: url(#bgblur_0_221_14970_clip_path);
          height: 100%;
          width: 100%;
        "
      ></div
    ></foreignObject>
    <path
      data-figma-bg-blur-radius="32"
      d="M213.905 0C220.533 0 225.905 5.37258 225.905 12V52C225.905 58.6274 231.278 64 237.905 64H362.5C369.127 64 374.5 69.3726 374.5 76V768C374.5 774.627 369.127 780 362.5 780H11C4.37258 780 -1 774.627 -1 768V12C-1 5.37258 4.37258 0 11 0H213.905Z"
      fill="url(#paint0_linear_221_14970)"
      fill-opacity="0.55"
    />
    <defs>
      <clipPath id="bgblur_0_221_14970_clip_path" transform="translate(33 32)">
        <path
          d="M213.905 0C220.533 0 225.905 5.37258 225.905 12V52C225.905 58.6274 231.278 64 237.905 64H362.5C369.127 64 374.5 69.3726 374.5 76V768C374.5 774.627 369.127 780 362.5 780H11C4.37258 780 -1 774.627 -1 768V12C-1 5.37258 4.37258 0 11 0H213.905Z"
        />
      </clipPath>
      <linearGradient
        id="paint0_linear_221_14970"
        x1="-146.347"
        y1="429.5"
        x2="1563.56"
        y2="429.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#034C8C" />
        <stop offset="0.436755" stop-color="#1275CC" />
        <stop offset="1" stop-color="#034C8C" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup></script>

<style scoped lang="scss">
.subtract {
  position: absolute;
  inset: 0;
  &--desktop {
    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
  }
  &--mobile {
    @media screen and (min-width: vars.$bp-md) {
      display: none;
    }
  }
}
</style>
