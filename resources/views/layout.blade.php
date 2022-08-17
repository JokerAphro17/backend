<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name') ?? 'African Wallet'}}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{secure_asset('css/app.css')}}">
        <link rel="stylesheet" href="{{secure_asset('css/custom.css')}}">
        
    </head>
    <body>
        <div id="root"></div>
        <script src="{{ secure_asset('../js/app.js') }}" defer></script>
    </body>
</html>
