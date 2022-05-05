<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('firstname', 64)->nullable();
            $table->string('lastname', 64)->nullable();
            $table->string('pseudo', 64);
            $table->string('city', 64);
            $table->string('country', 64);
            $table->string('description', 255)->nullable();
            $table->string('email', 64);
            $table->string('password', 64);
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
        Schema::dropIfExists('users');
    }
}
