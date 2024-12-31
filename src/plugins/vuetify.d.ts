declare module '@/plugins/vuetify' {
  import type { createVuetify } from 'vuetify'

  const vuetify: ReturnType<typeof createVuetify>
  export default vuetify
}
