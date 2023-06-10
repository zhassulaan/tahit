<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    "$route.path": {
      deep: true,
      handler() {
        if (this.$route.query.name === "about") {
          setTimeout(() => {
            document
              .querySelector("#about")
              .scrollIntoView({ block: "center", behavior: "smooth" });
          }, 1000);
        } else if (this.$route.query.name === "news") {
          setTimeout(() => {
            document
              .querySelector("#news")
              .scrollIntoView({ block: "center", behavior: "smooth" });
          }, 1000);
        } else if (this.$route.query.name === "blog") {
          setTimeout(() => {
            document
              .querySelector("#blog")
              .scrollIntoView({ block: "center", behavior: "smooth" });
          }, 1000);
        } else if (this.$route.query.name === "designersAbout") {
          setTimeout(() => {
            document
              .querySelector("#designersAbout")
              .scrollIntoView({ block: "center", behavior: "smooth" });
          }, 1000);
        }
      },
    },
  },
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("getCount");
    if (this.$cookie.get("lang")) {
      console.log(this.$cookie.get("lang"));
    } else {
      this.$cookie.set("lang", "Ru", 7);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap");

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

input {
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
