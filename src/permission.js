/* eslint-disable */
import router from './router'
import { updateTitle } from '@/utils'

router.beforeEach(async (to, from, next) => {
  next();
})

router.afterEach(to => {
  updateTitle(to.meta.title)
})