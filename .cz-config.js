'use strict';

module.exports = {

  types: [
    { value: ':construction', name: '🚧  WIP:            开发中' },
    { value: ':sparkles', name: '✨  feat:           一个新特性' },
    { value: ':zap', name: '⚡  improvement:    对现有特性的提升' },
    { value: ':bug', name: '🐛  fix:            修复Bug' },
    { value: ':recycle', name: '🔨  refactor:       代码重构，注意和特性、重构区分开' },
    { value: ':memo', name: '📝    docs:           变更文档' },
    { value: ':white_check_mark', name: '✅   test:           修改或添加测试文件' },
    { value: ':wrench', name: '🔧  config:         修改或添加配置文件' },
    { value: ':art', name: '🎨  style:          修改格式，不影响功能，例如空格、代码格式等' },
  ],

  // scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],  // 仅在feat、fix时填写破坏性更改
  subjectLimit: 100, // limit subject length
  breaklineChar: '|',  // 设置body和footer中的换行符
};

