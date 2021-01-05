###
 # @Descripttion: 
 # @version: 
 # @Author: WaitingChen
 # @Date: 2021-01-04 16:39:35
 # @LastEditors: WaitingChen
 # @LastEditTime: 2021-01-04 17:57:17
### 
for step in 'images' 'scripts' 'styles' 'hash'
do
  npm run build:$step
done