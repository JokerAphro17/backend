@component('mail::message')
# Renitialisation de mot de password
cliquer le bouton suivant pour renitialiser votre mot de passe :
@component('mail::button', ['url' => env('APP_URL').'/reset/password/'.$token])
Modifier mot de passe
@endcomponent

L'équipe de {{ config('app.name') }} vous remercie.
{{ config('app.name') }}
@endcomponent