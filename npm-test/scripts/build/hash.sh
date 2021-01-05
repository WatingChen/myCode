###
 # @Descripttion: 
 # @version: 
 # @Author: WaitingChen
 # @Date: 2021-01-04 17:55:47
 # @LastEditors: WaitingChen
 # @LastEditTime: 2021-01-04 17:56:10
### 

# 给图片资源加上版本号，并且替换引用
hashmark -c dist -r -l 8 '**/*.{png,jpg}' '{dir}/{name}.{hash}{ext}' | replaceinfiles -S -s 'dist/**/*.css' -d '{dir}/{base}'

# 给 js、css 资源加上版本号，并且替换引用
hashmark -c dist -r -l 8 '**/*.{css,js}' '{dir}/{name}.{hash}{ext}' | replaceinfiles -S -s 'client/index.html' -d 'dist/index.html'