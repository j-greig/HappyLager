<?php
return [
    'manifestPath' => 'web/assets/build/manifest.json',
    'assetsBasePath' => 'web/assets/build',
    'assetUrlPrefix' => 'assets/build/',
    'pipeline' => $_SERVER['HTTP_X_DEV_SERVER_PROXY'] ? 'passthrough' : 'manifest|passthrough'
];
