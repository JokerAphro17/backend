@component('mail::message')
@component('mail::message')
Votre compte a été créé avec succès. <br>
Vos informations de connexion sont les suivantes : <br>

<h3> Informations de connexion </h3>
<ul>
    <li>Adresse email : {{ $user->email }}</li>
    <li>Mot de passe : {{ $password }}</li>
</ul>
Merci
@endcomponent
{{ config('app.name') }}
@endcomponent