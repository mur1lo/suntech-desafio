**Como executar:**

## Pré-requisitos ###
* [angular-cli](https://cli.angular.io/)
* node
* npm
* maven

## Para suntech-backend ###
* 1 - Execute `./mvnw install`
* 1.2 - Execute `./mvnw spring-boot:run`
* 1.3 - Documentação com swagger em: 'http://localhost:8080/suntech/swagger-ui.html'
* 1.4 - Spring iniciará uma carga inicial de dados
* 1.5 - Banco disponível em: 'http://localhost:8080/suntech/h2'

## Para suntech-frontend ###
* 2 - Execute `npm install`
* 2.2 - Execute `npm start`
* 2.3 - Acesse: 'http://localhost:4200/'


## Tecnologia ###
* java 8
* JPA
* [Spring boot](https://spring.io/projects/spring-framework)
* [Mapstruct](http://mapstruct.org/)
* [MyBatis](http://www.mybatis.org/mybatis-3/)
* [Maven](https://maven.apache.org/)
* [H2](http://www.h2database.com/html/main.html)
* [Angular 5](https://angular.io/guide/quickstart)
* [Bootstrap 4](https://getbootstrap.com/)
* [Angular Material](https://material.angular.io/)


## Conclusão do desafio ###
* Arquitetura REST, mapstruct para os DTOS, boostrap 4 para layout e a biblioteca de componentes do Angular Material.
* Poderia ter feito o CRUD completo, lazy datamodel, testes unitarios
