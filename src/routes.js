import Coj from "./components/coj";
import RadioPodcasts from "./components/radio-podcasts";

const routes = [
  { path: "/", redirect: "/coj"},
  { path: "/coj", component: Coj },
  { path: "/radio-podcasts", component: RadioPodcasts },
];

export {
  routes
}
