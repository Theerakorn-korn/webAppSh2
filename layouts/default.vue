<template>
  <v-app dark>
    <!-- Main Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="elevation-4"
    >
      <!-- Header Section -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon large color="primary">mdi-application</v-icon>
        </v-list-item-avatar>
        <v-list-item-title class="text-h6">
          {{ appName }}
        </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Navigation Items -->
      <v-list dense nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="my-1"
        >
          <v-list-item-icon>
            <v-icon :color="item.color || 'grey'">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- Footer section in drawer -->
      <template v-slot:append>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-caption">
              Version 2.0
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar 
      :clipped-left="clipped" 
      fixed 
      app 
      elevation="2"
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      
      <v-btn 
        icon 
        @click.stop="toggleMiniVariant"
        v-tooltip:bottom="miniVariant ? 'Expand menu' : 'Collapse menu'"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-toolbar-title class="text-h6">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <!-- User Actions -->
      <v-btn icon @click="toggleTheme" v-tooltip:bottom="'Toggle theme'">
        <v-icon>mdi-{{ $vuetify.theme.dark ? 'weather-sunny' : 'weather-night' }}</v-icon>
      </v-btn>

      <v-btn icon @click="showNotifications" v-tooltip:bottom="'Notifications'">
        <v-badge 
          :content="notificationCount" 
          :value="notificationCount > 0" 
          color="error"
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar size="32">
              <v-icon>mdi-account</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="goToProfile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="showSettings">
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-4">
        <!-- Breadcrumb -->
        <v-breadcrumbs 
          v-if="breadcrumbs.length > 0"
          :items="breadcrumbs"
          class="pa-0 mb-4"
        >
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>

        <!-- Page Content -->
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar.show"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      bottom
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Footer -->
    <v-footer 
      :absolute="!fixed" 
      app 
      color="grey darken-3"
      class="text-center"
    >
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <span class="text-caption">
            &copy; {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.
          </span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  
  data() {
    return {
      appName: 'Modern App',
      clipped: false,
      drawer: null, // null จะทำให้ responsive
      fixed: false,
      miniVariant: false,
      title: 'Dashboard',
      notificationCount: 3,
      
      // Navigation items
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/',
          color: 'primary'
        },
         {
          icon: 'mdi-package-variant',
          title: 'Products',
          to: '/book',
          color: 'green'
        },

        {
          icon: 'mdi-package-variant',
          title: 'Products',
          to: '/product',
          color: 'green'
        },
        {
          icon: 'mdi-chart-line',
          title: 'Analytics',
          to: '/analytics',
          color: 'orange'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Users',
          to: '/users',
          color: 'blue'
        },
        {
          icon: 'mdi-cog',
          title: 'Settings',
          to: '/settings',
          color: 'grey'
        }
      ],
      
      // Snackbar configuration
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 4000
      }
    }
  },

  computed: {
    breadcrumbs() {
      const route = this.$route
      const paths = route.path.split('/').filter(p => p)
      
      const crumbs = [
        { text: 'Home', href: '/', disabled: false }
      ]
      
      let href = ''
      paths.forEach((path, index) => {
        href += `/${path}`
        crumbs.push({
          text: this.capitalizeFirst(path),
          href: href,
          disabled: index === paths.length - 1
        })
      })
      
      return crumbs.length > 1 ? crumbs : []
    }
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },

    toggleMiniVariant() {
      this.miniVariant = !this.miniVariant
    },

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.showSnackbar(
        `Theme changed to ${this.$vuetify.theme.dark ? 'dark' : 'light'} mode`,
        'info'
      )
    },

    showNotifications() {
      this.showSnackbar('No new notifications', 'info')
      this.notificationCount = 0
    },

    goToProfile() {
      this.$router.push('/profile')
    },

    showSettings() {
      this.$router.push('/settings')
    },

    logout() {
      // Add logout logic here
      this.showSnackbar('Logged out successfully', 'success')
      this.$router.push('/login')
    },

    showSnackbar(text, color = 'success') {
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.show = true
    },

    capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },

  // Lifecycle hooks
  mounted() {
    // Welcome message
    this.showSnackbar('Welcome to the modern dashboard!', 'info')
  }
}
</script>

<style scoped>


.v-app-bar {
  backdrop-filter: blur(10px);
}

.v-main {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.v-application--is-dark .v-main {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

/* Smooth transitions */
.v-navigation-drawer,
.v-app-bar,
.v-btn {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>