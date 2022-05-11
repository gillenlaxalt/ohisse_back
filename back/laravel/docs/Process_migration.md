# Création des tables de la base de données via migration

## Dépendances 

PHP Artisan est déjà fournit par défaut dans un projet Laravel

Pour modifier les tables, il faut que la dépendance Doctrine soit installée.

Sur Packagist
```php
composer require doctrine/dbal
```
[Doctrine](https://packagist.org/packages/doctrine/dbal)

## Création d'une table

A répéter pour chaque table

```php
php artisan make:migration create_categories_table --create categories
```

Ci-dessus l'exemple décomposé pour une table catégories.

Le fichier généré par cette commande se trouvera dans le dossier `database/migrations`

A chaque migration effectuée, une entrée sera ajoutée automatiquement par Laravel dans la table "migrations" de la base de données. Cette table "migrations" est créée automatiquement lors de la migration initiale.

_La base_
```
php artisan make:migration
```

_Choix de la table_
```
create_nomDeLaTable_table
```
On pourrait s'arrêter là, le fichier se générarait, mais avec un nom comprenant la date du jour : `2022_05_05_124846`.

_Personnalisation du nom_

On ajoute
```
--create nomDeLaTable
```
Le nom serait alors, avec une table nommée categories

`2022_05_05_124846_create_categories_table`

### fichier généré

```php
<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreateCategoriesTable extends Migration
{
    /**
    * Run the migrations.
    *
    * @return void
    */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
             $table->id();
             $table->timestamps();
        });
    }


    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {
        Schema::dropIfExists('categories');
    }

}
```

Schema : trois principales méthodes statiques

- create() : pour créer une table
- dropIfExists (ou drop()) : pour supprimer une table
- table() : pour modifier une table

### Pour éxécuter la création de la table (ou des tables)

Lorsque tous vos fichiers de tables via migration sont terminés, il faut maintenant demander à artisan d'éxécuter une commande pour finaliser la création sur la base de données.

```php
php artisan migrate
```
Pour simuler une exécution et donc vérifier qu'il n'y aura pas d'erreur, on peut exécuter cette commande.

```php
php artisan migrate --pretend
```

### Rollback : revenir en arrière


Pour inverser le résultat d'une migration, vous pouvez exécuter la commande suivante :

```php
php artisan migrate:rollback
```
Cette commande utilise la fonction "down" présente dans le fichier de migration. Elle se trouve à la suite de la fonction "up" qui elle correspond à l'exécution de la migration.

### Refresh : réinitialiser complétement la base de données

Pour repartir depuis le début et inverser le résultat de toutes les migrations effectuées, vous pouvez exécuter la commande suivante : 

```php
php artisan migrate:refresh
```

Dans le cas où vous avez en main les fichiers de seeds qui permettent d'insérer les données initiales (et les données de tests), vous pouvez même demander à ce que les données soient insérées sur-le-champ dans les tables nouvellement créées, avec la commande suivante : 

```php
php artisan migrate:refresh --seed
```

## Modification d'une table via migration

Il est fortement conseillé d'éditer une table créée via migration, depuis migration avec artisan. Pour cela, il faut générer un fichier de migration pour la modification souhaitée (voir ci-dessous).

Doctrine, installé précédemment est la dépendance qui sert à exécuter les modifications.

### Générer un fichier de migration pour modification

Il faut générer un nouveau fichier de migration. Mais, ce dernier sert à modifier la table souhaitée. 

```php
php artisan make:migration change_categories_couleur_column --table categories
```
```php
php artisan make:migration update_categories_couleur_column --table categories
```
### fichier généré

```php
class ChangeCategorieCouleurColumn extends Migration

{

    /**

     * Run the migrations.

     *

     * @return void

     */

    public function up()

    {

        Schema::table('categories', function(Blueprint $table) {

            $table->dropColumn('couleur');

            $table->integer('couleur_id')->unsigned()->after('description');

 

            $table->foreign('couleur_id')->references('id')->on('couleurs');

        });

    }

 

    /**

     * Reverse the migrations.

     *

     * @return void

     */

    public function down()

    {

        Schema::table('categories', function(Blueprint $table) {

            $table->dropForeign('categories_couleur_id_foreign');

 

            $table->dropColumn('couleur_id');

            $table->string('couleur')->after('description');

        });

    }

}
```
[Apical.xyz](https://apical.xyz/fiches/creation_de_la_base_de_donnees_et_de_ses_tables/Les_fichiers_de_migration_pour_creer_les_tables)
## Exemple concret

### Table de migration

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spots', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8mb4_general_ci';
            $table->bigIncrements('id')->unsigned();
            $table->string('name', 64);
            $table->integer('number')->unsigned()->nullable()->length(10);
            $table->string('street', 100)->nullable();
            $table->integer('zipcode')->unsigned()->nullable()->length(10);
            $table->string('city', 64);
            $table->string('country', 64);
            $table->string('longitude', 64);
            $table->string('latitude', 64);
            $table->string('discipline', 64);
            $table->string('type', 64);
            $table->string('rock_type', 64)->nullable();
            $table->string('picture', 255)->nullable();
            $table->string('various', 255);
            $table->integer('reputation')->nullable();
            $table->string('min_difficulty', 64)->nullable();
            $table->string('max_difficulty', 64)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('spots');
    }
}
```
_Avec foreign key (clef étrangère)_
```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8mb4_general_ci';
            $table->increments('id')->unsigned();
            $table->text('content');
            $table->foreignId('id_user')->constrained("users")->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('id_spot')->constrained("spots")->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}

```

### Table de migration pour modifier

_Exemple avec update_

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSpotsZipcodeColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('spots', function (Blueprint $table) {
            $table->string('zipcode', 64)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('spots', function (Blueprint $table) {
            $table->integer('zipcode', 64)->unsigned()->nullable()->change();
        });
    }
}

```
