###
 # @Descripttion: 
 # @version: 
 # @Author: WaitingChen
 # @Date: 2021-01-05 10:01:02
 # @LastEditors: WaitingChen
 # @LastEditTime: 2021-01-05 10:02:46
### 

#chmod a+x scripts/bump.sh  文件可执行权限

#!/usr/bin/env bash

# get major/minor/patch version to change
version=`cat package.json| grep version | grep -v release | awk -F\" '{print $4}'`
components=($(echo $version | tr '.' '\n'))
major=${components[0]}
minor=${components[1]}
patch=${components[2]}

release='patch';

# decide which version to increment
if [ $patch -ge 9 ]; then
    if [ $minor -ge 9 ]; then
        release='major'
    else
        release='minor'
    fi
else
    release='patch'
fi

echo "major=$major, minor=$minor, patch=$patch, release=$release"

# upgrade version
npm run release:$release