<template>
  <div class="news-wrapper">
      <div class="news-container">
        <div class="title">
            Недавние новости
        </div>
        <div class="news-block">
            <div class="imgblock">
                <img src="@/assets/images/news1.jpg">
            </div>
            <div class="titleblock">
                Новый сервер - OneBlock на версии 1.16.5!
            </div>
            <div class="textblock">
                OneBlock - новый сервер, на котором вам предстоит начать развитие на парящем скайблок-острове из земли. Вы начнете свое развитие с помощью одного блока, который вам предстоит разрушать для получения новых уровней и продвижения по сборке! Это новый вид скайблок-серверов!
            </div>
            <div class="infoblock">
                <div class="date"><i class="fi-rr-calendar"></i> 22.08.2021 11:00</div>
                <div class="more-button">Подробнее</div>
            </div>
        </div>
        <div class="news-block">
            <div class="imgblock">
                <img src="@/assets/images/news1.jpg">
            </div>
            <div class="titleblock">
                Новый сервер - OneBlock на версии 1.16.5!
            </div>
            <div class="textblock">
                OneBlock - новый сервер, на котором вам предстоит начать развитие на парящем скайблок-острове из земли. Вы начнете свое развитие с помощью одного блока, который вам предстоит разрушать для получения новых уровней и продвижения по сборке! Это новый вид скайблок-серверов!
            </div>
            <div class="infoblock">
                <div class="date"><i class="fi-rr-calendar"></i> 22.08.2021 11:00</div>
                <div class="more-button">Подробнее</div>
            </div>
        </div>
        <div class="news-block">
            <div class="imgblock">
                <img src="@/assets/images/news1.jpg">
            </div>
            <div class="titleblock">
                Новый сервер - OneBlock на версии 1.16.5!
            </div>
            <div class="textblock">
                OneBlock - новый сервер, на котором вам предстоит начать развитие на парящем скайблок-острове из земли. Вы начнете свое развитие с помощью одного блока, который вам предстоит разрушать для получения новых уровней и продвижения по сборке! Это новый вид скайблок-серверов!
            </div>
            <div class="infoblock">
                <div class="date"><i class="fi-rr-calendar"></i> 22.08.2021 11:00</div>
                <div class="more-button">Подробнее</div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

    .news-wrapper {
        .main-screen {
            height: 75vh;
            display: flex;
            align-items: center;
            width: 100%;
            z-index: 2;
            position: relative;

            .main-screen-text {
                font-size: calc(1rem + 2.4vw);
                font-weight: 800;
                color: #E3e3e3;
                line-height: 1.2;
                text-shadow: 0 0 2px darkgreen;
            }

            .main-screen-start {
                @include button();
                margin-top: 30px;
            }
        }

        .news-container {
            .title {
                font-size: 22px;
                font-weight: 700;
                margin: 30px 0;
                padding-left: 5px;
            }

            .news-block {
                border-radius: 15px;
                background: white;
                padding: 20px;
                margin-bottom: 30px;

                .imgblock {
                    img {
                        border-radius: 15px;
                        width: 100%;
                        height: 250px;
                    }
                }

                .titleblock {
                    font-weight: 700;
                    font-size: 22px;
                    padding: 10px 0;
                }

                .textblock {
                    font-size: 18px;
                    line-height: 1.3;
                }

                .infoblock {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 15px;

                    .more-button {
                        @include button();
                        width: auto;
                        padding: 7px 15px;
                        border-radius: 20px;
                        font-size: 16px;
                        font-weight: 500;
                    }

                    .date {
                        display: flex;
                        align-items: center;
                        font-weight: 500;

                        i {
                            display: flex;
                            align-items: center;
                            margin-bottom: 2px;
                            font-size: 20px;
                            margin-right: 10px;
                            color: darkgreen;
                        }
                    }
                }
            }
        }
    }
</style>