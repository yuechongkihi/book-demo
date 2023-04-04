import Vue from "vue";
import Router from "vue-router";
import Index from "../components/Index";
import Fruit from "../components/Fruit";
import Fashion from "../components/Fashion";
import Comment from "../components/comment";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/fruit",
      name: "Fruit",
      component: Fruit
    },
    {
      path: "/fashion",
      name: "Fashion",
      component: Fashion
    },
    {
      path: "/comment",
      name: "Comment",
      component: Comment
    }
  ]
});
