<template>
  <div class="navigation-wrapper">
      <div class="links">
        <router-link to="/" class="link-a">
            <div class="link">
                <div class="ico">
                    <i class="fi-rr-home"></i>
                </div>
                <div class="title">
                    Главная
                </div>
            </div>
        </router-link>
        <router-link to="/servers" class="link-a">
            <div class="link">
                <div class="ico">
                    <i class="fi-rr-database"></i>
                </div>
                <div class="title">
                    Серверы
                </div>
            </div>
        </router-link>
        <router-link to="/" class="link-a">
            <div class="link">
                <div class="ico">
                    <i class="fi-rr-comment"></i>
                </div>
                <div class="title">
                    Форум
                </div>
            </div>
        </router-link>
        <router-link to="/" class="link-a">
            <div class="link">
                <div class="ico">
                    <i class="fi-rr-shopping-bag"></i>
                </div>
                <div class="title">
                    Донат
                </div>
            </div>
        </router-link>
        <router-link to="/" class="link-a">
            <div class="link">
                <div class="ico">
                    <i class="fi-rr-layers"></i>
                </div>
                <div class="title">
                    Разное
                </div>
            </div>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navigation",
    methods: {
    }
}
</script>

<style lang="scss" scoped>

    .navigation-wrapper {
        .links {
            display: flex;
            align-items: center;
            padding: 10px 0;

            .link-a {
                font-weight: bolder;
                flex-grow: 1;
                display: flex;
                justify-content: center;

                .link {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    line-height: 1.2;

                    .ico {
                        i {
                            font-size: 24px;
                            color: darkgreen;
                        }
                    }
                }
            }
        }
    }
</style>