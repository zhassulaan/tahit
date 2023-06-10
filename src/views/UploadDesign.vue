<template>
  <div class="upload-design">
    <div v-if="modal">
      <div
        @click="errorMessage === '' ? $router.push('/') : (modal = false)"
        class="edit-address"
      ></div>
      <div class="edit-address__content">
        <button
          @click="errorMessage === '' ? $router.push('/') : (modal = false)"
          class="edit-address__close"
        >
          <img src="@/assets/img/icons/close-modal.svg" alt="" />
        </button>
        <h3
          class="edit-address__title"
          style="text-align: center"
          v-if="errorMessage"
        >
          {{ errorMessage }}
        </h3>
        <h3 class="edit-address__title" style="text-align: center" v-else>
          {{
            $cookie.get("lang") === "Ru"
              ? "Ваша заявка принята. Мы с вами свяжемся"
              : "Your application is accepted. We will contact you"
          }}
        </h3>
      </div>
    </div>
    <div class="upload-design__container">
      <h3 class="upload-design__title">
        {{ lang === "Ru" ? "Загрузите свой дизайн" : "Upload your design" }}
      </h3>
      <div class="upload-design__inner">
        <div class="upload-design__create">
          <div class="upload-design__steps">
            <div class="upload-design__select upload-design__item">
              <h6 class="upload-design__select-title upload-design__item-title">
                1.
                {{ lang === "Ru" ? "Выберите Ваш файл" : "Choose your file" }}
              </h6>
              <div class="upload-design__select-text">
                <p>
                  {{
                    lang === "Ru" ? "Допустимые форматы" : "Accepted formats"
                  }}

                  : tif, jpg, png
                </p>
                <p>
                  {{
                    lang === "Ru"
                      ? "Файлы должны быть меньше 40МБ (рекомендуется 150 DPI)."
                      : "Files must be less than 40MB (150 DPI recommended)."
                  }}
                </p>
              </div>
              <div class="upload-design__select-file">
                <input
                  name="file"
                  type="file"
                  id="input__file"
                  @change="onFileChange"
                  class="input input__file"
                  multiple
                />
                <label for="input__file">
                  {{ lang === "Ru" ? "Выберите файл" : "Choose file" }}
                </label>
                <span>{{
                  image
                    ? image.name
                    : lang === "Ru"
                    ? "Файл не выбран"
                    : "File not selected"
                }}</span>
              </div>
            </div>
            <div class="upload-design__copyright upload-design__item">
              <h6
                class="upload-design__copyright-title upload-design__item-title"
              >
                2.
                {{
                  lang === "Ru"
                    ? "Подтвердите авторские права"
                    : "Confirm copyright"
                }}
              </h6>
              <div class="upload-design__copyright-text">
                <p>
                  {{
                    lang === "Ru"
                      ? "Помогите нам уважать права художников и других творческих людей:"
                      : "Help us respect the rights of artists and other creative                   of people:"
                  }}
                </p>
                <p>
                  {{
                    lang === "Ru"
                      ? `Воспроизведение материалов, защищенных авторскими правами,
                  товарными знаками или иным образом защищенных без права или
                  разрешения, является нарушением Условий обслуживания
                  Spoonflower и международного права.`
                      : `Playing copyrighted material
                   trademarked or otherwise protected without right or
                   permission is a violation of the Terms of Service
                   Spoonflower and international law.`
                  }}
                </p>
                <p>
                  {{
                    lang === "Ru"
                      ? `Загрузка контента, нарушающего эти принципы, может привести к
                  приостановке действия вашей учетной записи и удержанию любых
                  комиссий.`
                      : `Uploading content that violates these guidelines may result in
                   suspension of your account and hold any
                   commissions.`
                  }}
                </p>
                <p>
                  {{
                    lang === "Ru"
                      ? `Недопустимый контент может включать ссылки или изображения
                  знаменитостей, вымышленных персонажей, дизайнеров, компаний,
                  компаний, фильмов, телешоу, групп, спортивных команд, книг,
                  названий продуктов и т.д.`
                      : `Invalid content may include links or images
                   celebrities, fictional characters, designers, companies,
                   companies, movies, TV shows, bands, sports teams, books,
                   product names, etc.`
                  }}
                </p>
              </div>
              <div class="upload-design__copyright-checkbox">
                <input
                  class="input__checkbox"
                  id="checkbox"
                  type="checkbox"
                  v-model="isHaveRules"
                />
                <label
                  style="cursor: pointer"
                  for="checkbox"
                  class="input__check"
                  :class="{ active: isHaveRules }"
                >
                  <span></span>
                </label>
                <label class="input__checkbox-label" for="checkbox">
                  {{
                    lang === "Ru"
                      ? `У меня есть права или разрешение на использование этого
                  контента, и я согласен с вышеизложенными условиями и Условиями
                  обслуживания`
                      : `I have the rights or permission to use this
                   content, and I agree to the above terms and conditions
                   service`
                  }}
                </label>
              </div>
            </div>
            <div class="upload-design__additional upload-design__item">
              <h6
                class="upload-design__additional-title upload-design__item-title"
              >
                {{
                  lang === "Ru"
                    ? `Дополнительная информация`
                    : `Additional information`
                }}
              </h6>
              <textarea
                v-model="comment"
                class="upload-design__additional-textarea"
              ></textarea>
            </div>
            <div class="upload-design__file upload-design__item">
              <h6 class="upload-design__file-title upload-design__item-title">
                {{
                  lang === "Ru"
                    ? `3. Отправить Ваши файлы`
                    : `3. Upload your files`
                }}
              </h6>
              <label @click="handleUpload" class="upload-design__file-btn">
                {{ lang === "Ru" ? `Отправить файл` : `Upload file` }}
              </label>
            </div>
          </div>
        </div>
        <div class="upload-design__can">
          <h6 class="upload-design__can-title">
            {{ lang === "Ru" ? `На Tahit вы можете` : `In Tahit you can` }}
          </h6>
          <ul class="upload-design__can-list">
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Превратите произведение искусства в ткань, обои или предметы
              интерьера — минимальный заказ не требуется`
                  : `Turn a piece of art into fabric, wallpaper or objects
               interior - no minimum order required`
              }}
            </li>
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Создавайте уникальные сувениры на память: от кухонных полотенец,
              написанных от руки, до гирлянд из семейных фотографий.`
                  : `Create unique keepsakes: from kitchen towels,
               handwritten to garlands of family photos.`
              }}
            </li>
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Зарабатывайте деньги, создавая узоры, выставляя свои работы на
              продажу на торговой площадке.`
                  : `Earn money creating patterns by exhibiting your work on
               sale on the marketplace.`
              }}
            </li>
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Участвуйте в еженедельных конкурсах дизайнеров, чтобы
              продемонстрировать миру свои таланты и выиграть призы.`
                  : `Participate in weekly design competitions to
               show the world your talents and win prizes.`
              }}
            </li>
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Поддерживайте устойчивое производство и экологически чистые
              продукты`
                  : `Support sustainable production and environmentally friendly
               products`
              }}
            </li>
            <li class="upload-design__can-item">
              {{
                lang === "Ru"
                  ? `Займитесь дизайном или начните свой бизнес с нашей полезной
              библиотекой ресурсов — нет предела возможностям!`
                  : `Design or start your business with our useful
               resource library - the possibilities are endless!`
              }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "UploadDesign",
  data() {
    return {
      image: null,
      isHaveRules: false,
      lang: this.$cookie.get("lang"),
      comment: "",
      modal: false,
      errorMessage: "",
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
      console.log(files[0]);
    },
    handleUpload() {
      if (this.$cookie.get("token")) {
        var formData = new FormData();
        formData.append("image", this.image);
        formData.append("comment", this.comment);
        api.UploadDesign(formData).then((res) => {
          if (res.response) {
            if (res.response.status === 403) {
              this.errorMessage = res.response.data.detail;
            }
          }
          this.modal = true;
        });
      } else {
        alert(
          this.lang === "Ru"
            ? "Необходимо зарегистрироваться"
            : "Login required"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.input__checkbox {
  opacity: 0;
  visibility: hidden;
  height: 0;
  width: 0;
  &:checked > label {
    color: red;
  }

  &-label {
    &::after {
      content: "";
    }
  }
}
.input__check {
  border: rem(1) solid #dbe0e9;
  width: rem(25);
  height: rem(18);
  display: block;
  padding: rem(4);
  margin-right: rem(18);

  span {
    display: block;
    background-color: #f7bd7f;
    width: 100%;
    height: 100%;
    display: none;
  }

  &.active {
    span {
      display: block;
    }
  }
}

.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
}

.input__file-button {
  width: 100%;
  max-width: 290px;
  height: 60px;
  background: #1bbc9b;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
}
.upload-design {
  padding: rem(80) 0;
  text-align: left;
  &__container {
    max-width: rem(1420);
    padding: 0 rem(10);
    margin: 0 auto;
  }
  &__title {
    font-weight: 700;
    font-size: rem(22);
    line-height: 130%;
    color: #464c52;
    margin-bottom: rem(40);
    text-align: center;
  }
  &__inner {
    display: flex;
    align-items: flex-start;
  }

  &__item {
    & + & {
      margin-top: rem(55);
    }
    &-title {
      font-family: "Lato Medium";
      // font-weight: 600;
      font-size: rem(18);
      line-height: 130%;
      color: #464c52;
      margin-bottom: rem(14);
    }
  }
  &__create {
    width: rem(688);
    margin-right: rem(75);
  }

  &__select {
    &-text {
      font-weight: 400;
      font-size: rem(14);
      line-height: 130%;
      color: #656c72;
      p {
        margin: 0;
      }
      margin-bottom: rem(30);
    }

    &-file {
      label {
        font-weight: 400;
        font-size: rem(16);
        line-height: rem(19);
        color: #f7bd7f;
        padding: rem(15);
        width: rem(225);
        margin-right: rem(20);
        border: rem(2) solid #f7bd7f;
        display: inline-block;
        text-align: center;
        cursor: pointer;
      }
      span {
        font-weight: 400;
        font-size: rem(14);
        line-height: 130%;
        color: #656c72;
      }
    }
  }

  &__copyright {
    &-text {
      font-weight: 400;
      font-size: rem(16);
      line-height: 130%;
      color: #656c72;
      p {
        margin-bottom: rem(30);
      }
    }
    &-more {
      font-weight: 700;
      font-size: rem(16);
      line-height: 130%;
      text-decoration-line: underline;
      color: #f7bd7f;
      margin-bottom: rem(26);
      display: inline-block;
    }

    &-checkbox {
      display: flex;
      align-items: center;

      label {
        font-weight: 400;
        font-size: rem(16);
        line-height: 130%;
        color: #656c72;
        user-select: none;
      }
    }
  }

  &__file {
    label {
      display: inline-block;
      font-weight: 400;
      font-size: rem(16);
      line-height: rem(19);
      padding: rem(15);
      width: rem(225);
      color: #ffffff;
      background-color: #f7bd7f;
      text-align: center;
      cursor: pointer;
    }
  }

  &__additional {
    &-title {
      margin-bottom: rem(9);
    }
    &-textarea {
      width: rem(658);
      height: rem(135);
      border: rem(1) solid #dbe0e9;
      resize: none;
      padding: rem(15);
      font-size: rem(16);
      line-height: 130%;
    }
  }

  &__can {
    width: rem(660);
    background-color: #f0f2f5;
    padding: rem(70) rem(60);

    &-title {
      font-weight: 700;
      font-size: rem(22);
      line-height: 202%;
      color: #464c52;
      margin-bottom: rem(30);
    }

    &-list {
      padding-left: 0;
    }

    &-item {
      font-weight: 400;
      font-size: rem(16);
      line-height: 162.5%;
      color: #464c52;
      padding-left: rem(18);
      position: relative;

      & + & {
        margin-top: rem(30);
      }

      &::before {
        content: "";
        position: absolute;
        width: rem(7);
        height: rem(7);
        top: rem(8);
        left: 0;
        background-color: #f7bd7f;
        border-radius: 50%;
      }
    }
  }
}

@media (max-width: 767px) {
  .input__check {
    width: 25px;
    height: 15px;
    margin-right: 5px;
  }
  .upload-design__inner {
    flex-wrap: wrap;
  }
  .upload-design__create {
    width: 100%;
    margin-right: 0;
    margin-bottom: 32px;
  }
  .upload-design__can {
    width: 100%;
  }
  .upload-design__additional-textarea {
    width: 100%;
  }
}

.edit-address {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;

  &__content {
    position: fixed;
    background-color: #ffffff;
    padding: rem(39);
    width: rem(520);
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__close {
    position: absolute;
    top: rem(13);
    right: rem(13);
    width: rem(25);
    height: rem(25);
  }

  &__title {
    font-weight: 400;
    font-size: rem(22);
    line-height: 187.5%;
    color: #000000;
    margin-bottom: rem(25);
    font-family: "Playfair Display";
  }

  &__item {
    margin-bottom: rem(23);
  }

  &__inner {
    display: flex;
    .edit-address__select {
      width: rem(285);
      margin-right: rem(15);
    }
  }

  &__btn {
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(19);
    color: #f7bd7f;
    padding: rem(15);
    border: rem(2) solid #f7bd7f;
    width: 100%;
  }
}
</style>
