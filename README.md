## Como executar o app

#### clone o projeto
```
git clone git@github.com:JonasBarros1998/english-class.git
```

#### instale as dependências
```
cd englishclass

yarn install
```

#### Configuração do projeto Firebase

1 - Primeiro você deve criar um novo projeto no firebase

2 - Acesse o passo a passo abaixo para configurar o firebase no aplicativo

[Android](https://github.com/react-native-google-signin/google-signin/blob/master/docs/android-guide.md)

[IOS](https://github.com/react-native-google-signin/google-signin/blob/master/docs/ios-guide.md)


3 - Após fazer o passo a passo acima, precisamos obter nosso certificate fingerprint SHA-1 e SHA-256

```
cd englishclass/android/app

keytool -genkey -v -keystore ADD-KEY-NAME.keystore -alias ADD-ALIAS -keyalg RSA -keysize 2048 -validity 10000

#Obs: O arquivo gerado por esse comando deve permanecer na pasta englishclass/android/app
```

4 - Após criar a chave verifique os certificates fingerprint (SHA1 e SHA-256)
```
cd englishclass/android

./gradlew signingReport
```

- 4.1 - Após rodar o comando acima verifique a task com essa estrutura: 

```
Variant: release
Config: release
Store:
Alias: 
MD5: 
SHA1: 
SHA-256: 
Valid until: 
```

5 - Copie a chave SHA1 ou SHA-256 e cole em seu projeto no firebase
[instruções](https://support.google.com/firebase/answer/9137403?hl=en)

6 - Configure as variáveis de ambiente
- 6.1 - Abra o arquivo google-services.json e copie o clienteId
  ```
  "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "",
              "client_type": 
            }
          ]
        }
      }
  ```
- 6.2 - Em seguida cole o valor na função abaixo: 
  ```
  # src/googleSign/index.ts
  
  GoogleSignin.configure({
    webClientId: COLE AQUI,
    offlineAccess: false,
  });
  
  #Obs: Recomendamos a criação de um arquivo .env para armazenar essas variáveis de ambiente. 
  ```

#### Configurar o banco database real time
Se você realizou as instruções acima, não será necessário realizar nenhuma outra configuração. Porém existem outras formas de fazer a conexão com o banco, siga as instruções: 
[instruções](https://rnfirebase.io/auth/social-auth#google)



#### Executar a aplicação
```
yarn start

yarn run android
```

# imagens do app

![listas publicas](https://firebasestorage.googleapis.com/v0/b/app-english-class.appspot.com/o/public-list.png?alt=media)
![criar novas listas](https://firebasestorage.googleapis.com/v0/b/app-english-class.appspot.com/o/create-list.png?alt=media)
![pagina inicial](https://firebasestorage.googleapis.com/v0/b/app-english-class.appspot.com/o/main-page.png?alt=media)
![perfil](https://firebasestorage.googleapis.com/v0/b/app-english-class.appspot.com/o/public-list.png?alt=media)
