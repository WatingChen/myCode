###
 # @Descripttion: 
 # @version: 
 # @Author: WaitingChen
 # @Date: 2021-01-04 16:39:44
 # @LastEditors: WaitingChen
 # @LastEditTime: 2021-01-04 17:44:21
### 
for file in client/scripts/*.js
do
  ./node_modules/uglify-es/bin/uglifyjs $file --mangle > dist/scripts/$(basename $file)
done