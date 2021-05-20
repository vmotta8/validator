# Validator
Simple validator that I created to use in microservices

### How to use
```
% npm install @vmotta8/validator
```

```
const Validator = require('@vmotta8/validator')
```

#### Validators
##### Email
  - Return formatted email or error
```
const email = ' myemail@email.com '
const formattedEmail = Validator.validateEmail(email)

formattedEmail = 'myemail@email.com'
```