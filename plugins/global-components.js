import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import Icon from 'vue-awesome/components/Icon.vue'
import Pagination from '~/components/Pagination'
import Dialog from '~/components/Dialog'
import hasRoleMixin from '~/mixins/hasRole'
require('vue-awesome/icons')

Vue.use(Element)
Vue.mixin(hasRoleMixin)
Vue.component('v-icon', Icon)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
