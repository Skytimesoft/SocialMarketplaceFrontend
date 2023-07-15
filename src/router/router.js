import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserPaynel from "../components/layouts/UserPaynel.vue";
import Helper from '@/Helper'
import axios from "axios";

const checkAuth = (to, from, next) => {
	if (location.pathname != '/user-login' && location.pathname != '/user-register') {
		if (!Helper.TOKEN) {
			location.href = '/user-login'
		}
		axios.get(`http://127.0.0.1:8000/api/user/verification-token`);
		// location.href = '/'
	}
	next()
}

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
		{
		  path: "/selection",
		  name: "selection",
		  component: () => import("../views/Selection.vue"),
		},
		{
		  path: "/user-register",
		  name: "register",
		  component: () => import("../views/Register.vue"),
		},
		{
		  path: "/user-login",
		  name: "login",
		  component: () => import("../views/Login.vue"),
		},
 
		{
			path: "/user",
			name: "user",
			component: UserPaynel,
			children: [
				{
					beforeEnter: checkAuth,
					path: "",
					name: "dashboard",
					component: () => import("../views/user/Dashboard.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "ticket",
					name: "ticket",
					component: () => import("../views/user/Ticket.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "orders",
					name: "orders",
					component: () => import("../views/user/Orders.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "profile",
					name: "profile",
					component: () => import("../views/user/Profile.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "affiliate-program",
					name: "AffiliateProgram",
					component: () => import("../views/user/AffiliateProgram.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "add-funds",
					name: "AddFunds",
					component: () => import("../views/user/AddFunds.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "security",
					name: "Security",
					component: () => import("../views/user/Security.vue"),
				},
				{
					beforeEnter: checkAuth,
					path: "notifications",
					name: "Notifications",
					component: () => import("../views/user/Notifications.vue"),
				},
			],
		},
	],
});



// router.beforeEach(async function (to, from, next) {
// 	let token = Helper.TOKEN;
// 	console.log(to);
// 	if (location.pathname != '/user-login') {
// 		if (!token) {
// 			location.href = '/user-login'
// 		}
// 		axios.get(`http://127.0.0.1:8000/api/user/verification-token`);
// 		// location.href = '/'
// 	}
// 	// 
// 	// axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
// 	// await axios.get(`http://127.0.0.1:8000/api/user/verification-token`)
// 	// 	.then(res => {
// 	// 		console.log(res.data);
// 	// 	})
// 	// 	.catch(e => { })
// 	/* 
	
// 	*/
// 	// axios.post('http://127.0.0.1:8000/api/login', {
// 	// 	email: 'hyatt.alice@example.org',
// 	// 	password: 'password',
// 	// }).then(res => res.data)
// 	// .then(result => {
// 	// 	console.log(result)
// 	// });
// 	next()
// })


export default router;

