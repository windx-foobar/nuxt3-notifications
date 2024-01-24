export default defineAppConfig({
  docus: {
    title: 'Nuxt 3 Notification',
    description: 'The best place to start your documentation.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    image: '',
    socials: {
      // twitter: 'nuxt_js',
      github: 'windx-foobar/nuxt3-notifications',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
      npm: {
        label: 'NPM',
        icon: 'simple-icons:npm',
        href: 'https://www.npmjs.com/package/nuxt3-notifications'
      }
    },
    // github: {
    //   dir: '.starters/default/content',
    //   branch: 'main',
    //   repo: 'docus',
    //   owner: 'nuxt-themes',
    //   edit: true
    // },
    aside: {
      level: 1,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: false
    }
  }
})
