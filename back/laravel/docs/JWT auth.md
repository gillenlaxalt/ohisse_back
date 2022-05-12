# JWT Auth

composer require tymon/jwt-auth

Ajout dans composer 

```php
"require": {
        ....
        "tymon/jwt-auth": "^1.0.2"
    },
```

Dans le fichier : config/app.php

```php
'providers' => [
   ...
 /*
         * Package Service Providers...
         */
        Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
],
'aliases' => [
    ...
    'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
     'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
],
```

dans le terminal 

php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

Si cette erreur

Class 'Tymon\JWTAuth\Providers\LaravelServiceProvider' not found

faire 

composer require tymon/jwt-auth:dev-develop --prefer-source

refaire la commande


puis cette commande 

php artisan jwt:secret

doit rajouter une ligne dans le fichier .env 
JWT_SECRET=foobar


creation JwtMiddleware

php artisan make:middleware JwtMiddleware



Protéger les routes 

Route::groupe(['middleware' => ['jwt.verify']], function(){

});


'guards' => [
        'web' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],
