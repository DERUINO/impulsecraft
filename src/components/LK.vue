<template>
  <div class="lk-wrapper">
      <div class="title">
          <i class="fi-rr-headset"></i>
          Личный кабинет
      </div>
      <div class="auth">
          <div class="input">
              <input type="text" v-model="login" placeholder="Логин">
          </div>
          <div class="input">
              <input type="text" v-model="password" placeholder="Пароль">
          </div>
          <div class="input">
              <button type="button">Войти</button>
          </div>
          <div class="misc-buttons">
            <div class="register">Регистрация</div>
            <div class="lostpass">Забыли пароль?</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: "LK",
    data() {
        return {
            login: '',
            password: '',
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

    .lk-wrapper {
        text-align: center;
        padding: 20px;
        border-radius: 15px;
        background: white;
        .title {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                display: flex;
                font-size: 22px;
                margin-right: 10px;
                align-items: center;
                margin-bottom: 2px;
                color: darkgreen;
            }
        }

        .auth {
            .input {
                margin-bottom: 15px;
                input {
                    @include input();
                }

                button {
                    @include button();
                    padding: 5px 15px;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    margin-top: 10px;
                }
            }

            .misc-buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;

                .register,.lostpass {
                    margin: 0 10px;
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }
    }
</style>