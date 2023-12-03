const Path = {
    Home: '/',
    About: '/about',

    Login: '/users/login',
    Register: '/users/register',
    Logout: '/users/logout',
    Profile: '/users/:userId',
    ProfileData: '/users/:userId/profile',
    ProfileCatches: '/users/:userId/catches',

    Browse: '/data/browse',
    CatchCreate: '/data/add-catch',
    CatchDetails: '/data/:catchId/details',
};

export default Path;
