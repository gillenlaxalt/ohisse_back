<?php

    // On use le "CoreModel" de Eloquent pour en hériter
  // et ainsi avoir tout plein de trucs déjà codés !
  namespace App\Models;
  use Illuminate\Database\Eloquent\Model;
  use Tymon\JWTAuth\Contracts\JWTSubject;
  use Illuminate\Notifications\Notifiable;
  use Illuminate\Foundation\Auth\User as Authenticatable;

  class User extends Authenticatable implements JWTSubject
  {
    // Par défaut, Eloquent va chercher une table qui porte le nom
    // du modèle au pluriel, ici 'users'

    use Notifiable;

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

  }
