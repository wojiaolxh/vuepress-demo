###
 # @Author: your name
 # @Date: 2021-11-18 19:19:56
 # @LastEditTime: 2021-11-18 19:29:24
 # @LastEditors: Please set LastEditors
 # @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 # @FilePath: \vuepress-starter\docs\deploy.sh
### 

#!/user/bin/env.sh


#确保脚本抛出遇到的错误
set -env

#生成静态文件
npm run docs:build

#进入生成的文件夹
cd docs/.vuepress/dist

#如果是发布到自定义域名
#echo 'www.yourwebsite.com' > CNAME

git init 
git add -A
git commit -m 'deploy'

#如果你想要部署到  https://USERNAME.github.io
git push -f git@github.com:wojiaolxh/wojiaolxh.github.io.git master

#如果你想要部署到  https://USERNAME.github.io/[REPO] REPO=github上的项目
#git push -f git

cd -

