# Os-trainees
# PROBLEMA:
Necessidade de distanciamento físico constante entre as pessoas - Formas de comportamento e Aspectos de planejamento físico/ambientais
# Necto

Necto é uma aplicação mobile com o objetivo de ajudar no monitoramento de usuários num cenário pós pandemia. A ideia consiste de os usuários lerem um QR Code antes de entrar em um ambiente fechado registrando a data e a hora que esteve. Quando um usuário for diagnosticado com covid a aplicação verifica os locais onde esteve e notifica as pessoas que estiveram no mesmo local na mesma hora.

# Funcionalidades

  - Leitura de QR Code para o registro de cada ambiente que o usuário entrar
  
  ![scanner](https://github.com/COVIDAS-UnB/Os-trainees/blob/master/front-end/images/scanner.png)
  ![scanner confirmation](https://github.com/COVIDAS-UnB/Os-trainees/blob/master/front-end/images/scannerconfirmation.png)
  - Notificação em tempo real
  
  ![notification](https://github.com/COVIDAS-UnB/Os-trainees/blob/master/front-end/images/notifications.png)
  - Mapa com locais onde os QR Codes se encontram
  
  ![map](https://github.com/COVIDAS-UnB/Os-trainees/blob/master/front-end/images/mapa.png)
 

### Tecnologias

Necto utiliza essas tecnologias para facilitar o desenvolvimento:

* [React Native](https://github.com/facebook/react-native) - Desenvolver apps com a facilidade do desenvolvimento web!
* [Ruby on Rails](https://rubyonrails.org/) - Criar uma api para servir como um banco de dados.
* [Expo](https://expo.io/) - Utilizado para testar o aplicativo em react native.

### Instalação
É necessário que o [react native](https://reactnative.dev/docs/environment-setup), [ruby on rails](https://guides.rubyonrails.org/v5.0/getting_started.html), [expo](https://expo.io/learn), [npm](https://www.npmjs.com/get-npm) (ou [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)) e o [nodeJS](https://nodejs.org/en/download/package-manager/).
Caso não tenha, instalado alguma das tecnologias citadas, clique nelas para abrir a documentação.

1 - Clone nosso repositório na sua máquina

```
git clone https://github.com/COVIDAS-UnB/Os-trainees
```

2 - Entre no diretório que o clone criou, na pasta front-end e por último na pasta necto
```
cd Os-trainees/front-end/necto/
```
3 - Inicie o expo
```
expo start
```
4 - Ele abrirá uma aba no seu navegador com um QR Code. Baixe o aplicativo do expo no seu celular e leia o código.

5 - Pronto! Apos compilar ele te mostrará como está o aplicativo.
