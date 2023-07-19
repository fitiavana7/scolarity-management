<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shorcut icon" href="{{ asset('./style-pro/pics/logo.jpeg') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel mastering</title>
    <!-- BOOSTRAP FILE -->
    <link rel="stylesheet" href="{{ asset('./style-pro/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('./style-pro/css/w3.css') }}">
    <link rel="stylesheet" href="{{ asset('./style-pro/css/fontAwesome/css/font-awesome.min.css') }}">

    <!-- STYLE DE HOME -->
    <link rel="stylesheet" href="{{ asset('./style-pro/index.css') }}">
    <!-- STYLE VOIR -->
    <link rel="stylesheet" href="{{ asset('./style-pro/show.css') }}">

    <!-- STYLE AJOUT & MODIFIER-->
    <link rel="stylesheet" href="{{ asset('./style-pro/ajouter.css') }}">
</head>
<body>
    @yield('content')
</body>
</html>