import Vue from 'vue'
import App from './App.vue'
import Event from './app/Event'
import Vuetify from 'vuetify'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import Alert from '@/components/Browser/Tool/Alert'
import ConfirmDeleteModel from '@/components/Model/ConfirmDelete/ConfirmDeleteModel'
import Content from '@/components/Browser/Content/Content'
import CreateNewFolderModel from '@/components/Model/CreateFolder/CreateNewFolderModel'
import InfoBar from '@/components/Browser/InfoBar/InfoBar'
import File from '@/components/Browser/Items/File'
import FileMenu from '@/components/Menu/FileMenu/FileMenu';
import Folder from '@/components/Browser/Items/Folder'
import FolderMenu from '@/components/Menu/FolderMenu/FolderMenu'
import Navbar from '@/components/Browser/NavBar/NavBar'
import OnlineState from '@/components/Browser/Tool/OnlineState'
import ProgressBar from '@/components/Browser/Tool/ProgressBar'
import ToolModel from '@/components/Model/Tool/ToolModel'
import RenameModel from '@/components/Model/Rename/RenameModel'
import Model from '@/components/Model/Model'
import Settings from '@/components/Browser/Settings/Settings'
import Browser from '@/components/Browser/Browser'
import Menu from '@/components/Menu/Menu';

import 'vuetify/dist/vuetify.min.css'
import './styles/mediamanager.scss'

Vue.use(Vuetify)

// Load components
Vue.component('media-alert', Alert)
Vue.component('media-file', File)
Vue.component('media-folder', Folder)
Vue.component('media-online-state', OnlineState)
Vue.component('media-progress-bar', ProgressBar)
Vue.component('media-content', Content)
Vue.component('media-nav-bar', Navbar)
Vue.component('media-infrobar', InfoBar)
Vue.component('media-tool-model', ToolModel)
Vue.component('media-confirm-delete-model', ConfirmDeleteModel)
Vue.component('media-create-folder-model', CreateNewFolderModel)
Vue.component('media-rename-model', RenameModel)
Vue.component('media-settings', Settings)
Vue.component('media-file-menu', FileMenu)
Vue.component('media-folder-menu', FolderMenu)
Vue.component('media-browser', Browser)
Vue.component('media-model', Model)
Vue.component('media-menu', Menu)

// Register MediaManager namespace
window.MediaManager = window.MediaManager || {};
// Register the media manager event bus
window.MediaManager.Event = new Event();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
