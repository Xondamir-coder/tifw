<template>
  <header class="header">
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
        <ul v-if="dropdownOpen" class="header__lang-list">
          <li
            v-for="lang in locales"
            :key="lang.code"
            class="header__lang-item"
            @click="changeLang(lang.code)"
          >
            {{ lang.name }}
          </li>
        </ul>
      </Transition>
    </div>
  </header>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const { navLinks } = useNavLinks();

const dropdownOpen = ref(false);
const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value);
const changeLang = code => {
  setLocale(code);
  dropdownOpen.value = false;
};

onMounted(() => {
  document.addEventListener('click', e => {
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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin-bottom: max(2rem, 20px);
  &__logo {
    display: flex;
    align-items: center;
    width: max(16.1rem, 100px);
  }
  &__nav {
    justify-self: center;
    &-list {
      padding-block: max(1.3rem, 10px);
      padding-inline: max(2rem, 14px);
      display: flex;
      align-items: center;
      gap: max(2.5rem, 14px);
      background: #034c8c8c;
      border-radius: 10px;
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
    }

    &-item {
      display: flex;
      align-items: center;
      position: relative;
      &:not(:last-child)::after {
        content: '';
        background-color: rgba(#ffffff, 0.1);
        height: 100%;
        width: 1px;
        position: absolute;
        right: calc(max(2.5rem, 14px) / -2);
        top: 0;
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
      padding-block: max(1rem, 10px);
      padding-inline: max(1.2rem, 12px);
      border-radius: max(1rem, 10px);
      text-transform: uppercase;
    }

    &-icon {
      width: 20px;
      transition: transform 0.4s;
      fill: #fff;
    }

    &-list {
      position: absolute;
      right: 0;
      top: 120%;
      background: #fff;
      color: #333;
      border-radius: max(0.4rem, 4px);
      box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
      padding: max(0.4rem, 4px) 0;
      z-index: 10;
    }

    &-item {
      padding: max(0.5rem, 8px) max(1rem, 12px);
      cursor: pointer;
      transition: background 0.4s;

      &:hover {
        background: #f2f2f2;
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
</style>
