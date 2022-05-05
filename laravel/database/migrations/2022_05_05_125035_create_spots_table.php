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
            $table->increments('id')->unsigned();
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
