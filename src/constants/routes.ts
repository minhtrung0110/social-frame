export const ROUTES = {
  LOGIN: {
    key: "login",
    name: "Login",
    path: "/login",
    exact: true,
    isPrivate: false,
  },
  REGISTER: {
    key: "register",
    name: "register",
    path: "/register",
    exact: true,
    isPrivate: false,
  },
  SNAP_GRAM: {
    key: "snap-gram",
    name: "Snap Gram",
    path: "/snap-gram",
    exact: true,
    isPrivate: false,
  },

  EXPLORE: {
    key: "explore",
    name: "Explore",
    path: "/explore",
    exact: false,
  },
  SAVED: {
    key: "saved",
    name: "Saved",
    path: "/saved",
    exact: false,
  },
  ALL_USERS: {
    key: "all-users",
    name: "All Users",
    path: "/all-users",
    exact: false,
  },
  CREATE_POST: {
    key: "create-post",
    name: "Create Post",
    path: "/create-post",
    exact: false,
  },
  UPDATE_POST: {
    key: "update-post",
    name: "Update Post",
    path: "/update-post",
    exact: false,
  },
  PROFILE: {
    key: "profile",
    name: "Profile",
    path: "/profile/:id/",
    exact: false,
  },

  UPDATE_PROFILE: {
    key: "update-profile",
    name: "Update Profile",
    path: "/update-profile/:id",
    exact: false,
  },
  POST_DETAIL: {
    key: "post-detail",
    name: "Post Detail",
    path: "/posts/:id",
    exact: false,
  },

  NOT_FOUND: {
    key: "notFound",
    name: "Not Found",
    path: "/not-found",
    exact: false,
    isPrivate: false,
  },
};
export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];

export const BottomBarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];
