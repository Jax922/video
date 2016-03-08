#!/bin/sh


cp="./src/components"
cd $cp

`test -d $1`
stat=$?
echo $stat
if [ $stat == 1 ]
then
  echo " $1 components id start build"
  # cd $cp
  mkdir $1 && cd $1
  touch widget_$1.html widget_$1.less widget_$1.js
  echo " $1 components id  build success"
else
  echo "this $1 components 已经存在， 可以使用delcp.sh删除重新创建"
fi
