<template>
  <header class="header" :class="{ active: showMenu }">
    <div class="header__container">
      <NuxtLink :to="$localePath('/')" class="header__logo">
        <SvgLogo />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li v-for="item in navLinks" :key="item.path" class="header__nav-item">
            <NuxtLink
              :to="$localePath(item.path)"
              class="header__nav-link"
              active-class="header__nav-link--active"
              :class="{ 'header__nav-link--active': $route.name.includes(item.key) }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Language Dropdown -->
      <div class="header__lang">
        <button class="header__lang-btn" @click="toggleDropdown">
          <IconsGlobe class="header__lang-icon" />
          <span>{{ locale }}</span>
        </button>

        <Transition name="fade">
          <div v-if="dropdownOpen" class="header__lang-list">
            <button
              v-for="code in localeCodes"
              :key="code"
              class="header__lang-item"
              :class="{ active: code === locale }"
              @click="changeLang(code)"
            >
              {{ code }}
            </button>
          </div>
        </Transition>
      </div>

      <!-- Ham -->
      <button class="header__ham" :class="{ active: showMenu }" @click="showMenu = !showMenu">
        <IconsHam class="header__ham-icon" />
        <IconsX class="header__ham-icon" />
      </button>
    </div>
    <Transition name="menu">
      <nav v-if="showMenu" class="header__menu">
        <ul class="header__menu-list">
          <li v-for="item in navLinks" :key="item.path" class="header__menu-item">
            <NuxtLink
              :to="$localePath(item.path)"
              class="header__menu-link"
              active-class="active"
              :class="{ active: $route.name.includes(item.key) }"
              @click="showMenu = !showMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
const { localeCodes, locale, setLocale } = useI18n();
const { navLinks } = useNavLinks();
const { $lenis } = useNuxtApp();

const dropdownOpen = ref(false);
const showMenu = useState('showMenu', () => false);

const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value);
const changeLang = code => {
  setLocale(code);
  dropdownOpen.value = false;
};

watchEffect(() => {
  if (!import.meta.client) return;
  document.body.classList.toggle('overflow-hidden', showMenu.value);
  if (showMenu.value) $lenis.stop();
  else $lenis.start();
});

onMounted(() => {
  document.addEventListener('assignData', e => {
    if (e.target.closest('.header__lang')) return;
    dropdownOpen.value = false;
  });
});
</script>

<style lang="scss" scoped>
.header {
  padding-inline: var(--spacing-inline);
  color: #fff;
  font-size: max(1.2rem, 10px);
  margin-bottom: max(2rem, 20px);
  padding-top: 12px;
  position: relative;
  z-index: 5;

  @media screen and (max-width: vars.$bp-md) {
    transition: all 1s;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    padding-bottom: 16px;
    & > * {
      z-index: 5;
      position: relative;
    }
  }

  &::before {
    content: '';
    opacity: 0;
    pointer-events: none;
    position: fixed;
    inset: 0;
    background-color: #00000080;
    z-index: 3;
    transition: all 1s;
  }

  &.active {
    background: #031526;
    padding-bottom: 310px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &::before {
      opacity: 1;
      pointer-events: all;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    @media screen and (max-width: vars.$bp-md) {
      grid-template-columns: 1fr repeat(2, auto);
      gap: 12px;
    }
  }
  &__ham {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 10px;
    display: grid;
    place-items: center;
    @media screen and (min-width: vars.$bp-md) {
      display: none;
    }
    &.active .header__ham-icon {
      &:first-child {
        scale: 0;
      }
      &:last-child {
        scale: 1;
      }
    }
    &-icon {
      grid-area: 1/1/2/2;
      width: 50%;
      transition: all 0.4s;
      &:last-child {
        stroke: #1e1e1e;
        scale: 0;
      }
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    width: max(16.1rem, 162px);
  }
  &__menu {
    position: absolute;
    width: calc(100% - 16px * 2);
    left: 16px;
    top: 64px;
    @media screen and (min-width: vars.$bp-md) {
      display: none;
    }
    &-list {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    &-item {
      display: flex;
      &:first-child > * {
        padding-top: 0;
      }
      &:last-child > * {
        border-bottom: none;
        padding-bottom: 0;
      }
      @for $i from 1 through 10 {
        &:nth-child(#{$i}) > * {
          transition-delay: 0.08s * $i;
        }
      }
    }
    &-link {
      flex: 1;
      padding-block: 12px;
      font-size: 16px;
      font-weight: 600;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 1s;
    }
  }
  &__nav {
    justify-self: center;
    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
    &-list {
      padding-block: max(1.3rem, 10px);
      padding-inline: max(2rem, 14px);
      display: flex;
      align-items: center;
      gap: max(2.5rem, 14px);
      background: #034c8c8c;
      border-radius: 10px;
    }

    &-item {
      $position: -5px;
      display: flex;
      align-items: center;
      position: relative;
      &:not(:last-child) > *::before {
        content: '';
        background-color: rgba(#ffffff, 0.1);
        height: 100%;
        width: 1px;
        position: absolute;
        right: calc(max(2.5rem, 14px) / -2);
        top: 0;
      }
      &:hover {
        &::before,
        &::after {
          scale: 1;
        }
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 120%;
        left: 50%;
        background-color: vars.$clr-bg-light;
        translate: -50%;
        scale: 0 1;
        transition: all 0.4s;
      }
      &::before {
        top: $position;
        transform-origin: left;
      }
      &::after {
        bottom: $position;
        transform-origin: right;
      }
    }

    &-link {
      position: relative;
      color: rgba(255, 255, 255, 0.85);
      transition: color 0.4s;

      &:hover {
        color: #fff;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: calc(max(1.3rem, 10px) * -1);
        left: 50%;
        translate: -50%;
        background-color: #fff;
        width: 123%;
        height: 3px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        scale: 0 1;
        transition: all 0.4s;
      }

      &--active {
        color: #fff;

        &::after {
          scale: 1 1;
        }
      }
    }
  }

  &__lang {
    justify-self: flex-end;
    position: relative;

    &-btn {
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
      border: 1px solid #ffffff1f;
      background: #ffffff0a;
      padding-block: 10px;
      padding-inline: 12px;
      border-radius: 10px;
      text-transform: uppercase;
      font-size: 12px;
      fill: #fff;
      transition: all 0.3s;
      &:hover {
        border-color: vars.$clr-accent;
        color: vars.$clr-accent;
        fill: vars.$clr-accent;
      }
    }

    &-icon {
      width: 20px;
      transition: transform 0.4s;
    }

    &-list {
      position: absolute;
      width: 100%;
      right: 0;
      top: calc(100% + 8px);
      color: #fff;
      background: rgba(#555f70, 0.5);

      backdrop-filter: blur(3px);
      border-radius: 6px;
      box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
      padding: 4px;
      z-index: 10;
      display: flex;
      flex-direction: column;
    }

    &-item {
      font-size: 12px;
      font-weight: 500;
      padding-block: 9px;
      text-transform: uppercase;
      line-height: 1.25;
      border-radius: 4px;
      transition: all 0.3s;
      @include mix.flex-center;
      &:hover {
        translate: 0 -3px;
      }
      &.active {
        background-color: #fff;
        color: #1f2937;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.menu-enter-active,
.menu-leave-active {
  transition: all 1s;
}
.menu-leave-active {
  a {
    transition: all 0.4s !important;
  }
}
.menu-enter-from {
  a {
    opacity: 0;
    translate: -40px;
  }
}
.menu-leave-to {
  a {
    opacity: 0;
    translate: 0 -20px;
  }
}
</style>
