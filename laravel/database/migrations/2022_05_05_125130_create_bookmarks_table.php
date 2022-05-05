<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookmarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookmarks', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->collation = 'utf8mb4_general_ci';
            $table->increment('id')->unsigned();
            $table->bigInteger('id_spot',10)->unsigned();
            $table->foreign('id_spot')->references('id')->on('spots');
            $table->bigInteger('id_comment',10)->unsigned();
            $table->foreign('id_comment')->references('id')->on('comments');
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
        Schema::dropIfExists('bookmarks');
    }
}
