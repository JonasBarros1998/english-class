#/bin/bash


#Execute este shell script para fazer a limpeza do cache, 
# ao terminar de fazer as configurações de alias de importação de arquivos


#excluindo das pastas android e ios
rm -rf ios/build android/app/build

#limpeza de cache
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && yarn install

yarn start --reset-cache

echo ''
echo ''

echo 'execute um dos seguintes comandos abaixo...'

echo ''
echo ''

echo 'yarn start' 
echo 'yarn run android'

echo ''
echo ''

echo 'npm start'
echo 'npm run android'
