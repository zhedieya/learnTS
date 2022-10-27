module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
      // 禁止使用 var
      'no-var': "error",
      // 优先使用 interface 而不是 type
      '@typescript-eslint/consistent-type-definitions': [
          "error", // 表示关闭/警告/报错
          "interface"
      ]
  }
}
// 关闭：禁用此规则
// 警告：代码检查时输出错误信息，但是不会影响到 exit code
// 报错：发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1（一般 exit code 不为 0 则表示执行出现错误）
