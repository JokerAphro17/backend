@component('mail::message')
# Code de verifcation

Bonsoir {{ $user->lastname }}, vous vavez creer un compte sur notre Plateforme Awa,
Nous vous souhaite la bienvenue.

Validez votre compte avec le code de vérification suivant:

<h1>
    {{ $user->code_verified }}
</h1>

Thanks,<br>
{{ config('app.name') }}
@endcomponent