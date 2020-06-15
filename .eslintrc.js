module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  // 以下中文注释后面有 f 字样，表示可通过fix命令自动修复
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,//单行时，允许拥有的属性数量
      "multiline": {//多行时
        "max": 1,//每行属性数量
        "allowFirstLine": false//第一行不允许有属性
      }
    }],
    "vue/singleline-html-element-content-newline": "off",//单行元素的内容之前和之后强制执行换行符
    "vue/multiline-html-element-content-newline":"off",//多行元素的内容之前和之后强制执行换行符
    "vue/name-property-casing": ["error", "PascalCase"],//强制执行name属性框的样式以实现一致性
    "vue/no-v-html": "off",//此规则报告v-html指令的所有用法，以降低将可能不安全/未转义的html注入浏览器导致跨站点脚本（XSS）攻击的风险。
    'accessor-pairs': 2,//强制 getter 和 setter 在对象中成对出现f
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],//强制箭头函数的箭头前后使用一致的空格f
    'block-spacing': [2, 'always'],//禁止或强制在代码块中开括号前和闭括号后有空格f
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],//强制在代码块中使用一致的大括号风格f
    'camelcase': [0, {
      'properties': 'always'
    }], //强制使用骆驼拼写法命名约定,(默认) 强制属性名称为驼峰风格
    'comma-dangle': [2, 'never'],//要求或禁止末尾逗号f
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],//强制在逗号前后使用一致的空格f
    'comma-style': [2, 'last'], // 控制逗号在行尾出现还是在行首出现  
    'constructor-super': 2,// 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
    'curly': [2, 'multi-line'],
    // 强制object.key 中 . 的位置，参数:  
    // property，'.'号应与属性在同一行  
    // object, '.' 号应与对象名在同一行
    'dot-location': [2, 'property'],
    'eol-last': 2, // 文件末尾强制换行
    // 'eqeqeq': ["error", "always", {"null": "ignore"}],//弃用
    'eqeqeq': ["error", "smart"],//要求使用 === 和 !==
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }], //生成器函数*的前后空格
    'handle-callback-err': [2, '^(err|error)$'], //nodejs 处理错误
    'indent': [2, 2, {
      'SwitchCase': 1
    }],//缩进风格
    'jsx-quotes': [2, 'prefer-single'],// JSX 属性中一致使用双引号或单引号
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],//对象字面量中冒号的前后空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, //new时必须加小括号
    'no-array-constructor': 2, //禁止使用数组构造器
    'no-caller': 2, //禁止使用arguments.caller或arguments.callee
    'no-console': 'off', //禁止使用console
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2,//禁止修改 const 声明的变量
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [2,{ "allowEmptyCatch": true }],
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,//禁止使用令人困惑的多行表达式 
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }], //引号类型 `` "" ''
    'semi': [2, 'never'],//要求或禁止使用分号代替ASI f
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],//强制分号之前和之后使用一致的空格f
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, //必须使用合法的typeof的值
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    'prefer-const': 2,//要求使用 const 声明那些声明后不再被修改的变量f
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }], //大括号内是否允许不必要的空格
    'array-bracket-spacing': [2, 'never'] //是否允许非空数组里面有多余的空格
  }
}
