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
            $table->bigInteger('id_user',10)->unsigned();
            $table->foreign('id_user')->references('id')->on('users');
            $table->bigInteger('id_spot',10)->unsigned();
            $table->foreign('id_spot')->references('id')->on('spots');
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
