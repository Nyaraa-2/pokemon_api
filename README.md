
[![Netlify Status](https://api.netlify.com/api/v1/badges/087b243a-3b35-454a-b674-0b75f448bf4e/deploy-status)](https://app.netlify.com/sites/pokedex-vuejs-nyaraa/deploys). 
![alt text](https://pokeapi.co/static/pokeapi_256.3fa72200.png)

[PokeApi](https://pokeapi.co/)
As part of the evaluation of the skills of the vue.js module, it is to propose a user experience from an API of our choice.

![alt text](https://servicenav.coservit.com/wp-content/uploads/2021/05/203.jpg)
```
docker pull nyaraa/pokeapi_vue
All devices :
➜  ~ docker run -d -p 80:8080 nyaraa/pokeapi_vue
On Mac M1 : 
➜  ~ docker run --platform linux/amd64 -d -p 80:8080 nyaraa/pokeapi_vue           
app.listen(port, () => {80})
```

## The evaluation of competences will be based on the following axes:

#### Mastery of basic Vue.js concepts
- Declarative reporting (template) and directives (v-) :white_check_mark:
- Component communication (props/events) :white_check_mark:
- Using the options (computed, methods...) :white_check_mark:
- Code reuse (slots, mixins...) :white_check_mark:
#### Using plugins
- Navigation (vue-router) :white_check_mark:
- Global state with the store (vuex) :white_check_mark:
- Others (vuetify, vue-i18n...) :white_check_mark:
#### Interacting with APIs 
- Calls (axios, fetch) :white_check_mark:
- Dealing with asynchronicity (.then, async/await) :white_check_mark:
- Dealing with errors (try/catch, .catch) :white_check_mark:
#### Project organisation and experience developer  
- Organise the different components of the project (folders, naming...) :white_check_mark:
- Static analysis of the code, lintage and formatting (eslint, prettier...) :white_check_mark:
- Documentation (Project setup...) :white_check_mark:


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
nr serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Running the tests

```
nr test:unit
```

### Built With
![GitHub top language](https://img.shields.io/github/languages/top/Nyaraa-2/pokemon_api_vue_temp)



### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
