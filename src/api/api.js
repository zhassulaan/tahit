import Vue from "vue";
import { instance } from "@/plugins/axios";

const endpoints = {
  // REGISTRATION
  register: "api/users/register/",
  auth: "api/users/token/",
  refresh: "api/users/token/refresh/",
  sendSms: "api/users/sms/",
  verifySms: "api/users/sms/verify/",
  resetPass: "api/users/reset_password/",

  // USER
  changePassword: "api/users/change_password/",
  getAddresses: "/api/users/user_addresses/",
  getAddressById: "/api/users/user_addresses_by_id/",
  addAddress: "api/users/user_addresses/",
  editAddress: "api/users/change_user_address/",
  deleteAddress: "api/users/delete_user_address/",
  getUserData: "api/users/user_information/",
  addPhone: "users/add_phone_number/",
  changeUserData: "api/users/user_information/",
  getCountries: "api/countries/countries/",
  getFavorites: "api/users/favorite",
  addFavorite: "api/users/favorite/",
  deleteFavorite: "api/users/favorite_by_id/",

  // MAIN
  mainBaner: "api/main/banner/",
  mainAbout: "api/main/get_about_us/",
  mainOffer: "api/main/get_best_offer/",
  mainDesignerAbout: "api/main/designer_about_us/",
  mainBlog: "api/main/blog/",
  mainNews: "api/main/news/",
  getContacts: "api/main/get_contact/",
  getNewsById: "api/main/get_news_by_id/",
  getBlogById: "api/main/get_blog_by_id/",

  // BASISES
  basisesCost: "api/basises/basis_cost/",
  basises: "api/basises/get_basis/",
  basisesId: "api/basises/get_basis_by_id/",

  //PRINT
  prints: "api/prints/prints/",
  printById: "api/prints/get_prints_by_id/",
  getStyles: "api/prints/get_styles/",
  getColors: "api/prints/get_colors/",
  getThemes: "api/prints/get_themes/",
  UploadDesign: "api/prints/upload_design/",

  //order
  createCart: "api/orders/create_cart/",
  currentCart: "api/orders/get_current_user_cart/",
  deleteCart: "api/orders/update_cart_item/",
  changeCart: "api/orders/update_cart_item/",
  currentOrder: "api/orders/get_current_user_order/",

  //search
  getSearch: "/api/main/filter/",
};

const api = {
  // MAIN
  async getMainBaner() {
    const response = await instance
      .get(endpoints.mainBaner + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getMainAbout() {
    const response = await instance
      .get(endpoints.mainAbout + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getMainOffer() {
    const response = await instance
      .get(endpoints.mainOffer + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getMainDesignerAbout() {
    const response = await instance
      .get(endpoints.mainDesignerAbout + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getMainBlog() {
    const response = await instance
      .get(endpoints.mainBlog + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getMainNews() {
    const response = await instance
      .get(endpoints.mainNews + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getContacts() {
    const response = await instance
      .get(endpoints.getContacts + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  // BASISES

  async getBasisesCost(id) {
    const response = await instance
      .get(endpoints.basisesCost + id + "/")
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getBasises() {
    const response = await instance
      .get(endpoints.basises + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getBasisesId() {
    const response = await instance
      .get(endpoints.basisesId + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  // REGISTRATION

  async register(data) {
    const response = await instance
      .post(endpoints.register, data)
      .then((res) => {
        Vue.cookie.set("token", res.data.access);
        Vue.cookie.set("refresh", res.data.refresh);
        location.replace("/office");
      });
    return response.data;
  },
  async auth(data) {
    const response = await instance.post(endpoints.auth, data);
    return response.data;
  },

  async refresh() {
    const response = await instance
      .post(endpoints.refresh, { refresh: Vue.cookie.get("refresh") })
      .then((res) => {
        Vue.cookie.set("token", res.data.access);
        Vue.cookie.set("refresh", res.data.refresh);
        location.reload();
      })
      .catch(Vue.cookie.remove("token"), Vue.cookie.remove("refresh"));

    return response.data;
  },

  // DATA

  async getCountries() {
    const response = await instance
      .get(endpoints.getCountries + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  //PRINTS
  async getPrints(e) {
    const response = await instance
      .get(endpoints.prints + Vue.cookie.get("lang").toLowerCase(), {
        params: {
          style: e.styles,
          theme: e.themes,
          color: e.colors,
          order_by: e.order_by,
        },
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getPrintsById(id) {
    const response = await instance
      .get(
        endpoints.printById + Vue.cookie.get("lang").toLowerCase() + "/" + id
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getStyles() {
    const response = await instance
      .get(endpoints.getStyles + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getColors() {
    const response = await instance
      .get(endpoints.getColors + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getThemes() {
    const response = await instance
      .get(endpoints.getThemes + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async UploadDesign(data) {
    const response = await instance
      .post(endpoints.UploadDesign, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => {
        console.log(err, "oianfbafbas");
        if (err.response.status === 401) {
          this.refresh();
        } else {
          if (err.response.data.image) {
            alert(err.response.data.image[0]);
          }
        }
        return err;
      });
    return response;
  },

  //order
  async getCurrentCart() {
    const response = await instance
      .get(endpoints.currentCart + Vue.cookie.get("lang").toLowerCase())
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async createCart(data) {
    const response = await instance
      .post(
        endpoints.createCart + Vue.cookie.get("lang").toLowerCase() + "/",
        data
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    if (response.status === 200 || response.status === 201) {
      this.getCurrentCart();
    }
    return response.data;
  },

  async deleteCart(id) {
    const response = await instance
      .post(
        endpoints.deleteCart +
          Vue.cookie.get("lang").toLowerCase() +
          "/" +
          id +
          "/",
        {
          length: 0,
          quantity: 0,
        }
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    if (response.status === 200 || response.status === 201) {
      location.reload();
    }
    return response.data;
  },
  async changeCart(id, data) {
    const response = await instance
      .post(
        endpoints.changeCart +
          Vue.cookie.get("lang").toLowerCase() +
          "/" +
          id +
          "/",
        data
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    if (response.status === 200 || response.status === 201) {
      Vue.route.push("/basket");
    }
    return response.data;
  },

  // USER
  async getAddresses() {
    const response = await instance.get(endpoints.getAddresses).catch((err) => {
      if (err.response.status === 401) {
        this.refresh();
      }
    });
    return response.data;
  },

  async getAddressById(id) {
    const response = await instance
      .get(endpoints.getAddressById + id + "/")
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async changePassword(data) {
    const response = await instance
      .post(endpoints.changePassword, data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async addAddress(data) {
    const response = await instance
      .post(endpoints.addAddress, data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async editAddress(id, data) {
    const response = await instance
      .post(endpoints.editAddress + id + "/", data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async deleteAddress(data) {
    const response = await instance
      .delete(endpoints.deleteAddress + data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async getUserData() {
    const response = await instance.get(endpoints.getUserData).catch((err) => {
      if (err.response.status === 401) {
        this.refresh();
      }
    });
    return response.data;
  },
  async changeUserData(data) {
    const response = await instance
      .post(endpoints.changeUserData, data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },
  async addPhone(data) {
    const response = await instance
      .post(endpoints.addPhone, data)
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getFavorites() {
    const response = await instance
      .get(
        endpoints.getFavorites +
          "/" +
          Vue.cookie.get("lang").toLowerCase() +
          "/"
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async addFavorite(data) {
    const response = await instance
      .post(
        endpoints.addFavorite + Vue.cookie.get("lang").toLowerCase() + "/",
        data
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    if (response.status === 200 || response.status === 201) {
      console.log();
    } else {
      alert("Не удалось добавить, попробуйте позже");
    }
  },

  async deleteFavorite(id) {
    const response = await instance
      .delete(
        endpoints.deleteFavorite +
          Vue.cookie.get("lang").toLowerCase() +
          "/" +
          id +
          "/"
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    if (response.status === 200 || response.status === 204) {
      console.log("ok");
    } else {
      alert("Не удалось удалить, попробуйте позже");
    }
  },

  async currentOrder() {
    const response = await instance
      .get(endpoints.currentOrder + Vue.cookie.get("lang").toLowerCase() + "/")
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getNewsById(id) {
    const response = await instance
      .get(
        endpoints.getNewsById + Vue.cookie.get("lang").toLowerCase() + "/" + id
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getBlogById(id) {
    const response = await instance
      .get(
        endpoints.getBlogById + Vue.cookie.get("lang").toLowerCase() + "/" + id
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  async getSearch(filter) {
    const response = await instance
      .post(
        endpoints.getSearch + Vue.cookie.get("lang").toLowerCase() + "/",
        filter
      )
      .catch((err) => {
        if (err.response.status === 401) {
          this.refresh();
        }
      });
    return response.data;
  },

  //sms

  async sendSms(data) {
    const response = await instance.post(endpoints.sendSms, data);
    return response;
  },

  async verifySms(data) {
    const response = await instance.post(endpoints.verifySms, data);
    return response;
  },

  async resetPass(data) {
    const response = await instance.post(endpoints.resetPass, data);
    return response;
  },
};
export default api;
