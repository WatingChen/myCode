###
 # @Descripttion: 
 # @version: 
 # @Author: WaitingChen
 # @Date: 2021-01-04 16:39:44
 # @LastEditors: WaitingChen
 # @LastEditTime: 2021-01-04 17:42:42
### 
for file in client/styles/*.css
do
  lessc $file | cssmin > dist/styles/$(basename $file)
done