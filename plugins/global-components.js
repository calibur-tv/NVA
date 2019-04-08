import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import Pagination from '~/components/Pagination'
import Dialog from '~/components/Dialog'
import Icon from '~/components/Icon'
import hasRoleMixin from '~/mixins/hasRole'

Vue.use(Element)
Vue.mixin(hasRoleMixin)
Vue.component('v-icon', Icon)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
