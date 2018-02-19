# Happy Lager - Craft Demo Site

This is a fork of the [Craft CMS demo site](https://github.com/pixelandtonic/HappyLager), updated for [Craft 3](https://craftcms.com/3), and using
[Neutrino](https://neutrino.js.org/) for front-end asset compilation (replacing
the existing Grunt-based tooling).

[CraftCMS Asset Rev](https://github.com/clubstudioltd/craft-asset-rev) is used
to output revved assets in Twig templates.

- Run `yarn start` to start Neutrino's dev-server for live-reloading and hot-module replacement.
- Run `yarn build` to build production

## Installation

1. Download/clone the repo on your computer

		> git clone -b neutrino https://github.com/timkelty/happylager.git

2. Set the permissions on happylager/storage/ to 777

		> cd happylager
		> chmod 777 storage

5. Create a new MySQL database called `happylager`, and import happylager.sql into it.

6. Fill in the proper MySQL credentials in `.env`.

7. Create a new virtual host with the hostname `happylager.test` that points to the happylager/web/ folder.

8. Initialize app

    > composer install
    > yarn install

9. Edit your hosts file to resolve happylager.test to `127.0.0.1`, if necessary.

Now you should be able to point your web browser to http://happylager.test/admin. You should either see a Craft login screen, or a prompt telling you that some database updates need to be run. If it’s the latter, just click “Finish up”.

Now point your browser at http://happylager.test. You should see the Happy Lager homepage.

## Logging in

The Craft Control Panel is located at http://happylager.test/admin. You can log in with the following credentials:

* Username: `admin`
* Password: `password`
