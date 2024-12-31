import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    vue: {
      overrides: {
        // enforce order of component top-level elements 自定义 Vue 文件中标签的顺序，模板 -> 脚本 -> 样式
        'vue/block-order': ['error', {
          order: ['template', 'script', 'style'],
        }],
      },
    },
  },

  {
    rules: {
      'unused-imports/no-unused-vars': 'off', // 禁用规则
      'no-console': 'off', // 禁用对 console 的检查
    },

  },
)
