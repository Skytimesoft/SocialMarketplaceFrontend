import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserPaynel from "../components/layouts/UserPaynel.vue";
import Helper from '@/Helper'
import axios from "axios";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		//   path: "/",
		//   name: "home",
		//   component: HomeView,
		// },
		// {
		//   path: "/about",
		//   name: "about",
		//   component: () => import("../views/AboutView.vue"),
		// },
		// {
		//   path: "/faq",
		//   name: "faq",
		//   component: () => import("../views/Faq.vue"),
		// },
		// {
		//   path: "/recommendations",
		//   name: "recommendations",
		//   component: () => import("../views/Recommendations.vue"),
		// },
		// {
		//   path: "/selection",
		//   name: "selection",
		//   component: () => import("../views/Selection.vue"),
		// },
		// {
		//   path: "/rules",
		//   name: "rules",
		//   component: () => import("../views/Rules.vue"),
		// },
		{
			path: "/user",
			name: "user",
			component: UserPaynel,
			children: [
				{
					path: "",
					name: "dashboard",
					component: () => import("../views/user/Dashboard.vue"),
				},
				{
					path: "ticket",
					name: "ticket",
					component: () => import("../views/user/Ticket.vue"),
				},
				{
					path: "orders",
					name: "orders",
					component: () => import("../views/user/Orders.vue"),
				},
				{
					path: "profile",
					name: "profile",
					component: () => import("../views/user/Profile.vue"),
				},
				{
					path: "affiliate-program",
					name: "AffiliateProgram",
					component: () => import("../views/user/AffiliateProgram.vue"),
				},
				{
					path: "add-funds",
					name: "AddFunds",
					component: () => import("../views/user/AddFunds.vue"),
				},
				{
					path: "security",
					name: "Security",
					component: () => import("../views/user/Security.vue"),
				},
				{
					path: "notifications",
					name: "Notifications",
					component: () => import("../views/user/Notifications.vue"),
				},
			],
		},
	],
});

router.beforeEach(async function (to, from, next) {
	let token = Helper.TOKEN;
	if (!token) {
		if (location.pathname != '/') {
			location.href = '/'
		}
		// location.href = '/'
	}
	// axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
	// await axios.get(`http://127.0.0.1:8000/api/user/verification-token`)
	// 	.then(res => {
	// 		console.log(res.data);
	// 	})
	// 	.catch(e => { })
	next()
})


export default router;

